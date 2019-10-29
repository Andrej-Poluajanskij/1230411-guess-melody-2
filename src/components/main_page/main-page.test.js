import React from 'react';
import renderer from 'react-test-renderer';
import MainPage from './main-page';


it(`MainPage correctly renders after relaunch`, () => {
  const tree = renderer
      .create(<MainPage
        mistakes={0}
        minutes={0}
        onClick={jest.fn()}
      />)
        .toJSON();

  expect(tree).toMatchSnapshot();
});
