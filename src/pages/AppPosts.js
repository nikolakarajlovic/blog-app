import React, { useEffect, useState } from 'react';

function AppPosts() {

    const [posts, setPosts] = useState([]);

    return (
      <div>
        <h2>Posts:</h2>

        

        <ul>
        {posts.map((post) =>
        <li style={{ border: '1px solid black', marginBottom: '5px', padding: 5, display: 'flex', flexDirection: 'column'}} key={post.id}>
          <span>Title: {post.title}</span>
          <span>Text: {post.text}</span>
        </li>)}
        </ul>

      </div>
    );
  }
  
  export default AppPosts;
  