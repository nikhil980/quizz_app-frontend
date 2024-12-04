import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../../context/Auth-context'
import { LoginHandler } from '../../../services/LoginHandler';
import './index.css'

export const AuthLogin=()=>{

    const navigate=useNavigate();
    const {email,password,AuthDispatch}=useAuth();
    
      const onEmailchange=(e)=>{
            AuthDispatch({
                type:'EMAIL',
                payload:e.target.value
            }
        )
      }
      const onPasswordchange=(e)=>{
        AuthDispatch({
            type:'PASSWORD',
            payload:e.target.value
        })
     }

       const handleLoginClick=(e)=>{
        e.preventDefault();
       const token= LoginHandler(email,password);

       if(token)
       {
         navigate('/');
       }
       AuthDispatch({
        type:"TOKEN"
        ,payload:token
    })
          AuthDispatch({
               type:"CLEAR_CREDENTIALS"
          })

       }
       const handleTestCredentialClick=()=>{
        const token=  LoginHandler("nikhilchaurasiya980@gmail.com","nikhil980");
        AuthDispatch({
            type:"TOKEN"
            ,payload:token
        })
        if(token)
            {
              navigate('/');
            }  
    }
    return (
        <div className="d-grid">
              
            <div className="login-auth d-flex direction-coloum justify-center">
               
               <form onSubmit={handleLoginClick}>
               <h2 className="auth-title">Login</h2>
               <div className="form-container">
                    <lable className="form-lable"> Email</lable>
                    <input className="form-input lh-ls" onChange={onEmailchange}  placeholder="xyz@gmail.com"/>
                </div>
                <div className="form-container">
                    <lable className="form-lable">Password</lable>
                    <input className="form-input lh-ls"  onChange={onPasswordchange} placeholder="*************"/>
                </div>
                <div className="cta">
                    <button className="button login-btn btn-margin cursor sign-up-btn">Login</button>
                </div>
                <div>
                <button className="button login-btn btn-outline-primary btn-margin sign-up-btn " onClick={handleTestCredentialClick}>
                    Login with Credentials
                </button>
               </div>
               </form>
               
            </div>
        </div>
    )
}