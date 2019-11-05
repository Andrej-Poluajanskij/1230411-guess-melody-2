import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/app/app';
import questions from './mocks/questions';


const init = (gameQuestions) => {
  ReactDOM.render(
      <App questions={gameQuestions}/>,
      document.querySelector(`#root`)
  );
};
init(questions);
