import React from 'react';

const Options = ({option, allquestion}) => {
    return (
        <li className='hover:bg-indigo-300 my-3 text-2xl text-indigo-500 p-3 rounded-xl bg-white text-center'>{option}</li>
    );
};

export default Options;