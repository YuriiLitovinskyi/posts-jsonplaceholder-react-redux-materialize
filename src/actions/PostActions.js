import { GET_POSTS, DELETE_POST } from './Types';

export const getPosts = () => async (dispatch) => {
   
        const responce = await fetch('https://jsonplaceholder.typicode.com/posts');
        const posts = await responce.json();         

        dispatch({
            type: GET_POSTS,
            payload: posts.slice(0, 10)
        })
   
}

export const deletePost = (id) => (dispatch) => {
    dispatch({
        type: DELETE_POST,
        payload: id
    })
}