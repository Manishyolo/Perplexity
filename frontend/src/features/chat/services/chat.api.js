import axios from "axios"

const api = axios.create({
    baseURL:"http://localhost:3000",
    withCredentials:true
})


export async function sendMessage({message,chatId}){
     const response = await api.post("/user/chat",{message,chatId})

     return response.data
}  

