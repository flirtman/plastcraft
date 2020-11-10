import React from 'react';

import './styles.scss';
import logo from '../../assets/images/logo_814x166.png';
import {Link} from "react-router-dom";
import NavList from '../NavList';

import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import Fade from 'react-reveal/Fade';

const HeaderGeneral = (props) => {
    const headerStyle = {
        backgroundImage: `url(${props.background})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat"
    };
    return (
        <header style={headerStyle} className={'general'}>
            <div className="container h-100">
                <div className="d-flex h-100 text-center align-items-center">
                    <div className="w-100 text-white">
                        <div><Link to={'/'}><img src={logo} alt="" className={'logo'}/></Link></div>
                        <NavList/>
                        <div className={'h-title'}>
                            <h1>{props.title}</h1>
                            <Fade top>
                                <ArrowForwardIosIcon/>
                            </Fade>
                        </div>
                    </div>
                </div>
            </div>
            <div className={'cover'}></div>
        </header>
    )
};

export default HeaderGeneral;
