import { GET_POSTS, DELETE_POST, ADD_POST } from '../actions/Types';

const initialState = {
    posts: []  
}

export default (state = initialState, action) => {    
    switch(action.type){
        case GET_POSTS:
            return {
                ...state,
                posts: action.payload
            };
        case DELETE_POST:
            let newPosts = state.posts;
            //console.log(action);
            return {
                ...state,
                posts: newPosts.filter(post => post.id !== action.payload)
            };
        case ADD_POST:
            //let newPosts = state.posts;
            //console.log(action);
            return {
                ...state,
                posts: [action.payload, ...state.posts]
            };                
        default:
            return state;
    }
}


