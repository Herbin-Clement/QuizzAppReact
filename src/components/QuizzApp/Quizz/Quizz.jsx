import react from 'react';
import Question from './Question.jsx';
import Answer from './Answer.jsx';
import Validate from './Validate.jsx';

const Quizz = () => {
    return(
        <div className="flex flex-col items-center w-3/10 h-6/10">
            <Question question={"Salut mon pote !"}></Question>
            <Answer answer={"Oui"}></Answer>
            <Answer answer={"Non"}></Answer>
            <Answer answer={"Peut-être"}></Answer>
            <Answer answer={"Je sais pas"}></Answer>
            <Validate></Validate>
        </div>
    )
};

export default Quizz;