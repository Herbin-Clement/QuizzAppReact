import react, { useState } from 'react';
import Question from './Question.jsx';
import Answer from './Answer.jsx';
import Validate from './Validate.jsx';

const displayAnswers = (answerData) => {
    let a = [];
    for (let key in answerData) {
        const answer = answerData[key];
        a.push(<Answer answer={answer} key={key}></Answer>);
    }
    return a;
}

const Quizz = ({ nbQuestion }) => {

    const [question, setQuestion] = useState("");
    const [answers, setAsnwers] = useState([]);
    const [correctAnswer, setCorrectAnswer] = useState("");
    const [nbCurrentQuestion, setNbCurrentQuestion] = useState(0);

    const getQuestion = async () => {
        const data = await fetch('http://127.0.0.1:3001/');
        const res = await data.json();
        console.log(res);
        return res;
    }

    const nextQuestion = async () => {
        const { question, answers, correctAnswer } = await getQuestion();
        setAsnwers((prevState) => displayAnswers(answers))
        setQuestion((prevState) => question);
        setCorrectAnswer((prevState) => correctAnswer);
    }

    return(
        <div className="flex flex-col items-center w-3/10 h-6/10">
            <Question question={question}></Question>
            {answers}
            <Validate validate={nextQuestion}></Validate>
        </div>
    )
};

export default Quizz;