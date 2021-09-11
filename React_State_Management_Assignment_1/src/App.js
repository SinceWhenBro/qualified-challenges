import React, { useState } from "react";
import "./App.css";
import PostCreate from "./PostCreate";
import PostList from "./PostList";

function App() {
  const [posts, setPosts] = useState([]);

  const createPost = (newPost) =>
    setPosts((currentPosts) => [newPost, ...currentPosts]);
  const deletePost = (indexToDelete) =>
    setPosts((currentPosts) =>
      currentPosts.filter((post, index) => index !== indexToDelete)
    );

  return (
    <div className="App">
      <PostCreate savePost={createPost} />
      <PostList posts={posts} deletePost={deletePost} />
    </div>
  );
}

export default App;