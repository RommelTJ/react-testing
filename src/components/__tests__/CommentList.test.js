import React from 'react';
import { mount } from 'enzyme';
import CommentList from '../CommentList';
import Root from '../../Root';

let wrapped;

beforeEach(() => {
  wrapped = mount(
    <Root>
      <CommentList/>
    </Root>
  )
});

it('creates one list item per comment', () => {
  
});
