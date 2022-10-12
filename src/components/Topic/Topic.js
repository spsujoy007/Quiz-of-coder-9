import React from 'react';
import Options from '../Options/Options';
import { EyeIcon } from '@heroicons/react/24/solid'
import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';


const Topic = ({allquestion}) => {
    const {options, correctAnswer } = allquestion;
    const newQuestion = allquestion.question.split('<p>');
    
    const handleShowModal = () => {
        toast('Correct answer is: ', `${correctAnswer}`)
    }

    return (
        <div className='bg-indigo-100 my-5 p-5 rounded-2xl'>
            <div>
               <div className='flex justify-between align-middle'>
                 <h1 className='text-3xl text-indigo-500'>{newQuestion}</h1>
                 
                 <button onClick={() => handleShowModal()} className='p-10'>
                    <EyeIcon className="h-6 w-6 text-blue-500"/>
                 </button>
                 {/* <ToastContainer/> */}
               </div>
                <div className='px-10 py-0 my-5'>
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