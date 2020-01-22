import { GET_POSTS } from './Types';

export const getPosts = () => async (dispatch) => {
   
        const responce = await fetch('https://jsonplaceholder.typicode.com/posts');
        const posts = await responce.json();         

        dispatch({
            type: GET_POSTS,
            payload: posts.slice(0, 10)
        })
   
}