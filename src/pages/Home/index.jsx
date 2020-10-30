import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import {Row, Col, Container} from 'react-bootstrap';
import './styles.scss';

import Image1 from '../../assets/images/section-1-right.jpg';
import Image2 from '../../assets/images/section-1-left.jpg';
import Image3 from '../../assets/images/section-2-bg.jpg';
import Image4 from '../../assets/images/maplelife_21x23.png';
import Image5 from '../../assets/images/hand-drawn-recycling.png';
import Image6 from '../../assets/images/section-4-right-bg.jpg';
import Image7 from '../../assets/images/check-mark-gray.png';
import Image8 from '../../assets/images/Layer-91.png';
import Image9 from '../../assets/images/team-box-hr.png';

import Tetyana from '../../assets/images/Tetyana--thumb.jpg';
import Oleg from '../../assets/images/Oleg--thumb.jpg';

import MainNav from '../../components/MainNav';

import ButtonCustom1 from '../../components/ButtonCustom1';

import {Link} from "react-router-dom";

const styleBg1 = {
    backgroundImage: `url(${Image3})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'
};

const styleBg2 = {
    backgroundImage: `url(${Image6})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'
};


const Home = () => {
    return (
        <>
        <span className={'main-nav-wrap'}>
            <MainNav/>
        </span>
        <Header/>
        <div className="section-1">
            <Container>
                <Row>
                    <Col className="left-col" sm={12} md={12} lg={8} style={{'backgroundImage' : `url(${Image2})`}}>
                        <h3>Ready to go <span className="txt-green">green?</span></h3>
                        <p><span>
                            Join us on our next-generation plastic recycling projects to turn plastic waste into a profitable business and premium products.
                        </span></p>
                        <div className={'left-col-footer'}>Think <span className="txt-green">green!</span></div>
                    </Col>
                    <Col className="right-col" sm={12} md={4}>
                        <img src={Image1} alt={''}/>
                    </Col>
                </Row>
            </Container>
        </div>
        <div className="section-2">
            <Container style={styleBg1}>
                <p>
                    Plastcraft Inc. is a Montreal based startup<br/>
                    with Canadian <img src={Image4} alt={''}/> Federal registration.
                </p>
                <p className="text-right">
                    Great opportunity for <span className="txt-green">investors</span> and <span className="txt-blue-light">shareholders</span><br/>
                    to join the next-generation plastic recycler.
                </p>
                <hr/>
                <div className="text-right">
                    <Link to={'/contact'} className={"button-green-1"}>Join Us</Link>
                </div>
            </Container>
        </div>
        <div className="section-3">
            <Container>
                <Row>
                    <Col sm={12} md={6} className="left-col ">
                        <h2>KEYS TO SUCCESS</h2>
                        <div className="text-center">
                            <img src={Image5} alt={''} />
                            <Row>
                                <Col><strong>Key</strong> 01</Col>
                                <Col>Technology</Col>
                            </Row>
                        </div>
                        <p>Advanced technology for recycling plastic waste.
                            This enables Plastcraft to recycle a large range of plastic types.</p>
                    </Col>
                    <Col sm={12} md={6} className="right-col col-md-offset-2">
                        <ul>
                            <li>
                                <div><strong>key</strong> 02</div>
                                <div>Modern, high-performance, fully automated recycling equipment with a
                                    long lifespan that ensures maximum uptime and cost-effective production.</div>
                            </li>
                            <li>
                                <div><strong>key</strong> 03</div>
                                <div>Eco-friendly technology which incurs low energy
                                    consumption.</div>
                            </li>
                            <li>
                                <div><strong>key</strong> 04</div>
                                <div>Economies of scale by producing large volumes of
                                    high-quality products allowing for rapid market
                                    expansion worldwide.</div>
                            </li>
                            <li>
                                <div><strong>key</strong> 05</div>
                                <div>The plastic recycling industry is not a
                                    seasonal business as the demand for plastic waste processing continues throughout the year.</div>
                            </li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </div>
        <div className="section-4">
            <div className="left-col">
                <div className="left-col-content">
                    <h2>Products<br/><span className="txt-green">and services</span></h2>
                    <p>Plastcraft process a wide range of plastic waste materials<br/>into high-quality recycled pellets:</p>
                    <ul>
                        <li><img src={Image7} alt=""/> Linear low-density polyethylene (LLDPE)</li>
                        <li><img src={Image7} alt=""/> Low-density polyethylene (LDPE)</li>
                        <li><img src={Image7} alt=""/> High-density polyethylene (HDPE)</li>
                        <li><img src={Image7} alt=""/> Polypropylene (PP)</li>
                        <li><img src={Image7} alt=""/> Acrylonitrile butadiene styrene (ABS)</li>
                        <li><img src={Image7} alt=""/> Polystyrene (PS)</li>
                        <li><img src={Image7} alt=""/> All type of mixtures and compounds</li>
                    </ul>
                    <div className={'text-center'}>
                        <ButtonCustom1 color={'green'} href={'/products'} text={'READ MORE'}/>
                    </div>
                </div>
            </div>
            <div className="right-col" style={styleBg2}>
            </div>
        </div>
        <div className="section-5">
            <Container>
                <h2 className={'text-center'}>Plastic recycling <span className={'txt-green'}>process</span></h2>
                <Row>
                    <Col className={'img-wrapper'} sm={12} md={5}>
                        <img src={Image8} alt="" style={{'maxWidth' : '200px'}}/>
                    </Col>
                    <Col sm={12} md={7}>
                        <ol>
                            <li>High capital cost as plastic recycling processes require
                                advanced machinery</li>
                            <li>Knowledge of processing technology and a solid supply chain
                                for ensuring continuous supply and demand</li>
                            <li>Requirement for highly trained individuals, i.e. scientists and
                                process engineers</li>
                        </ol>
                    </Col>
                </Row>
                <hr/>
                <Row>
                    <Col className={"col-margin-right"} sm={12} md={6}>
                        <h3>Automated Recycling Equipment</h3>
                        <p>To make plastic recycling a seamless process, we will make to use of the advanced fully-automated,
                            high-performance, and contemporary range of recycling equipment. Specially selected equipment
                            of the world's leading manufacturers allows us to get flexible production for recycling different
                            types of plastic waste.Such equipment features a longer lifespan for ensuring maximum uptime &
                            cost-effective production and allows us to get high-quality products and good profit.</p>
                    </Col>
                    <Col className={"col-margin-left"} sm={12} md={6}>
                        <h3>Eco-friendly Process</h3>
                        <p>We are known to care for the environment. Therefore, our team of specialists will make use of eco-friendly
                            process for incurring low-energy consumption and minimal impact on the environment.</p>
                        <h3>Advanced Recycling Technology</h3>
                        <p>We choose to use of the next-generation cutting-range technology for plastic waste recycling.</p>
                    </Col>
                </Row>
                <div className={'text-center'}>
                    <ButtonCustom1 color={'blue'} href={'/process'} text={'READ MORE'}/>
                </div>
            </Container>
        </div>
        <div className="section-6">
            <Container>
                <p><small>meet our team</small></p>
                <h2>Friendly and <span className="txt-green">passionate</span></h2>
                <Row>
                    <Col md={6} sm={12}>
                        <a href="/" className={'team-box-wrap'}>
                            <div className={'team-box'} id={'team-box-item-1'} style={{'background' : `url("${Oleg}")`}}>
                                <div className={'team-box-name'}>
                                    Oleg<br/>
                                    Belyak
                                </div>
                                <div className={'team-box-hr'}>
                                    <img src={Image9} alt=""/>
                                </div>
                                <div className={'team-box-title'}>CEO- Founder</div>
                                <div className={'team-box-overlay'}></div>
                            </div>
                        </a>
                    </Col>
                    <Col md={6} sm={12}>
                        <a href="/" className={'team-box-wrap'}>
                            <div className={'team-box'} id={'team-box-item-2'} style={{'background' : `url("${Tetyana}")`}}>
                                <div className={'team-box-name'}>
                                    Tetiana<br/>
                                    Pisotska
                                </div>
                                <div className={'team-box-hr'}>
                                    <img src={Image9} alt=""/>
                                </div>
                                <div className={'team-box-title'}>Finance Director - Founder</div>
                                <div className={'team-box-overlay'}></div>
                            </div>
                        </a>
                    </Col>
                </Row>
                <div>
                    <ButtonCustom1 color={'green'} icon="mail" text={'CONTACT US'} href={'/contact'}/>
                </div>
            </Container>
        </div>
        <Footer/>
        </>
    )
};

export default Home;
