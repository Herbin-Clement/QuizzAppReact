import React from 'react';

const Question = ({ question }) => {
    return(
        <div className="flex justify-center items-center w-10/10 h-4/10 mb-10 text-center text-cloud text-3xl">
            {question}
        </div>
    );
};

export default Question;