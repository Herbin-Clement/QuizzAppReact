import react from 'react';

const Answer = ({ answer }) => {
    return(
        <div className="flex justify-center items-center w-7/10 h-1/10 mt-3 p-1 border-2 border-amethist rounded-sm bg-black1 text-center text-2xl text-cloud">
            {answer}
        </div>
    );
};

export default Answer;