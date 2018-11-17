import axios from 'axios';
export const GET_KEY = 'get_key';
export const FETCH_POSTS = 'fetch_posts';
export const CREATE_POST = 'create_post';
export const FETCH_SINGLE_POST = 'fetch_single_post';
export const DELETE_POST = 'delete_post';

const ROOT_URL = 'https://reduxblog.herokuapp.com/api/';
let API_KEY = ``;
console.log(API_KEY);




export function getKey(userName, callback) {
    API_KEY = `?key=${userName}`;
    const request = axios.get(`${ROOT_URL}/posts${API_KEY}`)
        .then(() => callback());
    console.log(API_KEY);
    return {
        type: GET_KEY,
        payload: {
            request: request,
            userName: userName,
            API_KEY: API_KEY
        }
    };
}

export function fetchPosts() {
    const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);
    return {
      type: FETCH_POSTS,
        payload: request
    };
}

export function createPost(values, callback) {
    const request = axios.post(`${ROOT_URL}/posts${API_KEY}`, values)
        .then (() => callback());
    return {
        type: CREATE_POST,
        payload: request
    };
}

export function fetchSinglePost(id) {
    const request = axios.get(`${ROOT_URL}/posts/${id}${API_KEY}`);

    return {
        type: FETCH_SINGLE_POST,
        payload: request
    };
}

export function deletePost(id, callback) {
   const request = axios.delete(`${ROOT_URL}/posts/${id}${API_KEY}`)
       .then(() => callback());

   return {
       type: DELETE_POST,
       payload: id
   }
}