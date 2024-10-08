import axios from 'axios';

export const getUsers = () => axios.get('https://jsonplaceholder.typicode.com/users');

export const createPost = (postData) => axios.post('https://jsonplaceholder.typicode.com/posts', postData);

export const getComments = (postId) => axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`);
