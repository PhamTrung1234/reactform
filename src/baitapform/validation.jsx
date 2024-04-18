
import React, {  Component } from 'react'
import { connect } from 'react-redux';
import { upDate, upDateData } from '../store/action';
 class Validation extends Component {
    constructor(props){
        super(props);
        this.state={
            userdata:{
                maSV:"",
                fullName:"",
                phoneNumber:"",
                email:""

            },
            
            error:{
                maSV:"",
                fullName:"",
                phoneNumber:"",
                email:""
            }
        }
        
    }
    handelOnchange=(e)=>{
        const {name,value,pattern} = e.target;
        
        const newarr = {...this.state.userdata,[name]:value}
        const newfailer = {...this.state.error}
        if(!value.trim()){
             newfailer[name]="vui lòng điền thông tin"
        }else{
            newfailer[name]=""
            if(pattern){
                const regux = new RegExp(pattern);
                const valid = regux.test(value);
                if(!valid){
                    newfailer[name] = `${name} không đúng định dạng`
                }
           }
        }
        this.setState({
            userdata:newarr,
            error: newfailer,
        })
        
    }

    handelSubmit=(e)=>{
        e.preventDefault();
        const {userdata} = this.state
        
        const newlistdata = [...this.props.listuser]
        const newErros = {...this.props.error}
        let isvalid = true;
        let found = true;
        newlistdata?.forEach(user=>{
                if(user.maSV===userdata.maSV){
                    newErros.maSV = "Mã sinh viên đã tồn tại";
                    found = false;
                    
                }
            })
        Object.values(newErros).forEach(item=>{
            
              if(item){
                isvalid= false;
              }
        })
        if(isvalid){
            
            if(found){
                this.props.upDateListUser(userdata)
            }
           
            
        }
        
        const {userEdit}= this.props;
        
        if(userEdit){
            this.props.updateUser(userdata)
            newErros.maSV = "";
        }
        this.setState({
            error:newErros,
        })
        
    }
    UNSAFE_componentWillReceiveProps(nextProps){
        
        const {userEdit} = nextProps
        
        if(userEdit){
            this.setState({
                userdata:{
                    maSV:userEdit.maSV,
                    fullName:userEdit.fullName,
                    phoneNumber:userEdit.phoneNumber,
                    email:userEdit.email
    
                },
            })
        }else{
            this.setState({
                userdata:{
                    maSV:"",
                    fullName:"",
                    phoneNumber:"",
                    email:""
    
                },
            })
        }
    }
    
    render() {
        const {userEdit} = this.props
        const {userdata,error} = this.state
        return (

            <form onSubmit={this.handelSubmit}>
                
                <div className='row m-0'>
                    <div className='col-6'>
                        <div className="form-group">
                            <label >Mã Sinh Viên</label>
                            <input
                                type="text"
                                name='maSV'
                                disabled={userEdit?true:false}
                                className="form-control"
                                value={userdata.maSV}
                                onChange={this.handelOnchange}
                                onBlur={this.handelOnchange}
                            />
                            {error.maSV&&( <span className='text-danger'>{error.maSV}</span>)}
                        </div>
                    </div>
                    <div className='col-6'>
                        <div className="form-group">
                            <label >Họ Tên</label>
                            <input
                                type="text"
                                className="form-control"
                                name='fullName'
                                value={userdata.fullName}
                                onChange={this.handelOnchange}
                                onBlur={this.handelOnchange}
                                pattern='^[a-zA-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶ" + "ẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợ" + "ụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\\s]+$'
                            />
                            {error.fullName&&( <span className='text-danger'>{error.fullName}</span>)}
                        </div>
                    </div>
                    <div className='col-6'>
                        <div className="form-group">
                            <label >Số Điện Thoại</label>
                            <input
                                type="text"
                                className="form-control"
                                name='phoneNumber'
                                value={userdata.phoneNumber}
                                onChange={this.handelOnchange}
                                onBlur={this.handelOnchange}
                                pattern='^(03|05|07|08|09)\d{8}$'
                            />
                             {error.phoneNumber&&( <span className='text-danger'>{error.phoneNumber}</span>)}
                        </div>
                    </div>
                    <div className='col-6'>
                        <div className="form-group">
                            <label >Email address</label>
                            <input
                                type="email"
                                className="form-control"
                                name='email'
                                value={userdata.email}
                                onChange={this.handelOnchange}
                                onBlur={this.handelOnchange}
                                pattern="^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$"
                            />
                             {error.email&&( <span className='text-danger'>{error.email}</span>)}
                        </div>
                    </div>
                </div>
                <button type="submit" className="btn btn-success ml-3 py-2">{userEdit ? "Cập Nhật":"Thêm Sinh Viên"}</button>
            </form>

        )
    }
}
const mapStateToProps=(state)=>{
    return{
        listuser:state.renderUserData.listuser,
        userdata:state.renderUserData.userdata,
        userEdit:state.renderUserData.userEdit,
    }
}
const mapDispatchToProps=(dispatch)=>{
     return {
        
        upDateListUser:(data)=>{
            
            dispatch(upDateData(data))
        },
        updateUser:(data)=>{
            
            dispatch(upDate(data));
        }
     }
}

export default connect(mapStateToProps,mapDispatchToProps) (Validation)