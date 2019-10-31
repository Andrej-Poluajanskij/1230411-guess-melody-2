import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import MainPage from './main-page';

Enzyme.configure({adapter: new Adapter()});

it(`App is correctly rendered after e2e test`, () => {
  const clickTest = jest.fn();
  const mainPage = shallow(<MainPage
    gameTime={0}
    errorCount={0}
    clickHandler={clickTest}
  />);


  const startButton = mainPage.find(`button`);
  startButton.simulate(`click`);

  expect(clickTest).toHaveBeenCalledTimes(1);
});
