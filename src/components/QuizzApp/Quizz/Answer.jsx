import React from 'react';

const Answer = ({ answer, isSelected, select, id }) => {

    let borderColor = isSelected ? "border-cloud" : "border-amethist";

    return(
        <div onClick={() => select(id)} className={`flex justify-center items-center w-7/10 h-15p mt-2 p-1 border-2 ${borderColor} rounded bg-black1 hover:bg-black05 text-center text-xl text-cloud cursor-pointer select-none`}>
            {answer}
        </div>
    );
};

export default Answer;