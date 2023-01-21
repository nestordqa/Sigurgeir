import React from 'react';
import { NavLink } from "react-router-dom";

const NavItem = ({href, text}) =>{

    return(
        <>
            <NavLink exact to={href} className="nav__link">
                {text}
            </NavLink>
        </>
    );
};

export default NavItem;