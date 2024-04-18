

import * as ActionType from "./constan";


export const upDateData = (data)=>{
     return {
        type:ActionType.UPDATE__DATA,
        payload:data,
     }
}

export const upDate = (data)=>{
    return {
        type:ActionType.UPDATE,
        payload:data
    }
}

export const deleteUser = (data)=>{
     return {
        type:ActionType.DELETE_UESR,
        payload:data
     }
}

export const editUser = (data)=>{
    return {
        type:ActionType.EDIT_USER,
        payload:data
    }
}

export const search = (data)=>{
    return {
        type:ActionType.SEARCH,
        payload:data,
    }
}