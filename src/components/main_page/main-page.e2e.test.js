import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import MainPage from './main-page';

Enzyme.configure({adapter: new Adapter()});

it(`App is correctly rendered after relaunch`, () => {
  const clickHandler = jest.fn();
  const mainPage = shallow(<MainPage
    mistakes={0}
    minutes={0}
    onClick={clickHandler}
  />);


  const startButton = mainPage.find(`buttom`);
  startButton.simulate(`click`);

  expect(clickHandler).toHaveBeenCalledTimes(1);
});
