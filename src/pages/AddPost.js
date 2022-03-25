import React, { useEffect, useState } from 'react';
import PostService from '../services/PostService';
import { useHistory, useParams } from 'react-router-dom';

function AddPost() {

    const history = useHistory();
  const { id } = useParams();

    const [newPost, setNewPost] = useState({
        title: '',
        text: '',
      });

      const handleSubmit = async (e) => {
        e.preventDefault();
        
          await PostService.add(newPost);
        
          history.push('/posts');
    
      };



    return (
    <div>
        <h2>Add new post:</h2>

        <form
        onSubmit={handleSubmit}
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: 200,
          marginLeft: 15,
        }}>
            <input
          required
          type='text'
          value={newPost.title}
          placeholder='Post title'
          onChange={({ target }) =>
            setNewPost({ ...newPost, title: target.value })
          }
        />
         <input
          required
          type='text'
          value={newPost.text}
          placeholder='Post text'
          onChange={({ target }) =>
            setNewPost({ ...newPost, text: target.value })
          }
        />
        {/* <button type='button' onClick={handleSubmit}>Add</button> */}
        <button>Add</button>


      </form>
    </div>
    )
}

export default AddPost;