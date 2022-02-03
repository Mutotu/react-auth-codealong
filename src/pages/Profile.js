const Profile = (props) => {
  return (
    <div>
      This is the Profile page
      <h4>Welcome, {props.user.email}</h4>
    </div>
  );
};

export default Profile;
