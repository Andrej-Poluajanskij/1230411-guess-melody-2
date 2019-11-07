import React from 'react';
import renderer from 'react-test-renderer';
import App from './app';
import questions from '../../mocks/questions';


it(`App correctly renders after relaunch`, () => {
  const tree = renderer
      .create(<App
        gameTime={5}
        errorCount={3}
        clickHandler={jest.fn()}
        questions={questions}
      />)
        .toJSON();

  expect(tree).toMatchSnapshot();
});
