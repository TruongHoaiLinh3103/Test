import React from "react";
import './Nav.css';
import { NavLink } from "react-router-dom";
class Nav extends React.Component{
    render(){
        return(
            <div className='body'>
                <nav className="navbar">
                {/* LOGO */}
                <div className="logo">Lenalen</div>
                {/* NAVIGATION MENU */}
                <ul className="nav-links">

                    {/* USING CHECKBOX HACK */}
                    <input type="checkbox" id="checkbox_toggle" />
                    <label htmlFor="checkbox_toggle" className="hamburger">&#9776;</label>

                    {/* NAVIGATION MENUS */}
                    <div className="menu">
                        <li><NavLink to="/" className="active" end={true}>Home</NavLink></li>
                        <li><NavLink to="/about" className="active">About</NavLink></li>
                        <li className="services">
                        <NavLink to="/services" className="active">Services</NavLink>
                            {/* DROPDOWN MENU */}
                            <ul className="dropdown">
                                <li><a href=".">Dropdown 1 </a></li>
                                <li><a href=".">Dropdown 2</a></li>
                                <li><a href=".">Dropdown 2</a></li>
                                <li><a href=".">Dropdown 3</a></li>
                                <li><a href=".">Dropdown 4</a></li>
                            </ul>
                        </li>
                        <li><NavLink to="/pricing" className="active">Pricing</NavLink></li>
                        <li><NavLink to="/contact" className="active">Contact</NavLink></li>
                    </div>
                </ul>
            </nav>
            </div>
        );
    }
}
export default Nav;