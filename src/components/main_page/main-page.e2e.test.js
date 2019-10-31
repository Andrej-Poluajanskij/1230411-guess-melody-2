import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import MainPage from './main-page';

Enzyme.configure({adapter: new Adapter()});

it(`App is correctly rendered after e2e test`, () => {
  const testClick = jest.fn();
  const mainPage = shallow(<MainPage
    mistakes={0}
    minutes={0}
    onClick={testClick}
  />);


  const startButton = mainPage.find(`button`);
  startButton.simulate(`click`);

  expect(testClick).toHaveBeenCalledTimes(1);
});
