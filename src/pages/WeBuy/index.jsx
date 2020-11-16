import React from 'react';
import MainNav from "../../components/MainNav";
import HeaderGeneral from "../../components/HeaderGeneral";
import mapBg from '../../assets/images/map-bg.jpg';

import {Row, Col} from 'react-bootstrap';

import MakeAnOfferForm from "../../components/MakeAnOfferForm";

import RoomOutlinedIcon from '@material-ui/icons/RoomOutlined';
import PhoneInTalkOutlinedIcon from '@material-ui/icons/PhoneInTalkOutlined';
import DraftsOutlinedIcon from '@material-ui/icons/DraftsOutlined';

import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import PinterestIcon from '@material-ui/icons/Pinterest';

import './styles.scss';

import emailFly from '../../assets/images/email-fly-green.png';
import Footer from "../../components/Footer";

const WeBuy = () => {
    return (
        <>
            <span className={'main-nav-wrap'}>
                <MainNav/>
            </span>
            <HeaderGeneral title={'We Buy'} background={mapBg}/>
            <div className="container" style={{marginBottom: '100px'}}>
                <div className="header-wrapper">
                    <div style={{maxWidth: '600px'}}>
                        <h1 title="contacts">Make an <span className={'txt-green'}>Offer</span></h1>
                        <p className="">
                            Use the contact form below to send us your proposal, and we will get
                            back to you at your earliest convenience if it is in our business consideration.
                        </p>
                    </div>
                </div>
                <Row  className="box-section">
                    <Col md={8} className="bg-white">
                        <div className={'padding-50-lg'}>
                            <h2>Send us your proposal</h2>
                            <img src={emailFly} alt="" className="email-fly-icon"/>
                            <MakeAnOfferForm/>
                        </div>
                    </Col>
                    <Col md={4} className="bg-blue-regular">
                        <h2>Contact information</h2>
                        <div>
                            <div className="flex">
                                <p><RoomOutlinedIcon/> {'205-3495 Ivan-Franko Rd.,\n' +
                                'Lachine, QC H8T 1N9'}</p>
                            </div>
                            <div className="flex">
                                <p><PhoneInTalkOutlinedIcon/> {'+1 (438) 979-9720'}</p>
                            </div>
                            <div className="flex">
                                <p><DraftsOutlinedIcon/> {'info@plastacraft.ca'}</p>
                            </div>
                        </div>
                        <ul className="social-wrap">
                            <li><a href="/"><FacebookIcon/></a></li>
                            <li><a href="/"><LinkedInIcon/></a></li>
                            <li><a href="/"><TwitterIcon/></a></li>
                            <li><a href="/"><PinterestIcon/></a></li>
                        </ul>
                    </Col>
                </Row>
                <p className="text-center privacy-paragraph"><small>Your Data is always safe with us. We will only contact you in conjunction with your inquiry and your details are stored securely in the meantime.</small></p>
            </div>
            <Footer/>
        </>
    )
};

export default WeBuy;
