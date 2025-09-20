'use client'

import UserSlice from "@/shared/Slices/UserSlice";
import { configureStore } from "@reduxjs/toolkit";


const store=configureStore({
    reducer:{
User:UserSlice
    }
})
export default store;