import { createSlice } from "@reduxjs/toolkit";

const menuSlice = createSlice({
    name:"menu",
    initialState:"home",
    reducers:{
        beActive(state,action){
            return action.payload
        }
    }
})

export default menuSlice.reducer
export const {beActive} = menuSlice.actions