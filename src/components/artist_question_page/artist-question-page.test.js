import React from 'react';
import renderer from 'react-test-renderer';
import ArtistQuestionPage from './artist-question-page';

it(`ArtistQuestionPage correctly renders after relaunch`, () => {
  const tree = renderer
      .create(<ArtistQuestionPage
        question={{answers: []}}
        screenIndex={1}
        onAnswer={jest.fn()}
      />)
          .toJSON();

  expect(tree).toMatchSnapshot();
});
