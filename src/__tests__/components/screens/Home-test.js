import React from 'react';
import renderer from 'react-test-renderer';
import Home from '../../../components/screens/Home';

jest.useFakeTimers();

test('renders correctly', async () => {
  const tree = renderer.create(<Home />).toJSON();
  expect(tree).toMatchSnapshot();
});
