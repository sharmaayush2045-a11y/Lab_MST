import React, { useState } from 'react';
import './PostBox.css';

const MAX_LIMIT = 100;

export default function PostBox() {
  const [content, setContent] = useState('');

  const charCount = content.length;
  const isLimitExceeded = charCount > MAX_LIMIT;
  const isPostDisabled = charCount === 0 || isLimitExceeded;

  const handleChange = (e) => {
    setContent(e.target.value);
  };

  const handlePost = (e) => {
    e.preventDefault();
    if (!isPostDisabled) {
      alert(`Post submitted:\n\n${content}`);
      setContent('');
    }
  };

  return (
    <div className="post-box-card">
      <h3>Create a Post</h3>

      {/* Controlled textarea */}
      <textarea
        className={`post-textarea ${isLimitExceeded ? 'border-error' : ''}`}
        rows="4"
        placeholder="What's on your mind?"
        value={content}
        onChange={handleChange}
      />

      {/* Live counter and error indicator */}
      <div className="counter-row">
        <span className={`counter-text ${isLimitExceeded ? 'text-error' : ''}`}>
          {charCount} / {MAX_LIMIT}
        </span>
        {isLimitExceeded && (
          <span className="error-message">Limit exceeded</span>
        )}
      </div>

      {/* Post button */}
      <button
        className="post-btn"
        onClick={handlePost}
        disabled={isPostDisabled}
      >
        Post
      </button>
    </div>
  );
}