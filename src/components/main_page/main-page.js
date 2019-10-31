import React from 'react';
import PropTypes from 'prop-types';


const MainPage = (props) => {
  const {gameTime, errorCount, clickHandler} = props;
  return (
    <section className="welcome">
      <div className="welcome__logo">
        <img src="img/melody-logo.png" alt="Угадай мелодию" width="186" height="83"/>
      </div>
      <button onClick={clickHandler} className="welcome__button"><span className="visually-hidden">Начать игру</span></button>
      <h2 className="welcome__rules-title">Правила игры</h2>
      <p className="welcome__text">Правила просты:</p>
      <ul className="welcome__rules-list">
        <li>За {gameTime} минут нужно ответить на все вопросы.</li>
        <li>Можно допустить {errorCount} ошибки.</li>
      </ul>
      <p className="welcome__text">Удачи!</p>
    </section>
  );
};


MainPage.propTypes = {
  gameTime: PropTypes.number.isRequired,
  errorCount: PropTypes.number.isRequired,
  clickHandler: PropTypes.func.isRequired
};

export default MainPage;
