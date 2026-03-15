import axios from "axios";

const api = axios.create({
    baseURL:"http://localhost:3000",
    withCredentials:true
})


export async function Login({email,password}){
     const response = await api.post("/user/login",{email,password})

     return response.data;
}

export async function Register({username,email,password}){

    const response = await api.post("/user/register",{username,email,password});
     return response.data;

}

export async function Getme(){
        const response = await api.get("/user/getme");
     return response.data;
}