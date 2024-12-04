import { createContext,useContext,useEffect,useReducer } from "react";
import { QuizReducer } from "../../Reducer/QuizReducer";

const initialState={
    index:0,
    score:0,
    quizCategory:"",
    selectedOption:"",
    quiz:[]
}
   const QuizContext=createContext();
   const QuizProvider=({children})=>{

    const [{index,quizCategory,quiz,selectedOption,score},quizDispatch]=useReducer(QuizReducer,initialState);
      
    useEffect(()=>{
      const currentIndex = Number(localStorage.getItem("index"));
      const currentScore = Number(localStorage.getItem("score"));
      const currentOption = localStorage.getItem("option");
      const currentCategory=localStorage.getItem("category");
      const currentQuiz=JSON.parse(localStorage.getItem("quiz"));
      localStorage.setItem("quiz",JSON.stringify(currentQuiz));
     quizDispatch({
        type:"INITIAL_STATE",
        payload:{currentIndex,currentOption,currentScore, currentQuiz,currentCategory}
     })       
    },[])
    
    return (
      <QuizContext.Provider value={{index,quiz,score,selectedOption,quizCategory,quizDispatch}}>
        {children}
      </QuizContext.Provider>
    )
   }
const useQuiz=()=>useContext(QuizContext);

export {useQuiz,QuizProvider}
