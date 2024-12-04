import React, { useEffect, Fragment, useState } from "react";
import Navbar from "../../component/Navbar";
import "./index.css";
import axios from "axios";
import { QuizCard } from "../../component/Quiz_card";

const Home = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const {
          data: { data },
        } = await axios.get("https://quizz-app-backend-07xa.onrender.com/categories");
        setCategories(data);
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);

  return (
    <Fragment>
      <Navbar route="Home" />

      {/* <div className="d-flex ko  wrap gap-md align-center justify-center ">
        {categories.map(
          (category) =>
            category.category === "All" &&
            category.All.map((item) => <span className="catt">{item}</span>)
        )}
      </div> */}
        <div className="ko">
        <h2 className="catt">Programming - Quiz</h2>
        </div>
         
      
      <main className="main d-flex wrap gap-md align-center justify-center ">
      
        {categories.map(
          (category) =>category.main === "Programming" && (
              <QuizCard quizCategory={category} key={category.id} />
            )
        )}

      </main>

      <div className="ko">
        <h2 className="catt">Movies - Quiz</h2>
        </div>
         
      
      <main className="main d-flex wrap gap-md align-center justify-center ">
      
        {categories.map(
          (category) =>category.main === "Movies" && (
              <QuizCard quizCategory={category} key={category.id} />
            )
        )}
      </main>

      <div className="ko">
        <h2 className="catt">General - Quiz</h2>
        </div>
         
      
      <main className="main d-flex wrap gap-md align-center justify-center ">
      
        {categories.map(
          (category) =>category.main === "General" && (
              <QuizCard quizCategory={category} key={category.id} />
            )
        )}
      </main>
    </Fragment>
  );
};

export default Home;
