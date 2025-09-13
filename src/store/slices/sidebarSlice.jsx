import { createSlice } from "@reduxjs/toolkit";

const sidebarSlice = createSlice({
    name:"sidebar",
    initialState:true,
    reducers:{
        open(state,action){
            return !state
        },
        close(state,action){
            return !state
        }
    }
})

export default sidebarSlice.reducer

export const {open,close} = sidebarSlice.actions