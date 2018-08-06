import { AUTH_USER, AUTH_ERROR } from './type';
import axios from 'axios';

export const signup = (formProps, callback) =>async dispath => {
    try {
        const res = await axios.post('http://localhost:3090/signup', formProps);

        dispath({ type: AUTH_USER, payload: res.data.token });
        localStorage.setItem('token', res.data.token);
        callback();
    } catch (error) {
        dispath({ type: AUTH_ERROR, payload: 'Email in use' });
    }
};

export const signout = () => {
    localStorage.removeItem('token');

    return {
        type: AUTH_USER,
        payload: ''
    }
};

export const signin = (formProps, callback) =>async dispath => {
    try {
        const res = await axios.post('http://localhost:3090/signin', formProps);

        dispath({ type: AUTH_USER, payload: res.data.token });
        localStorage.setItem('token', res.data.token);
        callback();
    } catch (error) {
        dispath({ type: AUTH_ERROR, payload: 'Invalid login credential' });
    }
};