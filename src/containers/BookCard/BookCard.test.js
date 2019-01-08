import React from 'react';
import { shallow } from 'enzyme';

import { BookCard, mapDispatchToProps } from './BookCard';
import { confirmBookThunk } from '../../thunks/confirmBookThunk';

jest.mock('../../thunks/confirmBookThunk');

describe('BookCard', () => {
  let wrapper;
  let book;
  let bookId;
  let type;

  it('should match snapshot if type is confirm', () => {
    book = {
      "id": "ZI3gAQAACAAJ",
      "volumeInfo": {
        "title": "The Alchemist",
        "authors": [
          "Paulo Coelho"
        ],
        "description": "A special...",
        "imageLinks": {
          "smallThumbnail": "link",
          "thumbnail": "link"
        }
      }
    };
    bookId = book.id;
    type = 'confirm'
    wrapper = shallow(<BookCard {...book} key={bookId} type={type} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should match snapshot if type is recommendations', () => {
    book = {
      "Name": "Brida",
      "Type": "book",
      "wTeaser": "Paulo Coelho...",
      "wUrl": "http://en.wikipedia.org/wiki/Brida_(novel)",
      "yUrl": null,
      "yID": null
    };
    bookId = book.wUrl;
    type = 'recommendations'
    wrapper = shallow(<BookCard {...book} key={bookId} type={type} />);
    expect(wrapper).toMatchSnapshot();
  });

  describe('handleClick', () => {
    it.skip('should call confirmBook from props', async () => {
      const confirmBookMock = jest.fn();
      book = {
        "id": "ZI3gAQAACAAJ",
        "volumeInfo": {
          "title": "The Alchemist",
          "authors": [ "Paulo Coelho" ],
          "description": "A special...",
          "imageLinks": {
            "smallThumbnail": "link",
            "thumbnail": "link"
          }
        }
      };
      bookId = book.wUrl;
      type = 'recommendations';

      wrapper = shallow(<BookCard {...book} key={bookId} type={type} confirmBook={confirmBookMock} />);

      wrapper.instance().handleClick = jest.fn();
      
      wrapper.instance().forceUpdate(); 
      await wrapper.find('.confirm-btn').simulate('click');
      
      expect(wrapper.instance().confirmBook).toHaveBeenCalled()
    });

    it('should update state', async () => {
      const confirmBookMock = jest.fn()
      wrapper = shallow(<BookCard {...book} key={bookId} type={type} confirmBook={confirmBookMock} />);
      const bookTitle = book.volumeInfo.title;
      const expected = true;
      const e = { preventDefault: jest.fn() }
      await wrapper.instance().handleClick(e);
      expect(wrapper.state().confirmed).toEqual(expected);
    });
    
  });

  describe('mapDispatchToProps', () => {
    it('should return a props object with the method confirmBookThunk', () => {
      const mockDispatch = jest.fn();
      const bookTitle = 'She';
      const thunk = confirmBookThunk(bookTitle);
      const mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.confirmBook(bookTitle);
      expect(mockDispatch).toHaveBeenCalledWith(thunk);
    })
  })
})
