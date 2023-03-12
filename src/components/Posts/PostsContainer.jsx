import { addPostActionCreator } from "../../redux/profile-reducer";
import { connect } from "react-redux";
import Posts from "./Posts";

import "./Posts.css";

let mapStateToProps = (state) => {
  return {
    state: state.profile,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    addPost: (value) => {
      dispatch(addPostActionCreator(value));
    },
  };
};

const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts);

export default PostsContainer;
