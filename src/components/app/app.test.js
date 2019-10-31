import React from 'react';
import renderer from 'react-test-renderer';
import App from './app';


it(`App correctly renders after relaunch`, () => {
  const tree = renderer
      .create(<App
        gameTime={7}
        errorCount={4}
        clickHandler={jest.fn()}
      />)
        .toJSON();

  expect(tree).toMatchSnapshot();
});
