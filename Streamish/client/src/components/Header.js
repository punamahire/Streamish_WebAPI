import React from "react";
import { Link, NavLink as RRNavLink } from "react-router-dom";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
} from "reactstrap";
import { logout } from "../modules/authManager";

const Header = ({ isLoggedIn }) => {
    return (
        <nav className="navbar navbar-expand navbar-dark bg-info">
            <Link to="/" className="navbar-brand">
                StreamISH
            </Link>
            <ul className="navbar-nav mr-auto">
                {isLoggedIn &&
                    <>
                        <li className="nav-item">
                            <Link to="/" className="nav-link">
                                Feed
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/videos/add" className="nav-link">
                                New Video
                            </Link>
                        </li>
                        <NavItem>
                            <a
                                aria-current="page"
                                className="nav-link"
                                style={{ cursor: "pointer" }}
                                onClick={logout}
                            >
                                Logout
                            </a>
                        </NavItem>
                    </>
                }
                {!isLoggedIn && (
                    <>
                        <NavItem>
                            <NavLink tag={RRNavLink} to="/login">
                                Login
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={RRNavLink} to="/register">
                                Register
                            </NavLink>
                        </NavItem>
                    </>
                )}
            </ul>
        </nav>
    );
};

export default Header;