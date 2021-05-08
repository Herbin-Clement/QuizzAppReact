import react from 'react';

const Validate = ({ validate }) => {
    return(
        <div onClick={() => validate()} className="flex justify-center items-center w-15p h-8p mt-10 p-1 border-2 border-amethist rounded bg-black1 hover:bg-black05 text-center text-l text-cloud cursor-pointer select-none">
            Validate
        </div>
    )
};

export default Validate;