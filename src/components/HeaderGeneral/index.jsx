import React from 'react';
import { } from 'react-bootstrap'


import './styles.scss';
import logo from '../../assets/images/logo_814x166.png';
import {Link} from "react-router-dom";
import NavList from '../NavList';

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
                            <p>{props.title}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={'cover'}></div>
        </header>
    )
};

export default HeaderGeneral;
