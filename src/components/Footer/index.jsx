import React from 'react';
import { } from 'react-bootstrap'
import './styles.scss';
import logo from '../../assets/images/logo_814x166.png';
import NavList from '../NavList';
import {Link} from "react-router-dom";

// https://storage.googleapis.com/coverr-main/mp4/Mt_Baker.mp4

const Header = () => {
    const currentYear = new Date().getFullYear();
    return (
        <footer>
            <div className="top-bar">
                <Link to={'/'}><img src={logo} alt="" className={'logo'}/></Link>
                <h3>Potential Meets Opportunity</h3>
                <p>
                    Montreal, Quebec, Canada<br/>
                    <a href="meail:info@plastacraft.ca">info@plastacraft.ca</a>
                </p>
            </div>
            <div className="bottom-bar">
                <NavList/>
                <p className="copyright-info">© {currentYear} Plastacraft All rights reserved.</p>
            </div>
        </footer>
    )
};

export default Header;
