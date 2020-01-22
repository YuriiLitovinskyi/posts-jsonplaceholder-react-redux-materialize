import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getPosts } from '../actions/PostActions'; 

const Home = ({ posts, getPosts }) => {
        
    useEffect(() => {       
        getPosts();
        //eslint-disable-next-line
    }, []);

    if (posts){
        return (
            <div className="container center">                 
                    {posts.map(post =>                         
                        <div key={post.id} className="col s12 m5">
                            <div className="card blue-grey darken-1">
                                <div className="card-content white-text">
                                    <span className="card-title">{post.title}</span>
                                    <p>{post.body}</p>
                                </div>                        
                            </div>
                        </div>
                    )}                          
            </div>
        )
    } else {
        return (
            <div className="container center">
                <h4>No posts...</h4>
            </div>
        )
    }    
};

const mapStateToProps = (state) => ({
    posts: state.posts
})

export default connect(mapStateToProps, { getPosts })(Home);
