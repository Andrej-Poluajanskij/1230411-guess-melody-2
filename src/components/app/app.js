import React from 'react';
import PropTypes from 'prop-types';

import MainPage from '../main_page/main-page';
import GenreQuestionPage from '../genre_question_page/genre-question-page';
import ArtistQuestionPage from '../artist_question_page/artist-question-page';

class App extends React.PureComponent {
  static getScreen(question, props, onUserAnswer) {
    if (question === -1) {
      return <MainPage
        gameTime={5}
        errorCount={3}
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
    };
  }

  render() {
    const {questions} = this.props;
    const {question} = this.state;

    return App.getScreen(question, this.props, () => {
      this.setState((prevState) => {
        const nextIndex = prevState.question + 1;
        const isEnd = nextIndex >= questions.length;
        return {
          question: !isEnd ? nextIndex : -1,
        };
      });
    });
  }
}

App.propTypes = {
  questions: PropTypes.object.isRequired,
};

export default App;
