import { configureStore } from "@reduxjs/toolkit";
import homeSlice from "../Redux/homeSlice";

const mystore = configureStore({
    reducer:{
        homebooks:homeSlice,
    }
})

export default mystore;