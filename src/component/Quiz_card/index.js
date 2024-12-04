import { useNavigate } from 'react-router-dom';
// import { useAuth } from '../../context/Auth-context'
import './index.css'
import { useQuiz } from '../../context/Quiz-context';


export const QuizCard=({quizCategory})=>{
   
    console.log(quizCategory);
     const {image,title,description,category}= quizCategory;
    //  const {token}=useAuth();
      const token =localStorage.getItem("token");
     const {quizDispatch}=useQuiz();
     const navigate=useNavigate();
     const handlePlayNowClick=()=>{

        if(token)
        {
            quizDispatch({
                type:"CATEGORY",
                payload:category
            })
          localStorage.setItem("category",category);
            navigate("/quiz");
        }
        else{
            navigate('/auth/login');
        }

     }
    return (
      
        <div className="container d-flex direction-column ">
            <div className="img-box">
             <img className="img" src={image} alt="quizzes"/>
            </div>
            <div className="details">
             <h3>{title} </h3> 
            </div>
             {description}
            <div >
             <button className="button play-now-btn btn-primary cursor" onClick={handlePlayNowClick}> play now</button>
            </div>


        </div>
     
    )
}