import { shallow } from 'enzyme';
import React from 'react';
import renderer from 'react-test-renderer';

import App from '../about';

describe('With Enzyme', () => {
  it('App shows "About"', () => {
    const app = shallow(<App />);

    expect(app.find('p').text()).toEqual('About');
  });
});

describe('With Snapshot Testing', () => {
  it('App shows "About"', () => {
    const component = renderer.create(<App />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
