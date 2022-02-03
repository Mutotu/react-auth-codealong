import { Link } from "react-router-dom";

const NavBar = (props) => {
  //   console.log(props.user);
  return (
    <nav>
      <Link to='/'>Home</Link>
      {/* {localStorage.getItem("userId") ? ( */}
      {props.user.id ? (
        <>
          <span
            onClick={() => {
              localStorage.removeItem("userId");
              props.setUser({});
            }}
          >
            Logout
          </span>
          <Link to='/profile'>Profile</Link>
        </>
      ) : (
        <>
          <Link to='/signup'>Sign up</Link>
          <Link to='/login'>Login</Link>
        </>
      )}
    </nav>
  );
};

export default NavBar;
