import React from 'react';
import { } from 'react-bootstrap'

/** more videos: https://www.pexels.com/search/videos/forest/ **/
import video from '../../assets/video/production_ID_4908396.mp4';
//import video from '../../assets/video/Pexels-Videos-1448735.mp4';


import './styles.scss';
import logo from '../../assets/images/logo_814x166.png';
import {Link} from "react-router-dom";
import NavList from '../NavList';
// https://storage.googleapis.com/coverr-main/mp4/Mt_Baker.mp4

/** https://drive.google.com/file/d/1XNr2XvHtfktqOFqmI7DcKNP5UOw3yTc2/view?usp=sharing **/

import imgPreload from '../../assets/images/video-preload.jpg';

const Header = () => {
    return (
        <header className={'home'}>
            <div className="overlay"></div>
            <video playsInline="playsInline" autoPlay="autoplay" muted="muted" loop="loop" poster={imgPreload}>
                <source src={video} type="video/mp4"/>
            </video>
            <div className="container h-100">
                <div className="d-flex h-100 text-center align-items-center">
                    <div className="w-100 text-white">
                        <div><Link to={'/'}><img src={logo} alt="" className={'logo'}/></Link></div>
                        <NavList/>
                        <div className={'h-title'}>
                            <p><span className={'txt-green'}>You can change the future,</span><br/>always remember to recycle.</p>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
};

export default Header;
