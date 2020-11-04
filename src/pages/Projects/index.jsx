import React, {useState} from 'react';
import MainNav from "../../components/MainNav";
import HeaderGeneral from "../../components/HeaderGeneral";
import mapBg from "../../assets/images/map-bg.jpg";
import Footer from "../../components/Footer";
import {Col, Row, Modal, Button} from "react-bootstrap";
import ButtonCustom1 from "../../components/ButtonCustom1";
import {TextField, Checkbox} from '@material-ui/core';
import './styles.scss';


import mechanical_recycling_business_plan_final from '../../assets/pdf/mechanical_recycling_business_plan_final.pdf';


const Projects = () => {
    const [projectSelected, setProjectSelected] = useState(null);

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    function handleShow (project) {
        setProjectSelected(project);
        setShow(true);
    }

    const [subscription, setSubscription] = useState(true);
    const handleChange = (event) => {
        setSubscription(event.target.checked);
    };

    const [fullName, setFullName] = useState(null);
    const handleFullName = (e) => {
        setFullName(e.target.value);
    };

    const [email, setEmail] = useState('');
    const handleEmail = (e) => {
        setEmail(e.target.value);
    };

    const [phone, setPhone] = useState('');
    const handlePhone = (e) => {
        setPhone(e.target.value);
    };

    const validation = () => {
        return true;
    };

    const handleSubmit = () => {
        console.log(fullName);
        console.log(email);
        console.log(phone);
        console.log(subscription);
        console.log(projectSelected);

        if(validation) {
            localStorage.setItem("gaccess", `${projectSelected}`);
            handleClose();
        }

    };

    const displayProject = (projectName) => {
        if(projectName === localStorage.getItem("gaccess")) {
            return 'block'
        }
        else {
            return 'none'
        }
    };

    return (
        <div className={'projects-wrap'}>
            <Modal show={show} onHide={handleClose}>

                <Modal.Header closeButton>
                    <Modal.Title>Business Plan</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>To get access to the business plan, please go through a simple registration below.</p>
                    <div>
                        <form noValidate autoComplete="off">
                            <TextField required id="standard-required" label="Full Name" defaultValue="" fullWidth onChange={handleFullName}/><br/>
                            <TextField required id="standard-required" label="Email" defaultValue="" fullWidth onChange={handleEmail}/><br/>
                            <TextField id="standard-required" label="Phone" defaultValue="" fullWidth onChange={handlePhone}/><br/>
                            <label className={'subscription-wrap'}>
                                <Checkbox
                                    color="primary"
                                    inputProps={{ 'aria-label': 'uncontrolled-checkbox' }}
                                    checked={subscription}
                                    onChange={handleChange}
                                />
                                Subscribe to our latest news and updates
                            </label>
                        </form>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="success" onClick={handleSubmit}>
                        Continue
                    </Button>
                </Modal.Footer>

            </Modal>
            <span className={'main-nav-wrap'}>
                <MainNav/>
            </span>
            <HeaderGeneral title={'Projects'} background={mapBg}/>
            <div className="container">
                <Row>
                    <Col>
                        <div className={'project-box'}>
                            <div>
                                <h2>Mechanical <span className={'txt-green'}>Recycling</span></h2>
                                <p>Mechanical recycling of mostpost-industrial plastic waste into top-grade plastic pellets for the further manufacturing process.</p>
                            </div>
                            <div className={'text-center'}>
                                <span onClick={() => handleShow('mechanical-recycling')}><ButtonCustom1 color={'blue'} href={false} text={'READ MORE'}/></span>
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div className={'project-box'}>
                            <div>
                                <h2>Chemical <span className={'txt-green'}>Recycling</span></h2>
                                <p>Chemical recycling of post-consumer plastic waste into high-quality hydrocarbon fuel for use in industry, transport, heating, etc.</p>
                            </div>
                            <div className={'text-center'}>
                                <span onClick={() => handleShow('chemical-recycling')}><ButtonCustom1 color={'blue'} href={false} text={'READ MORE'}/></span>
                            </div>
                        </div>
                    </Col>
                </Row>
                <div className={'mechanical-recycling-display'} style={{display : `${displayProject('mechanical-recycling')}`}}>
                    <h2>Mechanical Recycling</h2>
                    <embed src={mechanical_recycling_business_plan_final} type="application/pdf" width="100%" height="600px" />
                </div>
                <div className={'chemical-recycling-display'} style={{display : `${displayProject('chemical-recycling')}`}}>
                    <h2>Chemical Recycling</h2>
                    <p>The business plan is coming soon...</p>
                </div>
            </div>
            <Footer/>
        </div>
    )
};

export default Projects;
