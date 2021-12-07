import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <nav>
            <Link to="/">Home</Link>
            <span >Logout</span>
            <Link to="/signup">Sign up</Link>
            <Link to="/login">Login</Link>
            <Link to="/profile">Profile</Link>
        </nav>
    )
}

export default NavBar
