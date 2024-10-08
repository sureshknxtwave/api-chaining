import React, { useState } from 'react';
import '../styles/PostForm.css'; 

function PostForm({ user, onCreatePost }) {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onCreatePost({ title, body, userId: user.id });
   
    setTitle('');
    setBody('');
  };

  return (
    <form onSubmit={handleSubmit} className="post-form">
      <h3>Create Post for {user.name}</h3>
      <input 
        type="text" 
        placeholder="Post Title" 
        value={title} 
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea 
        placeholder="Post Body" 
        value={body} 
        onChange={(e) => setBody(e.target.value)}
      />
      <button type="submit">
        Create Post
      </button>
    </form>
  );
}

export default PostForm;
