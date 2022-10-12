import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Options = ({option, allquestion, correctAnswer }) => {
  
// const correctanswer = 

    const handleShowResult = () => {
        // console.log('Answer: ', allquestion.correctAnswer);
        if(option === correctAnswer){
            toast("Answers is correct!")
        }
        else{
            toast("Wrong answer!")
        }
    }
    
    return (

           <button onClick={() => handleShowResult() } className='w-full'>
             <li className='hover:bg-indigo-300 my-1 text-2xl text-indigo-500 p-3 rounded-xl bg-white text-center'>{option}</li>
             <ToastContainer
position="top-right"
autoClose={1000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="dark"
/>
           </button>
     );
};

export default Options;