import {useNavigate} from "react-router-dom"
import { useQuiz } from "../../context/Quiz-context";

import "./index.css";
import { useEffect } from "react";

export const QuestionAndOptions = ({quizData}) => {

    const [currentQuiz] = quizData;
    const { title, quizz } = currentQuiz;

    const navigate = useNavigate();

    const { index, score, quizDispatch, selectedOption } = useQuiz();

    const handleNextQuestionClick = () => {
        localStorage.setItem("index", index + 1);
        if (index !== quizz.length - 1){
            quizDispatch({
                type: "NEXT_QUESTION"
            })
        }else{
            quizDispatch({
                type: "SUBMIT"
            })
            navigate("/result");
        } 
    }

    const handleAnswerClick = (optionId, isCorrect) => {
            quizDispatch({
                type: "SET_SELECTED_OPTION",
                payload: { optionId, isCorrect }
            })
    }

    const handleQuitClick = () => {
        quizDispatch({
            type: "QUIT",
        })
        navigate("/")
    }

    useEffect(() => {
        localStorage.setItem("option", selectedOption);
        localStorage.setItem("score", score);
    }, [selectedOption])


    return (
        <main className="d-flex justify-center qns-main">
            <section className="question-dialog container-flex">
                <h2 className="d-flex justify-center qns-title">
                    {title}
                </h2>
                <div className="qsn_scr">
                    <span>Question: {index + 1}/{quizz?.length}</span>
                    <span className="score">Score: {score}</span>
                </div>
                <div className="question">
                    <span>Q{index + 1}: {quizz[index]?.question}</span>
                </div>
                <div className="options-box">
                    {
                        quizz[index]?.options.map(({id, option, iscorrect}) => 
                        <button key={id} className={`button option d-flex justify-center ${selectedOption && iscorrect ? "success" : ""} ${selectedOption && selectedOption === id && !iscorrect ? "error" : ""}`} onClick={() => handleAnswerClick(id, iscorrect)} disabled={selectedOption !== null}>{option}</button>
                        )
                    }
                    
                </div>
                <div className="nxt-btn-container">
                    <div className="d-flex gap">
                        <button className="play-btn button btn-secondary cursor" onClick={handleQuitClick}>Quit</button>
                        <button className="nxt-qstn play-now-btn button btn-primary cursor" onClick={handleNextQuestionClick}>{index === quizz.length - 1 ? "Submit": "Next Question"}</button>
                    </div>
                </div>
            </section>
        </main>
    )
}