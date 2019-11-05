import React from 'react';
import renderer from 'react-test-renderer';
import MainPage from './main-page';


it(`MainPage correctly renders after relaunch`, () => {
  const tree = renderer
      .create(<MainPage
        gameTime={5}
        errorCount={3}
        clickHandler={jest.fn()}
      />)
        .toJSON();

  expect(tree).toMatchSnapshot();
});
