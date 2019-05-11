import React from 'react';
import { mount } from 'enzyme'; // FullDOM
import CommentBox from '../CommentBox';

let wrapped;

beforeEach(() => {
  wrapped = mount(<CommentBox/>);
});

afterEach(() => {
  wrapped.unmount();
});

it('has a text area and a button', () => {
  expect(wrapped.find('textarea').length).toEqual(1);
  expect(wrapped.find('button').length).toEqual(1);
});

describe('the text area', () => {

  it('has a text area that users can type in', () => {
    wrapped.find('textarea').simulate('change', {target: {value: 'new comment'}});
    wrapped.update(); // necessary because setState is called asynchronously.
    expect(wrapped.find('textarea').prop('value')).toEqual('new comment');
  });

  it('empties textarea after submission', () => {
    wrapped.find('textarea').simulate('change', {target: {value: 'new comment'}});
    wrapped.update(); // necessary because setState is called asynchronously.
    wrapped.find('form').simulate('submit');
    wrapped.update(); // necessary because setState is called asynchronously.
    expect(wrapped.find('textarea').prop('value')).toEqual('');
  });

});


