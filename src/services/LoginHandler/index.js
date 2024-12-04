import axios from "axios";

export const LoginHandler=async(email,password)=>{
   
    try{
        const {data :{token},status}=await axios.post("https://quizz-app-backend-07xa.onrender.com/auth/login" ,{
            email:email,
            password:password
        });
        if(status===200)
        {
            localStorage.setItem("token",token);
             return token;
        }

    }
    catch(err){
         console.error (err);
    }
}