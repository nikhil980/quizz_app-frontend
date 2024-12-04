import {Link, useNavigate} from 'react-router-dom'
import { useQuiz } from '../../context/Quiz-context';
import { Fragment } from 'react';
import "./index.css"
import logo from "./quiz.png"
const Navbar= ({route}) => {
  const token=localStorage.getItem("token");
    const navigate=useNavigate();
    const {quizDispatch}=useQuiz();
  const handleAuthClick=()=>{
   if(token)
   {
    localStorage.clear();
    quizDispatch({
      type:"QUIT",
  })
   }
   navigate("/auth/login")
  }
  const onEndGameClick=()=>{
    quizDispatch({
        type:"QUIT",
    })
}

  return (
    <div >
      <header className=" heading d-flex grow-shrink-basis align-center">
    <div className="heading-title-icon d-flex grow-shrink-basis align-center">
        <img className="icon yo mr-1" src={logo} alt="quiz"/>
        <h1 className="heading-title">
          {
            route==="Home"||route==="Login"? <Link className="link" to="/">QUIZIFY</Link>:"QUIZIFY"
          }
           
        </h1>
    </div>
    <nav className="navigation">
        <ul className="list-non-bullet">
          {
               route==="Home"?   <li className="list-item-inline">
               <Link to="/auth/login" onClick={handleAuthClick} className="link cursor"> {token ? "Logout":"Login"}</Link>
           </li>:""
          }
              {
                        route === "Result" && (
                            <Fragment>
                                <li className="list-item-inline">
                                    <Link to="/" className="link cursor" onClick={onEndGameClick}>Home</Link>
                                </li>
                                <li className="list-item-inline">
                                    <span className="link cursor" onClick={handleAuthClick}>Logout</span>
                                </li>
                             </Fragment>
                        )
                    } 
            
        </ul>
    </nav>
</header>
    </div>
  )
 
}

export default Navbar

