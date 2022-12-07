import React from "react";
import Post from "./Post/Post";
import "./Posts.css";

let postRef = React.createRef();
export default React.memo(function Posts(props) {

  let addPost = () => {
    let addPsot = postRef.current.value;
    postRef.current.value = "";
    props.addPost(addPsot);
  };

  return (
    <div className="posts">

      <div className="post__text">
        {/* <textarea ref={postRef} cols="30" rows="5"></textarea> */}
        <button onClick={addPost}>OK</button>
      </div>
      {props.state.postData.map((post, id) => {
        return <Post post={post.post} icon={post.icon} key={id} />;
      })}
    </div>
  );

}) 