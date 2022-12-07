import { addPostActionCreator } from "../../redux/profile-reduser";
import Posts from "./Posts";
import "./Posts.css";
import { connect } from "react-redux";

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
