import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";

const NavList = () => {
    const [path, setPath] = useState(null);
    useEffect(() => {
        setPath(window.location.pathname.split('/')[1]);
    }, []);
    const isActive = (testPath) => {
        return testPath === path ? 'active' : '';
    };
    return (
        <ul>
            <li className={isActive('')}><Link to={'/'}>Home</Link></li>
            <li className={isActive('projects')}><Link to={'/projects'}>Projects</Link></li>
            <li className={isActive('we-buy')}><Link to={'/we-buy'}>We Buy</Link></li>
            <li className={isActive('we-sell')}><Link to={'/we-sell'}>We Sell</Link></li>
            <li className={isActive('process')}><Link to={'/process'}>Process</Link></li>
            <li className={isActive('about')}><Link to={'/about'}>About Us</Link></li>
            <li className={isActive('contact')}><Link to={'/contact'}>Contact Us</Link></li>
            <li className={isActive('privacy-policy')} id={'privacy-policy'}><Link to={'/privacy-policy'}>Privacy Policy</Link></li>
        </ul>
    )
};

export default NavList;
