import React from "react";
import PostView from "./PostView";

function PostList({ posts, deletePost }) {
  return (
    <div className="post-list">
      {posts.map((post, index) => (
        <PostView
          deletePost={() => deletePost(index)}
          key={index}
          post={post}
        />
      ))}
    </div>
  );
}

export default PostList;