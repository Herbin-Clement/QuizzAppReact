import React, { useEffect, useState } from 'react';

import CategoryCard from './Quizz/CategoryCard';

const QuizzSettings = ({ startOfQuizz}) => {

    const [nbQuestion, setNbQuestion] = useState(10);
    const [categories, setCategories] = useState([]);
    const [catSelected, setCatSelected] = useState([]);

    const changeValue = (n) => {
        setNbQuestion((prevState) => prevState + n);
    }

    const toggleCategory = (cat) => {
        setCatSelected((prevState) => {
            if (prevState.includes(cat)) {
                prevState = prevState.filter(e => e !== cat);
                return [...prevState];
            } else {
                return [...prevState, cat];
            }
        });
    }

    useEffect(async() => {
        const data = await fetch("http://localhost:3001/categories");
        const res = await data.json();
        setCategories(res.data);
    }, []);

    return (
        <div className="flex flex-col flex-grow justify-around items-center w-1/10 h-7/10 text-cloud text-xl">
            <div className="flex justify-center w-10/10">
            {
                categories.map((category, key) => {
                    return <CategoryCard category={category} isSelected={catSelected.includes(category)} key={key} toggleCategory={toggleCategory}></CategoryCard>;
                })
            }
            </div>
            <div>Number of questions : </div>
            <div className="flex mt-1">
                <div onClick={() => changeValue(-1)} className="p-1 border-2 border-amethist rounded bg-black1 cursor-pointer select-none">{"<"}</div>
                <div className="flex justify-center items-center mx-2 w-48 border-2 border-amethist rounded bg-black1 ">{nbQuestion}</div>
                <div onClick={() => changeValue(1)} className="p-1 border-2 border-amethist rounded bg-black1 cursor-pointer select-none">{">"}</div>
            </div>
            <div onClick={() => startOfQuizz({nbQuestion})} className="mt-2 p-1 border-2 border-amethist rounded bg-black1 cursor-pointer select-none">Start !</div>
        </div>
    );
};

export default QuizzSettings;