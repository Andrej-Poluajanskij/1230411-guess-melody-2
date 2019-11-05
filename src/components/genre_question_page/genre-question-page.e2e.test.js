import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import GenreQuestionPage from './genre-question-page';

Enzyme.configure({adapter: new Adapter()});

it(`GenreQuestionPage is correctly rendered after e2e test`, () => {
  const submitTest = jest.fn();
  const genreQuestionPage = shallow(<GenreQuestionPage
    question={{answers: [], genre: ``}}
    screenIndex={0}
    onAnswer={submitTest}
  />);


  const submit = genreQuestionPage.find(`form.game__tracks`);
  submit.simulate(`submit`, {preventDefault: () => {}});

  expect(submitTest).toHaveBeenCalledTimes(1);
});
