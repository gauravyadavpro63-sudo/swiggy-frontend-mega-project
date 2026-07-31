import { configureStore } from "@reduxjs/toolkit";
import Cartslice from "./myslice"

const store=configureStore({
    reducer:{
        cartslice:Cartslice
    }
})

export default store