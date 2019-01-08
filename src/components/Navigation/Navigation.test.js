import React from 'react';
import { shallow } from 'enzyme';

import Navigation from './Navigation';

describe('Navigation', () => {
  let wrapper;

  it('should match snapshot', () => {
    wrapper = shallow(<Navigation />);
    expect(wrapper).toMatchSnapshot();
  });
})
