import React from 'react';
import './styles.scss';
import MainNav from "../../components/MainNav";
import HeaderGeneral from "../../components/HeaderGeneral";
import mapBg from "../../assets/images/map-bg.jpg";
import Footer from "../../components/Footer";
import './styles.scss';
import ButtonCustom1 from "../../components/ButtonCustom1";
import {Col, Row} from 'react-bootstrap';

import LDPE from '../../assets/images/products/LDPE.jpg';
import LLDPE from '../../assets/images/products/LLDPE.jpg';
import HDPE from '../../assets/images/products/HDPE.jpg';
import PP from '../../assets/images/products/PP.jpg';
import ABS from '../../assets/images/products/ABS.jpg';



const WeSale = () => {
    return (
        <div className={'plastcraft-products-wrap'}>
            <span className={'main-nav-wrap'}>
                <MainNav/>
            </span>
            <HeaderGeneral title={'Plastcraft Products'} background={mapBg}/>
            <div className="container" style={{marginBottom: '100px'}}>
                <br/>
                <br/>
                <br/>
                <span className={'text-center'}>
                    <h2>Our <span className={'txt-green'}>Products</span></h2>
                    <p>With our next generation process of recycling plastic waste and converting them same into useful plastic pellets for further manufacturing,
                        we offer a comprehensive range of plastic-based products at our portal. We aim at meeting all your specific needs – right from the most standard
                        pellets to the most specialized versions for optimum results.
                        Our team of experienced engineers comes up with innovative product ideas to cater to the specific requirements of our customers.</p>
                    <p>Plastcraft is committed to processing a wide range of plastic waste material into top-quality recycled pellets including:</p>
                </span>

                <br/>

                <Row>
                    {/*<Col xs={{span: 12, order: 2 }} lg={{span: 6, order: 1 }} className={'img-col'} style={{backgroundImage: `url(${LDPE})`}}></Col>*/}
                    <Col xs={{span: 12, order: 2 }} lg={{span: 6, order: 1 }} className={'img-col'}></Col>
                    <Col xs={{span: 12, order: 1 }} lg={{span: 12, order: 2 }} lg={{span: 6, order: 2 }} className={'txt-col'}>
                        <div className={'txt-col-cell'}>
                            <h2>LDPE <span className={'txt-green'}>(Low Density Polyethylene)</span></h2>
                            <p>
                                LDPE pellets that we produce can be utilized by manufacturing
                                companies for household products or items like grocery bags, plastic wraps, frozen food containers, and squeezable bottles.
                            </p>
                        </div>
                        <div className={'triangle-right-60'}></div>
                    </Col>
                </Row>
                <Row>
                    <Col xs={{span: 12, order: 3 }} lg={{span: 6, order: 3 }} className={'txt-col'}>
                        <div className={'txt-col-cell'}>
                            <h2>LLDPE <span className={'txt-green'}>(Linear Low-Density Polyethylene)</span></h2>
                            <p>
                                LLDPE pellets by Plastcraft are of top-quality standards and can be utilized by manufacturers
                                for producing plastic wraps, toys, covers, pouches, containers, buckets, pipes, and lids.
                            </p>
                        </div>
                        <div className={'triangle-left-60'}></div>
                    </Col>
                    <Col xs={{span: 12, order: 4 }} lg={{span: 6, order: 4 }} className={'img-col'}></Col>
                </Row>
                <Row>
                    <Col xs={{span: 12, order: 6 }} lg={{span: 6, order: 5 }} className={'img-col'}></Col>
                    <Col xs={{span: 12, order: 5 }} lg={{span: 6, order: 6 }} className={'txt-col'}>
                        <div className={'txt-col-cell'}>
                            <h2>HDPE <span className={'txt-green'}>(High Density Polyethylene)</span></h2>
                            <p>
                                HDPE plastic pellets by Plastcraft serve to be top-grade input materials for
                                juice containers, milk containers, motor oil bottles, detergent bottles, trash bins, and so more.
                            </p>
                        </div>
                        <div className={'triangle-right-60'}></div>
                    </Col>
                </Row>
                <Row>
                    <Col xs={{span: 12, order: 7 }} lg={{span: 6, order: 7 }} className={'txt-col'}>
                        <div className={'txt-col-cell'}>
                            <h2>PP <span className={'txt-green'}>(Polypropylene)</span></h2>
                            <p>
                                PP pellets that we deliver exhibit amazing mechanical properties, moldability, and low cost features.
                                PP is known to be extensively used in the automobile industry for the generation of top-quality automotive parts.
                                Some of the main applications of top-grade PP pellets by Plastcraft include interior trim,
                                battery trays & cases, door trims, instrumental panels, fender liners, and so more.
                            </p>
                        </div>
                        <div className={'triangle-left-60'}></div>
                    </Col>
                    <Col xs={{span: 12, order: 8 }} lg={{span: 6, order: 8 }} className={'img-col'}></Col>
                </Row>
                <Row>
                    <Col xs={{span: 12, order: 10 }} lg={{span: 6, order: 9 }} className={'img-col'}></Col>
                    <Col xs={{span: 12, order: 9 }} lg={{span: 6, order: 10 }} className={'txt-col'}>
                        <div className={'txt-col-cell'}>
                            <h2>ABS <span className={'txt-green'}>(Acrylonitrile Butadiene Styrene)</span></h2>
                            <p>
                                ABS serves to be a common thermoplastic polymer that is
                                mostly used for the applications related to injection molding.
                            </p>
                        </div>
                        <div className={'triangle-right-60'}></div>
                    </Col>
                </Row>
                <Row>
                    <Col xs={{span: 12, order: 11 }} lg={{span: 6, order: 11 }} className={'txt-col'}>
                        <div className={'txt-col-cell'}>
                            <h2>PS <span className={'txt-green'}>(Polystyrene)</span></h2>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                Accusantium alias aliquid animi atque autem blanditiis cupiditate dolore et.
                            </p>
                        </div>
                        <div className={'triangle-left-60'}></div>
                    </Col>
                    <Col xs={{span: 12, order: 12 }} lg={{span: 6, order: 12 }} className={'img-col'}></Col>
                </Row>
                <Row>
                    <Col xs={{span: 12, order: 12 }} lg={{span: 6, order: 12 }} className={'txt-col'}>
                        <div className={'txt-col-cell'}>
                            <h2>All type of <span className={'txt-green'}>mixtures and compounds</span></h2>
                            <p>

                            </p>
                        </div>
                        <div className={'triangle-right-60'}></div>
                    </Col>
                    <Col xs={{span: 12, order: 13 }} lg={{span: 6, order: 13 }} className={'img-col'}></Col>
                </Row>

                <br/>

                <div className={'text-center'} style={{'marginTop': '2rem'}}>
                    <p>Our ultimate focus on unmatched quality, scale, and consistency, coupled with industry-leading
                        recycling & extrusion technologies makes use one of the highly sought-after plastic recycling service providers.
                        For more information on our innovative range of products & services, reach out to our team now!</p>
                    <div>
                        <br/>
                        <br/>
                        <ButtonCustom1 color={'green'} icon="mail" text={'CONTACT US'} href={'/contact'}/>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
};

export default WeSale;
