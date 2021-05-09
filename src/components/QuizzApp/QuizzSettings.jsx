import react from 'react';

const QuizzSettings = ({ startOfQuizz }) => {
    return(
        <div className="flex flex-col items-center w-4/10 h-7/10">
            <div onClick={() => startOfQuizz()} className="flex justify-center items-center w-10/10 h-4/10 mb-10 text-center text-cloud text-3xl">
                YO
            </div>
        </div>
    );
};

export default QuizzSettings;