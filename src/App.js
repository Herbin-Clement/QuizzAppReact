import React, { useState } from 'react';
import Header from './components/Header/Header.jsx';
import QuizzApp from './components/QuizzApp/QuizzApp.jsx';

const App = () => {
  return (
    <div className="flex flex-col">
      <Header></Header>
      <QuizzApp nbQuestion={5}></QuizzApp>
    </div>
  );
};

export default App;