import { createSlice } from "@reduxjs/toolkit";
import { act } from "react";
import { setError } from "../auth/auth.slice";

const chatSlice = createSlice({
    name:'chat',
    initialState:{
        chats:{},
        currentChatId:null,
        isLoading:false,
        error:null
    },
    reducers:{
        setChats:(state,action)=>{
            state.chats = action.payload
        },
        setCurrentChatId:(state,action)=>{
            state.currentChatId = action.payload
        },
        setisLoading:(state,action)=>{
            state.isLoading = action.payload
        },
        setError:(state,action)=>{
            state.error = action.payload
        }
    }
})

export const {setChats,setCurrentChatId,setisLoading,setError} = chatSlice.actions
export default chatSlice.reducer;