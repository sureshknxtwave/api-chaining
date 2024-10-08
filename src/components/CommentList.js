import React from 'react';
import '../styles/CommentList.css'; 

function CommentList({ comments }) {
  return (
    <div className="comment-list">
      <h2 className="comment-title">Comments</h2>
      <ul className="comment-items">
        {comments.map(comment => (
          <li key={comment.id} className="comment-item">
            {comment.body}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CommentList;
