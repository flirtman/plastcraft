import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';

import {Row, Col} from 'react-bootstrap';
import NearMeIcon from '@material-ui/icons/NearMe';

import swal from 'sweetalert';
import axios from 'axios';

import './styles.scss';



const useStyles = makeStyles((theme) => ({
    root: {

    },
}));

const ContactForm = () => {
    const classes = useStyles();

    const [fullName, setFullName] = useState('');
    const onFullNameChange = (e) => {
        setFullName(e.target.value);
    };

    const [email, setEmail] = useState('');
    const onEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const [phone, setPhone] = useState('');
    const onPhoneChange = (e) => {
        setPhone(e.target.value);
    };

    const [company, setCompany] = useState('');
    const onCompanyChange = (e) => {
        setCompany(e.target.value);
    };

    const [message, setMessage] = useState('');
    const onMessageChange = (e) => {
        setMessage(e.target.value);
    };


    const [privacyPolicyAgreement, setPrivacyPolicyAgreement] = React.useState(false);
    const onPrivacyPolicyAgreementChange = (event) => {
        setPrivacyPolicyAgreement(event.target.checked);
        console.log(event.target.checked);
    };

    const [nameError, setNameError] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [phoneError, setPhoneError] = useState(false);
    const [companyError, setCompanyError] = useState(false);
    const [messageError, setMessageError] = useState(false);
    const [privacyPolicyAgreementError, setPrivacyPolicyAgreementError] = useState(false);


    const handleSubmit = (e) => {

        e.preventDefault();
        let objData = {
            name: fullName,
            email: email,
            phone: phone,
            company: company,
            message: message,
            privacyPolicyAgreement: privacyPolicyAgreement
        };

        let errorsValidator = validate(objData);

        errorsValidator.name ? setNameError(false) : setNameError(true);
        errorsValidator.email ? setEmailError(false) : setEmailError(true);
        errorsValidator.phone ? setPhoneError(false) : setPhoneError(true);
        errorsValidator.company ? setCompanyError(false) : setCompanyError(true);
        errorsValidator.message ? setMessageError(false) : setMessageError(true);
        errorsValidator.privacyPolicyAgreement ? setPrivacyPolicyAgreementError(false) : setPrivacyPolicyAgreementError(true);

        if(
            errorsValidator.name && errorsValidator.email && errorsValidator.phone && errorsValidator.privacyPolicyAgreement &&
            (errorsValidator.company || company === '') &&
            (errorsValidator.message || message === '')
        ) {

            axios.post(`/api/contact.php`, objData)
                .then(response => {
                    swal("Good job!", "The information is on the way!", "success");
                    resetValues();
                }).catch(error => {
                console.log("contextApi error.response", error.response);
                swal("Oups!", "We have some error here!", "error");
            });
        }

    };

    const validate = (data) => {
        const phoneRGEX = /^[(]{0,1}[0-9]{3}[)]{0,1}[-\s]{0,1}[0-9]{3}[-\s]{0,1}[0-9]{4}$/;
        // var emailRGEX = /^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/;
        const emailRGEX = /^.{1,}@.{2,}\..{2,}/;
        const nameRGEX = /^[a-zA-Z ]+$/;
        const txtRGEX = /^[_A-z0-9]*((-|\s)*[_A-z0-9])*$/;

        let phoneResult = phoneRGEX.test(data.phone.trim());
        let emailResult = emailRGEX.test(data.email.trim());
        let nameResult = nameRGEX.test(data.name.trim());
        let companyResult = txtRGEX.test(data.company.trim());
        let messageResult = txtRGEX.test(data.message.trim());
        let privacyPolicyAgreementResult = data.privacyPolicyAgreement;

        return {
            name : nameResult,
            phone : phoneResult,
            email : emailResult,
            company: companyResult,
            message: messageResult,
            privacyPolicyAgreement: privacyPolicyAgreementResult
        }
    };

    const resetValues = () => {
        setNameError(false);
        setEmailError(false);
        setPhoneError(false);
        setCompanyError(false);
        setMessageError(false);
        setPrivacyPolicyAgreementError(false);

        setFullName('');
        setEmail('');
        setPhone('');
        setCompany('');
        setMessage('');
    };

    return (
        <div className={'form-wrap'}>
            <form className={classes.root} noValidate autoComplete="off">
                <Row>
                    <Col sm={12} md={6}>
                        <TextField label="Your Name" value={fullName} onChange={onFullNameChange} fullWidth error={nameError} required/>
                    </Col>
                    <Col sm={12} md={6}>
                        <TextField label="Email Address" value={email} onChange={onEmailChange} fullWidth error={emailError} required/>
                    </Col>
                </Row>
                <Row>
                    <Col sm={12} md={6}>
                        <TextField label="Phone" value={phone} onChange={onPhoneChange} fullWidth error={phoneError} required/>
                    </Col>
                    <Col sm={12} md={6}>
                        <TextField label="Company"  value={company} onChange={onCompanyChange} fullWidth error={companyError}/>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <TextField multiline rows={6} fullWidth label="Message" value={message} onChange={onMessageChange} error={messageError}/>
                        <div className="btn-submit-form" onClick={handleSubmit}><NearMeIcon/></div>
                    </Col>
                </Row>
                <Row>
                    <Col sm={12} md={12}>
                        <div className={'privacy-policy-wrapper'}>
                            <FormControlLabel
                                control={<Checkbox color="primary" name="checkedC" onChange={onPrivacyPolicyAgreementChange} />}
                                label={<i>I agree to the <a href="privacy-policy" target={'_blank'}>Privacy policy</a>.</i>}
                            />
                            <FormHelperText fullWidth error={privacyPolicyAgreementError}>
                                To submit the form you must to agree that you have reed our Privacy policy.
                            </FormHelperText>
                        </div>
                    </Col>
                </Row>
            </form>
        </div>
    )
};

export default ContactForm;
