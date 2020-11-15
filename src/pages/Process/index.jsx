import React from 'react';
import './styles.scss';
import MainNav from "../../components/MainNav";
import HeaderGeneral from "../../components/HeaderGeneral";
import mapBg from "../../assets/images/map-bg.jpg";
import Footer from "../../components/Footer";
import './styles.scss';

const Process = () => {
    return (
        <div className={'process-wrap'}>
            <span className={'main-nav-wrap'}>
                <MainNav/>
            </span>
            <HeaderGeneral title={'Plastic Recycling Process'} background={mapBg}/>
            <div className="container" style={{marginBottom: '100px'}}>
                <br/>
                <br/>
                <br/>
                <h2>Get the Know-how of Our <span className={'txt-green'}>Comprehensive Plastic Recycling Process</span></h2>
                <p>
                    Plastic recycling is the process of recycling nation-wide plastic waste materials.
                    The plastic waste materials that we receive in our plant is initially inspected, sorted,
                    and transformed into top-quality plastic pellets under the supervision of our experienced technicians and engineers.
                    Finished plastic pellets are utilized by our customers for casting multiple plastic parts or products.
                    Get access to our detailed process of plastic waste recycling and join our noble movement of ensuring environmental friendliness all across the world.
                </p>
                <hr/>

                <h2>Why <span className={'txt-green'}>Recycle?</span></h2>
                <p>Recycling and reuse of plastic waste materials offer a wide range of potential benefits. Some of these are:</p>
                <ul>
                    <li>Saving oil, non-renewable, and precious raw materials –which also serve to be the manufacturing foundation of
                        plastic materials (40 percent of the total oil production in the world gets processed into plastics).</li>
                    <li>Allows effective energy savings in comparison to the production of primary plastic materials.</li>
                </ul>
                <hr/>

                <h2>Our Plastic <span className={'txt-green'}>Recycling Process</span></h2>
                <p>Recycling plastic is a crucial consideration for our environment considering the fact that around 60 million metric tons of the same gets
                    produced on an annual basis for packaging and other applications. This leads to the generation of several more million tons of waste
                    materials that is difficult to deal with –especially when it comes to disintegrating and decomposing.</p>
                <p>At Plastcraft, we aim at following an environmentally-friendly and thorough process of plastic waste recycling for optimum results.</p>
                <hr/>

                

            </div>
            <Footer/>
        </div>
    )
};

export default Process;
