import React from 'react';
import renderer from 'react-test-renderer';
import GenreQuestionPage from './genre-question-page';


it(`GenreQuestionPage correctly renders after relaunch`, () => {
  const tree = renderer
        .create(<GenreQuestionPage
          question={{answers: [], genre: ``}}
          screenIndex={0}
          onAnswer={jest.fn()}
        />)
          .toJSON();

  expect(tree).toMatchSnapshot();
});
