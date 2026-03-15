import { useDispatch } from "react-redux";
import { setUser,setLoading,setError } from "../auth.slice"; 
import { Login,Register,Getme } from "../services/auth.api";



export const useAuth = ()=>{

    const dispatch = useDispatch();

    async function handleRegister({username,email,password}){ 
            
         try {
            dispatch(setLoading(true))
            const response = await Register({username,email,password});


         } catch (error) {
            dispatch(setError(error.response?.data?.message || "Registration failed"))
         }
          finally{
            dispatch(setLoading(false))
        }
           
    }

    async function handleLogin({email,password}){
        try {
            dispatch(setLoading(true));
            const response = await Login({email,password});

            dispatch(setUser(response.user))
               

        } catch (error) {
               dispatch(setError(error.response?.data?.message || "Login failed"))
        }
        finally{
            dispatch(setLoading(false))
        }
    }
    async function handleGetme(){
        try {
            dispatch(setLoading(true));
            const response = await Getme();

            dispatch(setUser(response.user))
        } catch (error) {
             dispatch(setError(error.response?.data?.message || "failed to fetch user"))
        }
        finally{
            dispatch(setLoading(false))
        }
    }

 return {
    handleRegister,
    handleLogin,
    handleGetme
 }

}