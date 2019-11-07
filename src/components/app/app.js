import React from 'react';
import PropTypes from 'prop-types';

import MainPage from '../main_page/main-page';
import GenreQuestionPage from '../genre_question_page/genre-question-page';
import ArtistQuestionPage from '../artist_question_page/artist-question-page';

class App extends React.PureComponent {
  static getScreen(question, settings, props, onUserAnswer) {
    if (question === -1) {
      const {questions} = props;
      const currentSetting = questions[settings].settings;

      return <MainPage
        gameTime={currentSetting.gameTime}
        errorCount={currentSetting.errorCount}
        clickHandler={onUserAnswer}/>;
    }

    const {questions} = props;
    const currentQuestion = questions[question];
    switch (currentQuestion.type) {
      case `genre`: return <GenreQuestionPage
        screenIndex={question}
        question={questions[question]}
        onAnswer={onUserAnswer}
      />;

      case `artist`: return <ArtistQuestionPage
        screenIndex={question}
        question={currentQuestion}
        onAnswer={onUserAnswer}
      />;
    }

    return null;
  }

  constructor(props) {
    super(props);

    this.state = {
      question: -1,
      settings: 3,
    };
  }

  render() {
    const {questions} = this.props;
    const {question, settings} = this.state;

    return App.getScreen(question, settings, this.props, () => {
      this.setState((prevState) => {
        const nextIndex = prevState.question + 1;
        const isEnd = nextIndex >= questions.length - 1;

        return {
          question: !isEnd ? nextIndex : -1,
        };
      });
    });
  }
}

App.propTypes = {
  questions: PropTypes.array.isRequired,
};

export default App;
