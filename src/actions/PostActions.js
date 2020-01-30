import { GET_POSTS, DELETE_POST, ADD_POST } from './Types';

//GET all posts from json placeholder server
export const getPosts = () => async (dispatch) => {
   
        const responce = await fetch('https://jsonplaceholder.typicode.com/posts');
        const posts = await responce.json();  
        //console.log(posts);       

        dispatch({
            type: GET_POSTS,
            payload: posts.slice(0, 10)
        })
   
}

//Delete a single post from the UI
export const deletePost = (id) => (dispatch) => {
    dispatch({
        type: DELETE_POST,
        payload: id
    })
}

//ADD a post to UI
export const addPost = (title, body) => async (dispatch) => {  
    let addedPost = {
        title,
        body,
        userId: 1,
        id: Math.random()
    }

    dispatch({
        type: ADD_POST,
        payload: addedPost
    })   
}
