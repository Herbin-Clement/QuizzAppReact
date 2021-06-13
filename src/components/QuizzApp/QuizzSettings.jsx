import React, { useEffect, useState } from 'react';

import CategoyCard from './Quizz/CategoryCard';

const QuizzSettings = ({ startOfQuizz}) => {

    const [nbQuestion, setNbQuestion] = useState(10);
    const [categories, setCategories] = useState([]);
    const [catSelected, setCatSelected] = useState([]);

    const changeValue = (n) => {
        setNbQuestion((prevState) => prevState + n);
    }

    const toggleCategory = (id) => {
        console.log("yop");
        setCatSelected((prevState) => {
            if (prevState.includes(id)) prevState.splice(id)
            else prevState.push(id);
            return prevState;
        });
    }

    useEffect( async () => {
        // const data = await fetch('localhost:3001/categories');
        const data = {data: ["Science", "Nature", "Music", "Film", "Serie"]}
        setCategories(data.data);
    }, []);

    return (
        <div className="flex flex-grow justify-center items-center w-4/10 h-7/10 text-cloud text-xl">
            {
                categories.map((categories, key) => {
                    return <CategoyCard category={categories} isSelected={catSelected.includes(key)} key={key} id={key} toggleCategory={toggleCategory}></CategoyCard>;
                })
            }
            {/* <div>Number of questions : </div>
            <div className="flex mt-1">
                <div onClick={() => changeValue(-1)} className="p-1 border-2 border-amethist rounded bg-black1 cursor-pointer select-none">{"<"}</div>
                <div className="flex justify-center items-center mx-2 w-48 border-2 border-amethist rounded bg-black1 ">{nbQuestion}</div>
                <div onClick={() => changeValue(1)} className="p-1 border-2 border-amethist rounded bg-black1 cursor-pointer select-none">{">"}</div>
            </div>
            <div onClick={() => startOfQuizz({nbQuestion})} className="mt-2 p-1 border-2 border-amethist rounded bg-black1 cursor-pointer select-none">Start !</div> */}
        </div>
    );
};

export default QuizzSettings;