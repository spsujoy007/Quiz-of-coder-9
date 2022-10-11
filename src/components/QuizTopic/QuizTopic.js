import React from 'react';

const QuizTopic = ({quizTopic}) => {
    const {name, logo} = quizTopic
    return (
        <div className='mt-5 md:flex gap-x-4 rounded-xl p-3 shadow-md border'>
            <div className='flex align-middle justify-center'>
                <img className='md:w-36 bg-indigo-100 rounded-2xl' src={logo} alt="quiz logo" />
            </div>
            <div className='bg-white flex flex-col align-middle justify-center'>
                <h2 className='text-3xl uppercase text-indigo-500'>{name}</h2>
                <p className='uppercase mt-3'>Take this quiz and give answer like a hero</p>
                <button className='bg-indigo-500 p-2 rounded-lg text-white font-bold hover:bg-indigo-400'>Take quiz</button>
            </div>
        </div>
    );
};

export default QuizTopic;