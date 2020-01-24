import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addPost } from '../actions/PostActions'; 

const AddPostForm = ({ posts, addPost }) => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
  
    const onSubmit = (e) => {
        e.preventDefault();
        addPost(title, body)
        setTitle('');
        setBody('');
    }

    return (       
        <div className="row">
            <br />
            <form className="col s12" onSubmit={onSubmit}>
                <div className="row">
                    <div className="input-field col s12">
                        <input 
                            className="validate"
                            type="text" 
                            name="title" 
                            value={title}
                            placeholder="Post Title"
                            required
                            onChange={(e) => setTitle(e.target.value)}
                        >
                        </input> 
                        <textarea 
                            className="materialize-textarea"
                            id="textarea1"
                            type="text" 
                            name="body" 
                            value={body}
                            placeholder="Post Body"
                            required
                            onChange={(e) => setBody(e.target.value)}
                        >
                        </textarea> 
                    </div>    
                </div>                             
                <button className="btn blue darken-2" type="submit">Add Post</button>         
            </form>
        </div>
    );
};

const mapStateToProps = (state) => ({
    posts: state.posts
})

export default connect(mapStateToProps, { addPost })(AddPostForm);
