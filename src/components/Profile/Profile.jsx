import PostsContainer from "../Posts/PostsContainer";
import ProfileInfo from "./Profile Info/ProfileInfo";
import "./Profile.css";

const Profile = (props) => {
  return (
    <nav className="profile">
      <ProfileInfo {...props} />
      <PostsContainer />
    </nav>
  );
};

export default Profile;
