import React, {useEffect, useState} from "react";
import './';
import {Link} from "react-router-dom";
import iconBook from '../../assets/images/icon-book.png';
import iconMail from '../../assets/images/icon-mail.png';
import './styles.scss';


const ButtonCustom1 = (props) => {
    const [icon, setIcon] = useState(0);
    useEffect(() => {
        switch (props.icon) {
            case 'mail' : setIcon(iconMail);
                return;
            default : setIcon(iconBook);
                return
        }
    }, []);

    return (
        <>
            {!props.href === false &&
                <Link to={props.href} className={`button-custom-1 ${props.color}`}> {props.text} <img src={icon} alt={''}/></Link>
            }
            {!props.href &&
                <div className={`button-custom-1 ${props.color}`}> {props.text} <img src={icon} alt={''}/></div>
            }
        </>
    )
};

export default ButtonCustom1;
