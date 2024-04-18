import * as ActionType from "./constan"

const inittolstate={
    listuser:[
        {maSV:"MSV1",
        fullName:"Nguyen van a",
        phoneNumber:"0345612373",
        email:"pvtruong@gmai.com"}
    ],
    userdata:null,
    keyword:"",
    userEdit:null
}



 const renderUserData=(state = inittolstate,action)=>{
    
      switch (action.type) {
        
        case ActionType.UPDATE__DATA:
            const newlist = [...state.listuser];
            newlist.push(action.payload);
            state.listuser = newlist
            return {...state};
        case ActionType.DELETE_UESR:
            state.userdata = action.payload;
            const newlist1 = [...state.listuser]
            const newarr = newlist1.filter(pro=>{
                 return pro.maSV !== state.userdata.maSV
            })
            state.listuser = newarr
            return {...state}
        case ActionType.SEARCH:
            state.keyword = action.payload;
            return {...state}
        case ActionType.EDIT_USER:
            state.userEdit = action.payload;
            return {...state}
        case ActionType.UPDATE:
            const newarr1 = [...state.listuser];
            const index = newarr1.findIndex(pro=>{
                 return pro.maSV === action.payload.maSV;
            })
            newarr1[index] = action.payload;
            state.listuser = newarr1;
            state.userEdit =null;
            return {...state}
        default:
            return {...state};
      }
}

export default renderUserData;