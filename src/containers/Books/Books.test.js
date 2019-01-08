import React from 'react';
import { shallow } from 'enzyme';
import { Link } from 'react-router-dom';

import { Books, mapStateToProps } from './Books';

describe('Books', () => {
  let wrapper;
  let type;
  let possibleBooks;
  let lovedBook;
  let recommendations;

  it('should match the snapshot if type is confirm', () => {
    type = 'confirm';
    possibleBooks = {items: [{ title: 'hi', author: 'bob loblaw', id: 123 }]};
    lovedBook = { title: 'hi', author: 'bob loblaw', id: 123 };
    recommendations = [{ title: 'hey', author: 'bob loblob', id: 123 }];
    const prompt = (
      <h3 className="end-text">
        Don't see your book? Click
        <span>
          <Link to="/new"> here </Link>
        </span>
        to try again.
      </h3>
    )
    wrapper = shallow(<Books type={type} possibleBooks={possibleBooks} lovedBook={lovedBook} recommendations={recommendations} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should match the snapshot if type is recommendations', () => {
    type = 'recommendations';
    possibleBooks = [{ title: 'hi', author: 'bob loblaw', id: 123 }];
    lovedBook = { title: 'hi', author: 'bob loblaw', id: 123 };
    recommendations = [{ title: 'hey', author: 'bob loblob', id: 123 }];
    wrapper = shallow(<Books type={type} possibleBooks={possibleBooks} lovedBook={lovedBook} recommendations={recommendations} />);
    expect(wrapper).toMatchSnapshot();
  });

  describe('mapStateToProps', () => {
    let mockState;
    let expected;
    let result;

    it('should return an object with the possibleBooks array', () => {
      mockState = {
        possibleBooks: [{ title: 'hi', author: 'bob loblaw' }]
      };
      expected = {
        possibleBooks: [{ title: 'hi', author: 'bob loblaw' }]
      };
      result = mapStateToProps(mockState);
      expect(result).toEqual(expected);
    });

    it('should return an object with the lovedBook', () => {
      mockState = {
        lovedBook: { title: 'hi', author: 'bob loblaw' }
      };
      expected = {
        lovedBook: { title: 'hi', author: 'bob loblaw' }
      };
      result = mapStateToProps(mockState);
      expect(result).toEqual(expected);
    });
    
    it('should return an object with the recommendations array', () => {
      mockState = {
        recommendations: [{ title: 'hi', author: 'bob loblaw' }]
      };
      expected = {
        recommendations: [{ title: 'hi', author: 'bob loblaw' }]
      };
      result = mapStateToProps(mockState);
      expect(result).toEqual(expected);
    });  
  });

})
