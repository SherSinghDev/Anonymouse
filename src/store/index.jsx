import { configureStore } from "@reduxjs/toolkit";
import sidebarSlice from "./slices/sidebarSlice";
import menuSlice from "./slices/menu";

const store = configureStore({
    reducer:{
        sidebar:sidebarSlice,
        menu:menuSlice,
    }
})

export default store