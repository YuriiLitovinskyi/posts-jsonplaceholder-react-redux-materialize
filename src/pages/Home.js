import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getPosts, deletePost } from '../actions/PostActions'; 
import AddPostForm from './AddPostForm';

const Home = ({ posts, getPosts, deletePost }) => {
        
    useEffect(() => {       
        getPosts();
        //eslint-disable-next-line
    }, []);
    
    const postView = () => {
        if (posts){
            return (
                <div>
                    {posts.map(post =>                         
                        <div key={post.id} className="col s12 m5">
                            <div className="card blue-grey darken-1">
                                <div className="card-content white-text">
                                    <span className="card-title">{post.title}</span>
                                    <p>{post.body}</p>
                                    <br />
                                    <button className="btn red lighten-2" onClick={() => deletePost(post.id)}>Delete post</button>                                    
                                </div>                        
                            </div>
                        </div>
                    )}    
                </div>      
            )
        } else {
            return (               
                    <h4>No posts...</h4>               
            )
        }    
    };

    return (
        <div className="container center">  
            <AddPostForm />
            { postView() }
        </div>
    )
}

    

const mapStateToProps = (state) => ({
    posts: state.posts
})

export default connect(mapStateToProps, { getPosts, deletePost })(Home);
