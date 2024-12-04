import { Fragment } from "react";
import { useQuiz } from "../../context/Quiz-context"
import Navbar from "../../component/Navbar";
import "./index.css"
export const Result =()=>{

    const{score}=useQuiz();
    return (
        <Fragment>
        <Navbar route="Result"/>
        <main className="results d-flex direction-column align-center justify-center">
        <h2>Result</h2>
        <div>
        <span>Your Score is {score} 💥💥🤪 </span>
        </div>
        </main>
      

      </Fragment>
    )

}