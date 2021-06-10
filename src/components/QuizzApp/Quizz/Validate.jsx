import React from 'react';

const Validate = ({ validate, isDisabled }) => {

    const borderColor = isDisabled ? "border-cloud" : "border-amethist";
    const bgColor = isDisabled ? "bg-black0" : "bg-black1 hover:bg-black05"

    return(
        <div onClick={() => validate()} className={`flex justify-center items-center w-15p h-8p mt-10 p-1 border-2 ${borderColor} rounded ${bgColor} text-center text-l text-cloud cursor-pointer select-none`}>
            Validate
        </div>
    )
};

export default Validate;