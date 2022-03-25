import React from 'react';
import {Link} from 'react-router-dom'


function SinglePost({
  id,
  title,
  text,
  viewpost,
}) {
  return (
    <li
      style={{
        border: '1px solid black',
        marginBottom: '5px',
        padding: 5,
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <span>Title: {title}</span>
      <span>Text: {text}</span>
      {/* <Link to={`/post/${post.id}`}>View Post</Link> */}
    </li>
  );
}

export default SinglePost;