import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import {Row, Col} from 'react-bootstrap';
import NearMeIcon from '@material-ui/icons/NearMe';

import swal from 'sweetalert';
import axios from 'axios';


import {InputLabel, MenuItem, FormControl, Select, Input, ListItemText, Checkbox} from '@material-ui/core';

import './styles.scss';

const useStyles = makeStyles((theme) => ({
    root: {

    },
}));

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};

const dropDownChoice = [
    'LDPE (Low Density Polyethylene)',
    'LLDPE (Linear Low-Density Polyethylene)',
    'HDPE (High Density Polyethylene)',
    'PP (Polypropylene)',
    'PS (Polystyrene)',
    'ABS (Acrylonitrile Butadiene Styrene)',
    'All Type Of Mixtures And Compounds',
    'Other'
];

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

    const [serviceName, setServiceName] = React.useState([]);
    const handleServicesChange = (event) => {
        setServiceName(event.target.value);
    };

    const [nameError, setNameError] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [phoneError, setPhoneError] = useState(false);
    const [companyError, setCompanyError] = useState(false);
    const [messageError, setMessageError] = useState(false);

    const handleSubmit = (e) => {
        console.log(e);
        e.preventDefault();
        let objData = {
            name: fullName,
            email: email,
            phone: phone,
            company: company,
            message: message,
            serviceName : serviceName.join(', '),
        };

        let errorsValidator = validate(objData);

        errorsValidator.name ? setNameError(false) : setNameError(true);
        errorsValidator.email ? setEmailError(false) : setEmailError(true);
        errorsValidator.phone ? setPhoneError(false) : setPhoneError(true);
        errorsValidator.company ? setCompanyError(false) : setCompanyError(true);
        errorsValidator.message ? setMessageError(false) : setMessageError(true);

        if(
            errorsValidator.name && errorsValidator.email && errorsValidator.phone &&
            (errorsValidator.company || company === '') &&
            (errorsValidator.message || message === '')
        ) {

            axios.post(`/api/proposal.php`, objData)
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
        var phoneRGEX = /^[(]{0,1}[0-9]{3}[)]{0,1}[-\s]{0,1}[0-9]{3}[-\s]{0,1}[0-9]{4}$/;
        // var emailRGEX = /^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/;
        var emailRGEX = /^.{1,}@.{2,}\..{2,}/;
        var nameRGEX = /^[a-zA-Z ]+$/;
        var txtRGEX = /^[_A-z0-9]*((-|\s)*[_A-z0-9])*$/;

        var phoneResult = phoneRGEX.test(data.phone.trim());
        var emailResult = emailRGEX.test(data.email.trim());
        var nameResult = nameRGEX.test(data.name.trim());
        var companyResult = txtRGEX.test(data.company.trim());
        var messageResult = txtRGEX.test(data.message.trim());

        return {
            name : nameResult,
            phone : phoneResult,
            email : emailResult,
            company: companyResult,
            message: messageResult
        }
    };

    const resetValues = () => {
        setNameError(false);
        setEmailError(false);
        setPhoneError(false);
        setCompanyError(false);
        setMessageError(false);

        setFullName('');
        setEmail('');
        setPhone('');
        setCompany('');
        setMessage('');
        setServiceName([]);
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
                        <FormControl className={classes.formControl} fullWidth>
                            <InputLabel id="demo-mutiple-checkbox-label2">
                                What do you offer?
                            </InputLabel>
                            <Select
                                name={'serviceName'}
                                labelId="demo-mutiple-checkbox-label2"
                                multiple
                                value={serviceName}
                                onChange={handleServicesChange}
                                input={<Input />}
                                renderValue={(selected) => selected.join(', ')}
                                MenuProps={MenuProps}
                            >
                                {dropDownChoice.map((service) => (
                                    <MenuItem key={service} value={service}>
                                        <Checkbox checked={serviceName.indexOf(service) > -1} />
                                        <ListItemText primary={service} />
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <TextField multiline rows={6} fullWidth label="Message" value={message} onChange={onMessageChange} error={messageError}/>
                        <div className="btn-submit-form" onClick={handleSubmit}><NearMeIcon/></div>
                    </Col>
                </Row>
            </form>
        </div>
    )
};

export default ContactForm;
