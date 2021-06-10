import React, { useState } from 'react';

const QuizzSettings = ({ startOfQuizz}) => {

    const [nbQuestion, setNbQuestion] = useState(10);

    const changeValue = (n) => {
        setNbQuestion((prevState) => prevState + n);
    }

    return (
        <div className="flex flex-col justify-center items-center w-4/10 h-7/10 text-cloud text-xl">
            <div>Number of questions : </div>
            <div className="flex mt-1">
                <div onClick={() => changeValue(-1)} className="p-1 border-2 border-amethist rounded bg-black1 cursor-pointer select-none">{"<"}</div>
                <div className="flex justify-center items-center mx-2 w-48 border-2 border-amethist rounded bg-black1 ">{nbQuestion}</div>
                <div onClick={() => changeValue(1)} className="p-1 border-2 border-amethist rounded bg-black1 cursor-pointer select-none">{">"}</div>
            </div>
            <div onClick={() => startOfQuizz({nbQuestion: nbQuestion})} className="mt-2 p-1 border-2 border-amethist rounded bg-black1 cursor-pointer select-none">Start !</div>
        </div>
    );
};

export default QuizzSettings;