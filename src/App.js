import React, { useState, useEffect } from 'react';
import { getUsers, createPost, getComments } from './services/api';
import UserList from './components/UserList';
import PostForm from './components/PostForm';
import CommentList from './components/CommentList';
import Loader from './components/Loader';
import './App.css'; // Import the CSS file for styles

function App() {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [post, setPost] = useState(null);
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      try {
        const response = await getUsers();
        setUsers(response.data);
      } catch (error) {
        console.error('Error fetching users:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  const handleCreatePost = async (postData) => {
    setLoading(true);
    try {
      const response = await createPost(postData);
      setPost(response.data);
    } catch (error) {
      console.error('Error creating post:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleFetchComments = async () => {
    if (post) {
      setLoading(true);
      try {
        const response = await getComments(post.id);
        setComments(response.data);
      } catch (error) {
        console.error('Error fetching comments:', error);
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <div className="app-container">
      <div className="component-wrapper">
        <UserList users={users} onSelectUser={setSelectedUser} />
      </div>
      
      {selectedUser && (
        <div className="component-wrapper">
          <PostForm user={selectedUser} onCreatePost={handleCreatePost} />
        </div>
      )}
      
      {post && (
        <div className="component-wrapper">
          <button onClick={handleFetchComments}>Fetch Comments</button>
          <h3>Post Created: {post.title}</h3>
          <p>{post.body}</p>
        </div>
      )}

      {comments.length > 0 && (
        <div className="component-wrapper">
          <CommentList comments={comments} />
        </div>
      )}

      {loading && (
        <div className="loader-overlay">
          <Loader />
        </div>
      )}
    </div>
  );
}

export default App;
