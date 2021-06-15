import React from 'react';
import Header from './components/Header/Header.jsx';
import QuizzApp from './components/QuizzApp/QuizzApp.jsx';
import FormQuestion from './components/AddQuestion/FormQuestion.jsx';

const App = () => {
  return (
    <div className="flex flex-col">
      <Header></Header>
      <FormQuestion></FormQuestion>
      {/* <QuizzApp></QuizzApp> */}
    </div>
  );
};

export default App;