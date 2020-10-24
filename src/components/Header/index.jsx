import React from 'react';
import { } from 'react-bootstrap'
import video from '../../assets/video/production_ID_4908396.mp4';
import classes from './styles.scss';
import logo from '../../assets/images/logo_814x166.png';
import {Link} from "react-router-dom";

// https://storage.googleapis.com/coverr-main/mp4/Mt_Baker.mp4

const Header = () => {
    return (
        <header>
            <div className="overlay"></div>
            <video playsinline="playsinline" autoPlay="autoplay" muted="muted" loop="loop">
                <source src={video} type="video/mp4"/>
            </video>
            <div className="container h-100">
                <div className="d-flex h-100 text-center align-items-center">
                    <div className="w-100 text-white">
                        <div><img src={logo} alt="" className={'logo'}/></div>
                        <div>
                            <ul>
                                <li><Link to={'/'}>Home</Link></li>
                                <li><Link to={'/projects'}>Projects</Link></li>
                                <li><Link to={'/products'}>Products</Link></li>
                                <li><Link to={'/process'}>Process</Link></li>
                                <li><Link to={'/about'}>About Us</Link></li>
                                <li><Link to={'/contact'}>Contact Us</Link></li>
                            </ul>
                        </div>
                        <div>
                            <p><span className={'txt-green'}>You can change the future,</span><br/>always remember to recycle.</p>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
};

export default Header;
