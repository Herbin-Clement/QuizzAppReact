import { useState } from 'react';
import Quizz from './Quizz/Quizz.jsx';
import QuizzSettings from './QuizzSettings.jsx';
import QuizzResult from './QuizzResult.jsx';

const QuizzApp = () => {

    const [isQuizzStarted, setIsQuizzStarted] = useState(false);
    const [isQuizzEnd, setIsQuizzEnd] = useState(false);
    const [data, setData] = useState(null);

    const endOfQuizz = () => {
        setIsQuizzEnd((prevState) => true);
    }

    const startOfQuizz = (data) => {
        setIsQuizzStarted((prevState) => true);
        setData((prevState) => data);
        console.log(data);
    } 

    return (
        <div className="flex justify-center w-full h-11/12 pt-5p bg-black0">
            {!isQuizzStarted && <QuizzSettings startOfQuizz={startOfQuizz}/>}
            {isQuizzStarted && !isQuizzEnd && <Quizz endOfQuizz={endOfQuizz} data={data}/>}
            {isQuizzEnd && <QuizzResult data={data}/>}
        </div>
    )
};

export default QuizzApp;