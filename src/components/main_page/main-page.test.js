import React from 'react';
import renderer from 'react-test-renderer';
import MainPage from './main-page';


it(`MainPage correctly renders after relaunch`, () => {
  const tree = renderer
      .create(<MainPage
        gameTime={7}
        errorCount={4}
        clickHandler={jest.fn()}
      />)
        .toJSON();

  expect(tree).toMatchSnapshot();
});
