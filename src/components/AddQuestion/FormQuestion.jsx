import React, { useEffect, useState } from 'react';

import Input from './Input.jsx';
import CategoryCard from './CategoryCard.jsx';

const FormQuestion = () => {

    const [question, setQuestion] = useState("");
    const [answers, setAnswers] = useState(["", "", "", ""]);
    const [idGoodAnswer, setIdGoodAnswer] = useState(-1);
    const [resetData, setResetData] = useState(false);
    const [categories, setCategories] = useState([]);
    const [catSelected, setCatSelected] = useState("");
    
    const disabled = !(question && idGoodAnswer !== -1 && catSelected && answers[0] && answers[1] && answers[2] && answers[3]);

    useEffect(async () => {
        const cat = await getCat();
        setCategories(cat);
    }, [])

    const getCat = async () => {
        const data = await fetch("http://127.0.0.1:3001/categories");
        const cat = await data.json();
        return cat.data;
    }

    const changeCatSelected = (cat) => {
        setCatSelected(cat);
    }

    const changeQuestion = (event) => {
        setQuestion(() => event.target.value);
    }

    const selectAnswer = (id) => {
        setIdGoodAnswer(id);
    }

    const selectCat = (name) => {
        setCatSelected(name);
    }

    const changeAnswer = (value, id) => {
        setAnswers((prevState) => {
            prevState[id] = value;
            return prevState;
        });
    }

    const sendData = async (event) => {
        event.preventDefault();
        console.log("send");
        const goodAnswer = answers[idGoodAnswer];
        const data = JSON.stringify({question, answers, goodAnswer, nameCat: catSelected});
        console.log(data);
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
        setCatSelected("");
        setResetData(true);
        setResetData(false);
    }

    return (
        <div className="flex justify-center w-full h-11/12 pt-5p bg-black0 text-cloud">
            <form className="flex flex-col items-center justify-center h-7/10 w-7/10 ">
                <div className="flex justify-center w-10/10 h-15p">
                {
                    categories.map((category, key) => {
                        return <CategoryCard category={category} isSelected={catSelected === category} key={key} changeCatSelected={changeCatSelected}></CategoryCard>;
                    })
                }
                </div>
                <input onChange={(event) => changeQuestion(event)} value={question} placeholder="Your Question" className={`w-4/10 h-12 mt-2 mb-10 p-2 border-b-2 border-amethist outline-none text-xl bg-black0`}/>
                <div className="flex flex-wrap justify-around mb-16">
                    <Input placeholder="Answer 1" isSelected={idGoodAnswer === 0 ? true : false} select={selectAnswer} id={0} changeValue={changeAnswer} reset={resetData}></Input>
                    <Input placeholder="Answer 2" isSelected={idGoodAnswer === 1 ? true : false} select={selectAnswer} id={1} changeValue={changeAnswer} reset={resetData}></Input>
                    <Input placeholder="Answer 3" isSelected={idGoodAnswer === 2 ? true : false} select={selectAnswer} id={2} changeValue={changeAnswer} reset={resetData}></Input>
                    <Input placeholder="Answer 4" isSelected={idGoodAnswer === 3 ? true : false} select={selectAnswer} id={3} changeValue={changeAnswer} reset={resetData}></Input>
                </div>
                <button onClick={(event) => sendData(event)} className={`px-10 py-3 border-2 ${disabled ? "border-cloud" : "border-amethist"} font-semibold`} disabled={disabled}>Submit</button>
            </form>
        </div>
    );
};

export default FormQuestion;