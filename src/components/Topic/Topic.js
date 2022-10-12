import React from 'react';
import Options from '../Options/Options';

const Topic = ({allquestion}) => {
    console.log(allquestion);
    const {total, name, question, options, id , correctAnswer } = allquestion;
    console.log(allquestion)

    return (
        <div className='bg-indigo-100 my-2 p-5 rounded-2xl'>
            <div className='text-center'>
                <h1 className='text-3xl text-indigo-500'>{allquestion.question}</h1>
                <div className='p-10'>
                    <ul className='list-decimal'>
 
                        {
                            options.map(option => <Options key={option.id} option={option} allquestion={allquestion} correctAnswer={correctAnswer}></Options> )
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Topic;