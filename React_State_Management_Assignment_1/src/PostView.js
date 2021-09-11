import React from "react";

function PostView({ post, deletePost }) {
  return (
    <div className="post">
      <p>
        {post.type === "Text" ? (
          post.content
        ) : (
          <img alt={post.content} src={post.content} />
        )}
      </p>
      <button name="delete" onClick={deletePost}>
        Delete
      </button>
    </div>
  );
}

export default PostView;