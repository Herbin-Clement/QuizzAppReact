import react, { useState } from 'react';

const Question = ({ question }) => {

    const [isSelect, setIsSelect] = useState(false);

    return(
        <div className="flex justify-center items-center w-8/10 h-1/10 mb-10 text-center text-cloud text-3xl">
            {question}
        </div>
    );
};

export default Question;