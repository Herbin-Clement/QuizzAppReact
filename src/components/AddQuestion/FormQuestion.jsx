import React, { useState } from 'react';

import Input from './Input.jsx';

const FormQuestion = () => {

    const [question, setQuestion] = useState("");
    const [answers, setAnswers] = useState(["", "", "", ""]);
    const [idGoodAnswer, setidGoodAnswer] = useState(-1);

    const changeQuestion = (event) => {
        setQuestion(() => event.target.value);
    }

    const select = (id) => {
        setidGoodAnswer(id);
    }

    const changeAnswer = (value, id) => {
        setAnswers((prevState) => {
            prevState[id - 1] = value;
            return prevState;
        });
        console.log(answers);
    }

    const sendData = (event) => {
        event.preventDefault();
        console.log(`${answers}, ${idGoodAnswer}`);
        const goodAnswer = answers[idGoodAnswer];
        const data = {question, answers, goodAnswer};
        console.log(data);
    }

    return (
        <div className="flex justify-center w-full h-11/12 pt-5p bg-black0 text-cloud">
            <form className="flex flex-col items-center justify-center h-7/10 w-7/10 ">
                <input onChange={(event) => changeQuestion(event)} value={question} placeholder="Your Question" className={`w-4/10 h-12 mt-2 mb-10 p-2 border-b-2 border-amethist outline-none text-xl bg-black0`}/>
                <div className="flex flex-wrap justify-around mb-16">
                    <Input placeholder="Answer 1" isSelected={idGoodAnswer === 1 ? true : false} select={select} id={1} value={answers[0]} changeValue={changeAnswer}></Input>
                    <Input placeholder="Answer 2" isSelected={idGoodAnswer === 2 ? true : false} select={select} id={2} value={answers[1]} changeValue={changeAnswer}></Input>
                    <Input placeholder="Answer 3" isSelected={idGoodAnswer === 3 ? true : false} select={select} id={3} value={answers[2]} changeValue={changeAnswer}></Input>
                    <Input placeholder="Answer 4" isSelected={idGoodAnswer === 4 ? true : false} select={select} id={4} value={answers[3]} changeValue={changeAnswer}></Input>
                </div>
                <button onClick={(event) => sendData(event)} className="px-10 py-3 border-2 border-amethist font-semibold">Submit</button>
            </form>
        </div>
    );
};

export default FormQuestion;