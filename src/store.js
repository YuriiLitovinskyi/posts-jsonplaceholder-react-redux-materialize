import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import PostsReducer from './reducers/PostsReducer';

const initialState = {};

const middleware = [thunk];

const store = createStore(PostsReducer, initialState, composeWithDevTools(applyMiddleware(...middleware)));

export default store;