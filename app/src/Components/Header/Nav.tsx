import {NavLink, Link, Route} from "react-router-dom";
function Nav() {
    return(
        <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/login">Login</NavLink>
            <NavLink to="/signup">Signup</NavLink>
        </nav>
    )
}

export default Nav;