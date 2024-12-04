import { Fragment,useEffect } from "react"
import Navbar from "../../component/Navbar"
import axios from "axios";
import { QuestionAndOptions } from "../../component/QuestionAndOptions"
import { useQuiz } from "../../context/Quiz-context";

export const Quiz=()=>{

     const {quizCategory,quiz,quizDispatch}=useQuiz();
       
     useEffect(()=>{
        (async()=>{
            try{
             const {data:{data}}=await axios.get("https://quizz-app-backend-07xa.onrender.com/categories",{
                headers:{Authorization:localStorage.getItem("token")}
             });
           
              const filteredData= 
              data.filter(({ category }) => category === quizCategory);
             if(filteredData&&filteredData.length>0)
             {
                 quizDispatch({
                    type:"SET_QUIZ",
                    payload:filteredData
                 })                      
             }
             localStorage.setItem("quiz",JSON.stringify(filteredData))
            
            }
            catch(err)
            {
                console.log(err);
            }
        }
        )();
      },[])

    return (
       <Fragment>
        <Navbar route="Quiz"/>
        {
            quiz&&quiz.length>0&&<QuestionAndOptions quizData={quiz}/>
        }
     
       </Fragment>
    )
}