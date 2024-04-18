import React, { Component } from 'react'
import { connect } from 'react-redux';
import { search } from '../store/action';
 class Search extends Component {
    
    handelOnchange=(event)=>{
         const {value} = event.target;
         this.props.searchUser(value)
         
    }
    

    render() {
        
        return (
            <div className='bg-dark text-light row   align-items-center mb-3'>

                <div className='col-md-6'>
                <h2 className='py-2 pl-5'>Thông tin sinh viên</h2>
                </div>
                <div className='col-md-6 '>
                    <form onSubmit={this.handelSubmit} className="form-inline my-2 my-lg-0">
                    <input
                        className="form-control mr-sm-2"
                        type="search"
                        placeholder="Tìm Kiếm Tên Sinh Viên"
                        aria-label="Search"
                        onChange={this.handelOnchange}
                    />
                    <button className="btn btn-outline-success my-2 my-sm-0" type="button">
                        Search
                    </button>
                </form>
                </div>
                
            </div>
        )
    }
}

const mapDispatchToProps=(dispatch)=>{
     return {
        searchUser:(keyword)=>{
             
             dispatch(search(keyword))
        }
     }
}



export default connect(null,mapDispatchToProps) (Search)