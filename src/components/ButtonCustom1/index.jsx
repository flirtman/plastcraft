import React from "react";
import './';
import {Link} from "react-router-dom";
import icon from '../../assets/images/icon-book.png';
import './styles.scss';

const ButtonCustom1 = (props) => {
    return (
        <>
            <Link to={props.href} className={`button-custom-1 ${props.color}`}>READ MORE <img src={icon} alt={''}/></Link>
        </>
    )
};

export default ButtonCustom1;
