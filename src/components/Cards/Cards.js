import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizTopic from '../QuizTopic/QuizTopic';

const Cards = () => {
    const quizTopics = useLoaderData().data;
    return (
        <div className="allPost grid lg:grid-cols-2 gap-3 px-5">
        {
            quizTopics.map(quizTopic => <QuizTopic 
                key={quizTopic.id}
                quizTopic={quizTopic}
                ></QuizTopic>)
        }
    </div>
    );
};

export default Cards;