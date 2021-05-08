import react from 'react';

const Answer = ({ answer }) => {
    return(
        <div className="flex justify-center items-center w-7/10 h-15p mt-2 p-1 border-2 border-amethist rounded bg-black1 hover:bg-black05 text-center text-2xl text-cloud cursor-pointer select-none">
            {answer}
        </div>
    );
};

export default Answer;