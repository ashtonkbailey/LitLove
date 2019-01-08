import React from 'react';
import { shallow } from 'enzyme';

import { Search, mapDispatchToProps } from './Search';
import { addPossibleBooksThunk } from '../../thunks/addPossibleBooksThunk';

jest.mock('../../thunks/addPossibleBooksThunk');

describe('Search', () => {
  let wrapper;
  let type;

  it('should match the snapshot with type of "welcome"', () => {
    type = "welcome";
    wrapper = shallow(<Search type={type} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should match the snapshot with type of "new"', () => {
    type = "new";
    wrapper = shallow(<Search type={type} />);
    expect(wrapper).toMatchSnapshot();
  });

  describe('handleChange', () => {
    it('should update state', () => {
      const mockEvent = {target: {name: 'title', value: 'she'}};
      wrapper = shallow(<Search type="new" />);
      const expected = 'she';
      wrapper.instance().handleChange(mockEvent);
      expect(wrapper.state().title).toEqual(expected);
    });
  });

  describe('handleSubmit', () => {
    let mockEvent;

    beforeEach(() => {
      mockEvent = { preventDefault: jest.fn() };
    });

    it('should run handleSubmit on form submit', () => {
      wrapper = shallow(<Search type="new" />);
      const e = { preventDefault: jest.fn() }
      wrapper.instance().handleSubmit = jest.fn();
      wrapper.instance().forceUpdate(); 
      wrapper.find('form').simulate('submit', e);
      expect(wrapper.instance().handleSubmit).toBeCalledWith(e);
    });

    it('should update state', async () => {
      const mockAddPossibleBooks = jest.fn()
      wrapper = shallow(<Search type="new" addPossibleBooks={mockAddPossibleBooks} />);
      const expected = true;
      await wrapper.instance().handleSubmit(mockEvent);
      expect(wrapper.state().submitted).toEqual(expected);
    })
  });

  describe('mapDispatchToProps', () => {
    it('should return an object with the addPossibleBooks method', () => {
      const mockDispatch = jest.fn();
      const title = 'She';
      const thunk = addPossibleBooksThunk(title);
      const mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.addPossibleBooks(title);
      expect(mockDispatch).toHaveBeenCalledWith(thunk);
    })
  })
    
})
