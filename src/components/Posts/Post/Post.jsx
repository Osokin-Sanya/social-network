import React from "react";
import "./Post.css";

const Post = ({ post, icon, id }) => {
  return (
    <nav className="post" id={id}>
      <img className="post__img" src={icon} />
      <div className="post__text">{post}</div>
    </nav>
  );
};

export default Post;
