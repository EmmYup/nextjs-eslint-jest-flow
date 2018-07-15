import { shallow } from 'enzyme';
import React from 'react';
import renderer from 'react-test-renderer';

import App from '../index';

describe('With Enzyme', () => {
  it('App shows "Welcome to next.js with Eslint, Jest and Flow!"', () => {
    const app = shallow(<App />);

    expect(app.find('p').text()).toEqual(
      'Welcome to next.js with Eslint, Jest and Flow!'
    );
  });
});

describe('With Snapshot Testing', () => {
  it('App shows "Welcome to next.js with Eslint, Jest and Flow!"', () => {
    const component = renderer.create(<App />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
