import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Topic from '../Topic/Topic';

const Topics = () => {
    const quizes = useLoaderData();
    const allQuizes = quizes.data

    const { name, questions, total} = allQuizes;
    const singleQustions = questions;
    // console.log(singleQustions)
    return (
        <div className='px-20'>
            <div>
                <h1 className='text-4xl text-center uppercase my-3 font-semibold'>Quiz for - <span className='text-indigo-500'>{name}</span></h1>
                <h2 className='text-center text-2xl'>Total questions ( {total} ) </h2>
            </div>

            <div className='mt-10'>
                {
                    singleQustions.map(allquestion => <Topic key={allquestion.id} allquestion={allquestion}></Topic> )
                }
            </div>
        </div>
    );
};

export default Topics;