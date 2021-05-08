import react from 'react';

const Question = ({ question }) => {
    return(
        <div className="flex justify-center items-center w-8/10 h-1/10 mb-10 text-center text-cloud text-3xl">
            {question}
        </div>
    );
};

export default Question;