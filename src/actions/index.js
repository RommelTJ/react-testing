import axios from 'axios';
import {SAVE_COMMENT, FETCH_COMMENTS, CHANGE_AUTH, AUTH_USER, AUTH_ERROR} from "./types";

export const signUp = (formProps, callback) => async dispatch => {
  try {
    const response = await axios.post('http://localhost:3090/signup', formProps);
    dispatch({ type: AUTH_USER, payload: response.data.token });
    localStorage.setItem('token', response.data.token);
    callback();
  } catch (e) {
    dispatch({ type: AUTH_ERROR, payload: 'Email in use' });
  }
};

export const signOut = () => {
  localStorage.removeItem('token');
  return { type: AUTH_USER, payload: '' };
};

export const signIn = (formProps, callback) => async dispatch => {
  try {
    const response = await axios.post('http://localhost:3090/signin', formProps);
    dispatch({ type: AUTH_USER, payload: response.data.token });
    localStorage.setItem('token', response.data.token);
    callback();
  } catch (e) {
    dispatch({ type: AUTH_ERROR, payload: 'Invalid login credentials' });
  }
};

export function saveComment(comment) {
  return { type: SAVE_COMMENT, payload: comment};
}

export function fetchComments() {
  const response = axios.get('http://jsonplaceholder.typicode.com/comments');
  return { type: FETCH_COMMENTS, payload: response };
}

export function changeAuth(isLoggedIn) {
  return { type: CHANGE_AUTH, payload: isLoggedIn };
}
