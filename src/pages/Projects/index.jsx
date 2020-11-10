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
import axios from "axios";
import swal from "sweetalert";


const Projects = () => {
    const [projectSelected, setProjectSelected] = useState(null);

    const [show, setShow] = useState(false);
    const handleClose = () => {
        setShow(false);
        resetValues();
    };

    function handleShow (project) {
        setProjectSelected(project);
        setShow(true);
    }

    const [subscription, setSubscription] = useState(true);
    const handleChange = (event) => {
        setSubscription(event.target.checked);
    };

    const [fullName, setFullName] = useState('');
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
        var phoneRGEX = /^[(]{0,1}[0-9]{3}[)]{0,1}[-\s]{0,1}[0-9]{3}[-\s]{0,1}[0-9]{4}$/;
        var emailRGEX = /^.{1,}@.{2,}\..{2,}/;
        var nameRGEX = /^[a-zA-Z ]+$/;

        var phoneResult = phone.trim() !== '' ? phoneRGEX.test(phone.trim()) : true;
        var emailResult = emailRGEX.test(email.trim());
        var fullNameResult = nameRGEX.test(fullName.trim());

        return {
            phone: phoneResult,
            email: emailResult,
            fullName: fullNameResult
        };
    };

    const [fullNameError, setFullNameError] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [phoneError, setPhoneError] = useState(false);

    const handleSubmit = () => {

        let errorsValidator = validation();

        errorsValidator.fullName ? setFullNameError(false) : setFullNameError(true);
        errorsValidator.email ? setEmailError(false) : setEmailError(true);
        errorsValidator.phone ? setPhoneError(false) : setPhoneError(true);

        if(errorsValidator.fullName && errorsValidator.email && errorsValidator.phone) {
            localStorage.setItem("gaccess", `${projectSelected}`);

            let objData = {
                projectSelected: projectSelected,
                fullName : fullName,
                email : email,
                phone : phone,
                subscription : subscription
            };

            axios.post(`/api/projects.php`, objData)
                .then(response => {
                    //console.log("contextApi got it", response);
                    swal("Access was granted!", "Business plan was sent to your email.", "success");

                    handleClose();
                    resetValues();

                }).catch(error => {
                console.log("contextApi error.response", error.response);
                swal("Oups!", "We have some error here!", "error");
            });
        }

    };

    const resetValues = () => {
        setFullNameError(false);
        setEmailError(false);
        setPhoneError(false);

        setFullName('');
        setEmail('');
        setPhone('');
    };

    const displayProject = (projectName) => {
        return projectName === localStorage.getItem("gaccess") ? 'true' : 'false' ;
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
                            <TextField required id="standard-required" label="Full Name" defaultValue="" fullWidth onChange={handleFullName} error={fullNameError}/><br/>
                            <TextField required id="standard-required" label="Email" defaultValue="" fullWidth onChange={handleEmail} error={emailError}/><br/>
                            <TextField id="standard-required" label="Phone" defaultValue="" fullWidth onChange={handlePhone} error={phoneError}/><br/>
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
                            <h2>Mechanical <span className={'txt-green'}>Recycling</span></h2>
                            <span display={displayProject('mechanical-recycling') === 'true' ? 'false' : 'true' }>
                                <p>Mechanical recycling of mostpost-industrial plastic waste into top-grade plastic pellets for the further manufacturing process.</p>
                                <div className={'text-center'}>
                                    <span onClick={() => handleShow('mechanical-recycling')}><ButtonCustom1 color={'blue'} href={false} text={'READ MORE'}/></span>
                                </div>
                            </span>
                            <span display={displayProject('mechanical-recycling')}>
                                Thank you for your interest.<br/>
                                You can now view it below.<br/>
                                It is also have been sent to your email.
                            </span>
                        </div>
                    </Col>
                    <Col>
                        <div className={'project-box'}>
                            <h2>Chemical <span className={'txt-green'}>Recycling</span></h2>
                            <span display={displayProject('chemical-recycling') === 'true' ? 'false' : 'true' }>
                                <p>Chemical recycling of post-consumer plastic waste into high-quality hydrocarbon fuel for use in industry, transport, heating, etc.</p>
                                <div className={'text-center'}>
                                    <span onClick={() => handleShow('chemical-recycling')}><ButtonCustom1 color={'blue'} href={false} text={'READ MORE'}/></span>
                                </div>
                            </span>
                            <span display={displayProject('chemical-recycling')}>
                                Thank you for your interest.<br/>
                                Chemical Recycling business plan is currently unavailable. We will keep you posted about the updates.
                            </span>
                        </div>
                    </Col>
                </Row>
                <div className={'mechanical-recycling-display'} display={displayProject('mechanical-recycling')}>
                    <h2>Mechanical Recycling</h2>
                    <embed src={mechanical_recycling_business_plan_final} type="application/pdf" width="100%"/>
                </div>
                <div className={'chemical-recycling-display'} display={displayProject('chemical-recycling')}>
                    <h2>Chemical Recycling</h2>
                    <p>The business plan is coming soon...</p>
                </div>
            </div>
            <Footer/>
        </div>
    )
};

export default Projects;
