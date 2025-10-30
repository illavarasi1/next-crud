'use client'

import UserSlice from "@/shared/Slices/UserSlice";
import { configureStore } from "@reduxjs/toolkit";


const store=configureStore({
    reducer:{
User:UserSlice
    }
})
export type RootState = ReturnType<typeof store.getState>;
export default store;