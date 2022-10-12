import React from "react";
import { useLoaderData } from "react-router-dom";
import headerImg from "../../images/programmingEvulation.jpg";
import QuizTopic from "../QuizTopic/QuizTopic";
import './Home.css'

const Home = () => {
    const quizTopics = useLoaderData().data;
    console.log(quizTopics)

  return (
    <div className="header md:px-20 ">
      <div className="headerThumnail">
        <img className="headerImg" src={headerImg} alt="" />
      </div>
        <h1 className="headertitle text-3xl px-5 uppercase mt-3 font-semibold text-indigo-500">First rule of programming - If it works then don't touch it</h1>
    
    <div className="allPost grid lg:grid-cols-2 gap-3 px-5">
        {
            quizTopics.map(quizTopic => <QuizTopic 
                key={quizTopic.id}
                quizTopic={quizTopic}
                ></QuizTopic>)
        }
    </div>
    </div>
  );
};

export default Home;
