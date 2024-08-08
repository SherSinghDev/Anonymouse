import { createSlice } from "@reduxjs/toolkit";

const sidebarSlice = createSlice({
    name:"sidebar",
    initialState:true,
    reducers:{
        open(state,action){
            return true
        },
        close(state,action){
            return false
        }
    }
})

export default sidebarSlice.reducer

export const {open,close} = sidebarSlice.actions