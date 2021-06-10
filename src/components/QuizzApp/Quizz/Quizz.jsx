import React, { useEffect, useState } from 'react';
import Question from './Question.jsx';
import Answer from './Answer.jsx';
import Validate from './Validate.jsx';

const displayAnswers = (answerData, selectAnswer, selected) => {
    let a = [];
    for (let key in answerData) {
        const answer = answerData[key];
        const isSelected = selected === key ? true : false;
        a.push(<Answer id={key} answer={answer} key={key} select={selectAnswer} isSelected={isSelected}></Answer>);
    }
    return a;
}

const Quizz = ({ data, endOfQuizz }) => {

    const [question, setQuestion] = useState("");
    const [answers, setAsnwers] = useState([]);
    const [correctAnswer, setCorrectAnswer] = useState("");
    const [nbCurrentQuestion, setNbCurrentQuestion] = useState(0);
    const [selected, setSelected] = useState(-1);
    const [score, setScore] = useState(0);
 
    useEffect(() => {
        nextQuestion();
    }, []);

    const getQuestion = async () => {
        const data = await fetch('http://127.0.0.1:3001/');
        const res = await data.json();
        console.log(res);
        return res;
    }

    const selectAnswer = (n) => {
        setSelected((prevState) => n);
    } 

    const nextQuestion = async () => {
        const { question, answers, correctAnswer } = await getQuestion();
        setSelected((prevState) => -1);
        setAsnwers((prevState) => answers);
        setQuestion((prevState) => question);
        setCorrectAnswer((prevState) => correctAnswer);
        setNbCurrentQuestion((prevState) => prevState += 1);
    }

    const validateAnswer = async () => {
        if (selected !== -1) {
            setScore((prevState) => prevState + 10);
            if (nbCurrentQuestion === data.nbQuestion) {
                data.score = score;
                endOfQuizz(data);
            } else {
                nextQuestion();
            }
        }
    }
 
    return(
        <div className="flex flex-col items-center w-4/10 h-7/10">
            <div className="w-10/10 h-1/10 mb-10 text-center text-xl text-alig text-amethist">Question {nbCurrentQuestion + " / " + data.nbQuestion}</div>
            <Question question={question}></Question>
            {displayAnswers(answers, selectAnswer, selected)}
            <Validate validate={validateAnswer} isDisabled={selected === -1 ? true : false}></Validate>
        </div>
    )
};

export default Quizz;