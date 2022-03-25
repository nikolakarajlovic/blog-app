import React, { useEffect, useState } from 'react';
import SinglePost from '../components/SinglePost';
import PostService from '../services/PostService';
import {Link} from 'react-router-dom'

function AppPosts() {

    const [posts, setPosts] = useState([]);

    return (
      <div>
        <h2>Posts:</h2>
        <ul>
        {posts.map((post) => (
          <SinglePost
            key={post.id}
            id={post.id}
            title={post.title}
            text={post.text}
            viewpost={<Link to={`/post/${post.id}`}>View Post</Link>}
          />
        ))}
      </ul>

      </div>
    );
  }
  
  export default AppPosts;
  