import react, { useEffect, useState } from 'react';
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

const Quizz = ({ nbQuestion }) => {

    const [question, setQuestion] = useState("");
    const [answers, setAsnwers] = useState([]);
    const [correctAnswer, setCorrectAnswer] = useState("");
    const [nbCurrentQuestion, setNbCurrentQuestion] = useState(0);
    const [selected, setSelected] = useState(-1);
 
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
        console.log(nbCurrentQuestion);
    }

    return(
        <div className="flex flex-col items-center w-3/10 h-6/10">
            <Question question={question}></Question>
            {displayAnswers(answers, selectAnswer, selected)}
            <Validate validate={nextQuestion}></Validate>
        </div>
    )
};

export default Quizz;