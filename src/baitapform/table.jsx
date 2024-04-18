import React, { Component } from 'react'
import { connect } from 'react-redux'
import { deleteUser, editUser } from '../store/action'
 class Table extends Component {
  
  



  handelUI = ()=>{
    const {listuser,keyword} = this.props
    let newarr = listuser.filter(pro=>{
         return pro.fullName.toLowerCase().indexOf(keyword.toLowerCase()) !== -1
    })
    
    return newarr.map((pro,index)=>{
       return (
        <tr key={index}>
            <th scope="row">{pro.maSV}</th>
            <td>{pro.fullName}</td>
            <td>{pro.phoneNumber}</td>
            <td>{pro.email}</td>
            <td>
                <button onClick={()=>{
                    this.props.deleteUser(pro)
                }} className='btn btn-danger'>Xóa</button>
                <button onClick={()=>{
                   this.props.editUser(pro)
                }} className='btn btn-primary ml-2'>Sửa</button>
            </td>
          </tr>
       )
    })
  }


  render() {
    
    return (
        <table className="table text-center mt-5">
        <thead className="thead-dark">
          <tr>
            <th scope="col">Mã Sinh Viên</th>
            <th scope="col">Tên Sinh Viên</th>
            <th scope="col">Số Điện Thoại</th>
            <th scope="col">Email</th>
            <th scope='col'>Action</th>
          </tr>
        </thead>
        <tbody>
          
          {this.handelUI()}
        </tbody>
      </table>
      
    )
  }
}
const mapStateToProps = (state)=>{
     return{
      listuser:state.renderUserData.listuser,
      keyword:state.renderUserData.keyword,
     }
}
const mapDispatchToProps = (dispatch)=>{
   return {
      deleteUser:(data)=>{
         
         dispatch(deleteUser(data))
      },
      editUser:(data)=>{
         
         dispatch(editUser(data))
      }
   }
}

export default connect(mapStateToProps,mapDispatchToProps) (Table)