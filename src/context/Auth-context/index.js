import { createContext,useContext,useEffect,useReducer } from "react";
import { AuthReducer } from "../../Reducer/AuthReducer";

const initialState={
     email:"nikhil",
     password:"980",
     token:"",
}

const AuthContext=createContext();

const AuthProvider=({children})=>{

    useEffect(()=>{
       const token=localStorage.getItem("token");
       AuthDispatch({
        type:"INITIAL_STATE",
        payload:token
       })
    },[])
 
     const [{email,password,token},AuthDispatch]=useReducer(AuthReducer,initialState)
 return(     
    <AuthContext.Provider value={{email,password,token,AuthDispatch}}>
        {children}
    </AuthContext.Provider>

    )
   
}

const useAuth=()=>useContext(AuthContext);

export {useAuth,AuthProvider}