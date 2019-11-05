import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ArtistQuestionPage from './artist-question-page';

Enzyme.configure({adapter: new Adapter()});

it(`ArtistQuestionPage is correctly rendered after e2e test`, () => {
  const changeTest = jest.fn();
  const artistQuestionPage = shallow(<ArtistQuestionPage
    question={{answers: []}}
    screenIndex={1}
    onAnswer={changeTest}
  />);


  const change = artistQuestionPage.find(`form.game__artist`);
  change.simulate(`change`);

  expect(changeTest).toHaveBeenCalledTimes(1);
});
