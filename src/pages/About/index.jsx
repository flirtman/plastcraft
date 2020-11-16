import React, {useEffect} from 'react';
import './styles.scss';
import MainNav from "../../components/MainNav";
import HeaderGeneral from "../../components/HeaderGeneral";
import mapBg from "../../assets/images/map-bg.jpg";
import Footer from "../../components/Footer";
import {Container, Col, Row} from 'react-bootstrap'

import Oleg1 from '../../assets/images/Oleg-1.png'
import Tetyana1 from '../../assets/images/Tetyana-1.png'

const About = () => {
    useEffect(() => {
        const hashIs = window.location.hash.replace('#','');
        if(hashIs !== "") {
            document.getElementById(hashIs).scrollIntoView({ block: 'center' });
        }
    }, []);
    return (
        <div className="about-us-wrap">
            <span className={'main-nav-wrap'}>
                <MainNav/>
            </span>
            <HeaderGeneral title={'About Us'} background={mapBg}/>
            <Container>
                <div style={{marginBottom: '100px', marginTop: '100px'}}>
                    <h2>About the <span className={'txt-green'}>company</span></h2>
                    <p>
                        <strong>Plastcraft Inc.</strong> is a startup company with Canadian Federal registration and based in Montreal.
                        Since its inception in 2020, Plastcraft is dedicated to resolving plastic recycling problems in Canada.
                        Plastcraft strives to build as a cutting-edge plastic recycling plant that is known to recycle a wide range of plastic waste while converting the same into value-added products.
                        Plastcraft is a leading provider of top-class plastic recycling services and makes use of environmentally-friendly manufacturing & recycling processes.
                        With its initial goal of producing top-quality products out of plastic waste across the nation, Plastcraft aims at establishing a solid infrastructure as well as a financial position. Moreover, we also aim at expanding our supply chain for including the manufacturing process of plastic products that are commercially-viable products. We are committed to addressing systematic & pressing problems in Canada.
                    </p>
                </div>
            </Container>
                <div className={'section-4'}>
                    <Container>
                        <Row>
                            <Col md={12} lg={4}>
                                <h2>Our <span className={'txt-green'}>Vision</span></h2>
                                <ul>
                                    <li>To be the market leader in the plastic recycling industry in North America, reputable for its advanced equipment and value-added processes.</li>
                                    <li>To be recognized as a key contributor to the betterment of the environment.</li>
                                </ul>
                            </Col>
                            <Col md={12} lg={4}>
                                <h2>Our <span className={'txt-green'}>Mission</span></h2>
                                <p>To offer high-quality recycled products to market by making use of a next-generation recycling process that is environmentally-friendly.</p>
                            </Col>
                            <Col md={12} lg={4}>
                                <h2>Our <span className={'txt-green'}>Values</span></h2>
                                <ul>
                                    <li>To conduct activities that are effective, reliable, and safe for the well-being of employees and that exhibit responsibility to society and the environment.</li>
                                    <li>To maintain a friendly, fair, and creative work environment which respects diversity, new ideas and hard work.</li>
                                </ul>
                            </Col>
                        </Row>
                    </Container>
                </div>
            <Container>
                <div>
                    <hr/>
                    <h2>An Insight into <span className={'txt-green'}>Our Journey</span></h2>
                    <p>
                        At Plastcraft, we are led by a team of experts and environmentally-conscious individuals who did research on the current condition of plastic waste recycling in Canada.
                        It was found that prior to 2018, around 80 to 90 percent of Canada’s plastic waste was shipped for export.
                        With a sudden ban on imported plastic waste by many countries, Canada has been struggling with managing its plastic waste.
                        This is how we started our journey by introducing our state-of-the-art plastic recycling technologies.
                    </p>
                    <hr/>
                </div>
                <div className={'text-center'}>
                    <h2>Our <span className={'txt-green'}>Team</span></h2>
                    <p>
                        Plastcraft boasts a team of motivated and experienced members who are passionate about minimizing plastic waste across<br/>
                        the country through an effective plastic recycling process.
                    </p>
                    <br/>
                    <br/>
                    <br/>
                </div>
                <Row>
                    <Col xs={{span: 12, order: 1 }} sm={{span: 6, order: 1 }} lg={{span: 6, order: 1 }}>
                        <div className={'img-person-wrap md-align-right'}>
                            <img src={Oleg1} alt="" style={{maxWidth: '250px'}}/>
                        </div>
                    </Col>
                    <Col id={'tm1'} xs={{span: 12, order: 2 }} sm={{span: 6, order: 2 }} lg={{span: 6, order: 2 }}>
                        <h3>Oleg Belyak</h3>
                        <h4><small>CEO</small></h4>
                        <p>
                            Oleg served as the Executive Manager of a plastic
                            recycling and processing company, Chiste Misto
                            Ltd., Kryvyi Rih, Ukraine from 2015 to 2017. He
                            also founded and managed a recycling company,
                            Avior Ltd., in Ukraine between 2000 and 2014.
                        </p>
                        <p>
                            Oleg holds Associate, Bachelor’s and Master’s degrees in
                            Finance – all three degrees were acquired from the
                            European University in Kyiv, Ukraine. All degrees
                            have received Canadian educational credential
                            assessment. He has further acquired a certificate
                            on Starting a Business from Erudite Academy in
                            Montreal.
                        </p>
                    </Col>
                </Row>
            <Container/>
            <hr/>
            <Container/>
                <Row>
                    <Col id={'tm2'} xs={{span: 12, order: 2 }} sm={{span: 6, order: 1 }} lg={{span: 6, order: 1 }}>
                        <h3>Tetiana Pisotska</h3>
                        <h4><small>Finance Director</small></h4>
                        <p>
                            Tetiana contributes more than three years of
                            experience in the financial services industry, over
                            10 years of customer service experience, two years
                            of engineering as well as five years in technical
                            engineering sales. Tetiana has served as the
                            Customer Service Representative with the BMO
                            Financial Group since February 2018.
                        </p>
                        <p>
                            Prior to this position, she was employed as a Senior Corporate
                            Sales Specialist - Telecommunications with
                            Ukrtelekom, Ukraine from March to October 2015.
                            Her engineering experience will be a strong asset
                            to develop a state-of-the-art plastic recycling plant.
                            Tetiana holds a Bachelor's degree in Construction
                            from Kharkiv National University of Urban Economy
                            (2006). She was enrolled in a Business Management
                            program in February 2018 at HEC Montreal.
                        </p>
                    </Col>
                    <Col xs={{span: 12, order: 1 }} sm={{span: 6, order: 2 }} lg={{span: 6, order: 2}}>
                        <div className={'img-person-wrap'}>
                            <img src={Tetyana1} alt="" style={{maxWidth: '200px'}}/>
                        </div>
                    </Col>
                </Row>
            </Container>

            <Footer/>
        </div>
    )
};

export default About;
