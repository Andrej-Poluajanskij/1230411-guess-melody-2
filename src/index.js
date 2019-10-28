import React from 'react';
import ReactDOM from 'react-dom';


import App from './App';


const init = () => {
  ReactDOM.render(
      <App />,
      document.querySelector(`#root`)
  );
};
init();
