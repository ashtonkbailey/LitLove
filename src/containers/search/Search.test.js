import React from 'react';
import { shallow } from 'enzyme';

import Search from './Search';

describe('Search', () => {
  let wrapper;
  let type;

  it('should match the snapshot with type of "welcome"', () => {
    type = "welcome";
    wrapper = (<Search type={type} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should match the snapshot with type of "new"', () => {
    type = "new";
    wrapper = (<Search type={type} />);
    expect(wrapper).toMatchSnapshot();
  });

    
})
