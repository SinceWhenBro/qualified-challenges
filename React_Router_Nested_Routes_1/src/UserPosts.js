import React from "react";
import { Link, Route, Switch, useRouteMatch } from "react-router-dom";
import UserPost from "./UserPost";

export const UserPosts = ({ posts = [] }) => {
  const { url } = useRouteMatch();

  const postLinks = posts.map((post) => (
    <li key={post.id}>
      <Link to={`${url}/${post.id}`} data-testid={`user-post-${post.id}`}>
        {post.title}
      </Link>
    </li>
  ));

  return (
    <div>
      <ul>{postLinks}</ul>
      <div>
        {/* TODO: Display <UserPost /> if there is a :postId in the url, otherwise display "No post selected..." */}
      </div>
    </div>
  );
};

export default UserPosts;
