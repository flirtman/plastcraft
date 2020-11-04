import React from 'react';
import './styles.scss';
import MainNav from "../../components/MainNav";
import HeaderGeneral from "../../components/HeaderGeneral";
import mapBg from "../../assets/images/map-bg.jpg";
import Footer from "../../components/Footer";
import './styles.scss';

const Products = () => {
    return (
        <>
            <span className={'main-nav-wrap'}>
                <MainNav/>
            </span>
            <HeaderGeneral title={'Products'} background={mapBg}/>
            <div className="container" style={{marginBottom: '100px'}}>

            </div>
            <Footer/>
        </>
    )
};

export default Products;
