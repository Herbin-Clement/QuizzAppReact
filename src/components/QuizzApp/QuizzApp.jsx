import react, { useState } from 'react';
import Quizz from './Quizz/Quizz.jsx';

const QuizzApp = () => {

    const [nbQuestion, setNbQuestion] = useState(10);
    const [isQuizzStarted, setIsQuizzStarted] = useState(false);
    const [isQuizzEnd, setIsQuizzEnd] = useState(false);

    const endOfQuizz = () => {
        setIsQuizzEnd((prevState) => false);
    }

    return (
        <div className="flex justify-center w-full h-11/12 pt-5p bg-black0">
            <Quizz nbQuestion={nbQuestion} endOfQuizz={endOfQuizz}></Quizz>
        </div>
    )
};

export default QuizzApp;