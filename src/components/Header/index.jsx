import React from 'react';
import {section} from 'react-bootstrap'
import video from '../../assets/video/production ID_4908396.mp4';
import classes from './styles.scss';
import logo from '../../assets/images/logo_814x166.png';
const Header = () => {
    return (
        <header>
            <div className="overlay"></div>
            <video playsinline="playsinline" autoPlay="autoplay" muted="muted" loop="loop">
                <source src="https://storage.googleapis.com/coverr-main/mp4/Mt_Baker.mp4" type="video/mp4"/>
            </video>
            <div className="container h-100">
                <div className="d-flex h-100 text-center align-items-center">
                    <div className="w-100 text-white">
                        <h1 className="display-3">Video Header</h1>
                        <p className="lead mb-0">With HTML5 Video and Bootstrap 4</p>
                    </div>
                </div>
            </div>
        </header>
    )
};

export default Header;
