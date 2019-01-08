import BookCard from './BookCard';

import { shallow } from 'enzyme';
import React from 'react';

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
    it.skip('should call confirmBook from props', () => {
      book = {
      "Name": "Brida",
      "Type": "book",
      "wTeaser": "Paulo Coelho...",
      "wUrl": "http://en.wikipedia.org/wiki/Brida_(novel)",
      "yUrl": null,
      "yID": null
      };
      bookId = book.wUrl;
      type = 'recommendations';
      const confirmBookMock = jest.fn();
      wrapper = shallow(<BookCard {...book} key={bookId} type={type} confirmBook={confirmBookMock}/>);
      wrapper.find('.confirm-btn').simulate('click');
      expect(wrapper.instance().confirmBook).toHaveBeenCalled()
    })
    
  })
})