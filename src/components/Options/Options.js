import React from 'react';

const Options = ({option, allquestion, correctAnswer }) => {
  
// const correctanswer = 

    const handleShowResult = () => {
        // console.log('Answer: ', allquestion.correctAnswer);
        if(option === correctAnswer){
            console.log(true)
        }
        else{
            console.log(false)
        }
    }
    
    return (

           <button onClick={() => handleShowResult()} className='w-full'>
             <li className='hover:bg-indigo-300 my-3 text-2xl text-indigo-500 p-3 rounded-xl bg-white text-center'>{option}</li>
           </button>
     );
};

export default Options;