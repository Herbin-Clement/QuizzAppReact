import react, { useState } from 'react';
import Quizz from './Quizz/Quizz.jsx';
import QuizzSettings from './QuizzSettings.jsx';

const QuizzApp = () => {

    const [nbQuestion, setNbQuestion] = useState(10);
    const [isQuizzStarted, setIsQuizzStarted] = useState(false);
    const [isQuizzEnd, setIsQuizzEnd] = useState(false);

    const endOfQuizz = () => {
        setIsQuizzEnd((prevState) => true);
        console.log("END");
    }

    const startOfQuizz = () => {
        setIsQuizzStarted((prevState) => true)
    } 

    return (
        <div className="flex justify-center w-full h-11/12 pt-5p bg-black0">
            {!isQuizzStarted && <QuizzSettings startOfQuizz={startOfQuizz}/>}
            {isQuizzStarted && !isQuizzEnd && <Quizz nbQuestion={nbQuestion} endOfQuizz={endOfQuizz}/>}
        </div>
    )
};

export default QuizzApp;