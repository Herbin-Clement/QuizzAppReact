import React from 'react';

const QuizzSettings = ({ data }) => {

    return (
        <div className="flex flex-col justify-center items-center w-4/10 h-7/10 text-cloud text-xl">
            <div className="flex mt-1">
                <div className="flex items-center px-2 w-48 border-2 border-amethist rounded bg-black1 ">Score : {data.score}</div>
            </div>
        </div>
    );
};

export default QuizzSettings;