import React from 'react';
import {Link} from "react-router-dom";

const NavList = () => {
    return (
        <ul>
            <li className={'active'}><Link to={'/'}>Home</Link></li>
            <li><Link to={'/projects'}>Projects</Link></li>
            <li><Link to={'/products'}>Products</Link></li>
            <li><Link to={'/process'}>Process</Link></li>
            <li><Link to={'/about'}>About Us</Link></li>
            <li><Link to={'/contact'}>Contact Us</Link></li>
        </ul>
    )
};

export default NavList;
