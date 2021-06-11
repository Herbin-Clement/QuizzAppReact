import React, { useEffect, useState } from 'react';
import useFetch from 'use-http';

import Input from './Input.jsx';

const FormQuestion = () => {

    const [question, setQuestion] = useState("");
    const [answers, setAnswers] = useState(["", "", "", ""]);
    const [idGoodAnswer, setIdGoodAnswer] = useState(-1);
    const [resetData, setResetData] = useState(false);

    const changeQuestion = (event) => {
        setQuestion(() => event.target.value);
    }

    const select = (id) => {
        setIdGoodAnswer(id);
    }

    const changeAnswer = (value, id) => {
        setAnswers((prevState) => {
            prevState[id - 1] = value;
            return prevState;
        });
    }

    const sendData = async (event) => {
        event.preventDefault();
        const goodAnswer = answers[idGoodAnswer];
        const data = JSON.stringify({question, answers, goodAnswer});
        const test = await fetch("http://localhost:3001/question", {
            method: "POST",
            headers: {
                'Content-type': 'application/json'
            },
            body: data
        });
        const res = await test.json();
        if (res.status === true) {
            reset();
        }
    }

    const reset = () => {
        setIdGoodAnswer(-1);
        setAnswers(["", "", "", ""]);
        setQuestion("");
        setResetData(true);
        setResetData(false);
    }

    return (
        <div className="flex justify-center w-full h-11/12 pt-5p bg-black0 text-cloud">
            <form className="flex flex-col items-center justify-center h-7/10 w-7/10 ">
                <input onChange={(event) => changeQuestion(event)} value={question} placeholder="Your Question" className={`w-4/10 h-12 mt-2 mb-10 p-2 border-b-2 border-amethist outline-none text-xl bg-black0`}/>
                <div className="flex flex-wrap justify-around mb-16">
                    <Input placeholder="Answer 1" isSelected={idGoodAnswer === 1 ? true : false} select={select} id={1} changeValue={changeAnswer} reset={resetData}></Input>
                    <Input placeholder="Answer 2" isSelected={idGoodAnswer === 2 ? true : false} select={select} id={2} changeValue={changeAnswer} reset={resetData}></Input>
                    <Input placeholder="Answer 3" isSelected={idGoodAnswer === 3 ? true : false} select={select} id={3} changeValue={changeAnswer} reset={resetData}></Input>
                    <Input placeholder="Answer 4" isSelected={idGoodAnswer === 4 ? true : false} select={select} id={4} changeValue={changeAnswer} reset={resetData}></Input>
                </div>
                <button onClick={(event) => sendData(event)} className="px-10 py-3 border-2 border-amethist font-semibold">Submit</button>
            </form>
        </div>
    );
};

export default FormQuestion;