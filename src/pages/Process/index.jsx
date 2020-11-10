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
                <h2>Get the Know-how of Our <span className={'txt-green'}>Comprehensive Plastic Recycling Process</span></h2>
                <p>
                    Plastic recycling is the process of recycling nation-wide plastic waste materials.
                    The plastic waste materials that we receive in our plant is initially inspected, sorted,
                    and transformed into top-quality plastic pellets under the supervision of our experienced technicians and engineers.
                    Finished plastic pellets & granules are utilized by our customers for casting multiple plastic parts or products.
                    Get access to our detailed process of plastic waste recycling and join our noble movement of ensuring environmental friendliness all across the world.
                </p>
                <hr/>

                <h2>Why <span className={'txt-green'}>Recycle?</span></h2>
                <p>Recycling and reuse of plastic waste materials offer a wide range of potential benefits. Some of these are:</p>
                <ul>
                    <li>Saving oil, non-renewable, and precious raw materials –which also serve to be the manufacturing foundation of
                        plastic materials (40 percent of the total oil production in the world gets processed into plastics).</li>
                    <li>Allows effective energy savings in comparison to the production of primary plastic materials.</li>
                    <li>Helps in doing away with the cost of incineration or landfills. It is also vital to know that a plastic bottle
                        is known to take around 400 years to decompose completely. At the same time, a plastic bag is known to take around 450 years to disintegrate.</li>
                </ul>
                <hr/>

                <h2>Our Plastic <span className={'txt-green'}>Recycling Process</span></h2>
                <p>Recycling plastic is a crucial consideration for our environment considering the fact that around 60 million metric tons of the same gets
                    produced on an annual basis for packaging and other applications. This leads to the generation of several more million tons of waste
                    materials that is difficult to deal with –especially when it comes to disintegrating and decomposing.</p>
                <p>At Plastcraft, we aim at following an environmentally-friendly and thorough process of plastic waste recycling for optimum results.</p>
                <hr/>

                <h2>Receiving <span className={'txt-green'}>raw material</span></h2>
                <p>Plastcraft receives its raw materials in the form of huge volumes of plastic waste materials from all around the country.
                    We stock them up into huge bales that are later on unloaded & stored at our inventory.</p>
                <hr/>

                <h2>Optical & Mechanical <span className={'txt-green'}>Sorting</span></h2>
                <p>The initial step is involved with breaking the bale and loosening the raw materials. The raw materials are
                    sent over to dedicated sorting equipment for separating the contaminants from the input. Color sortation if also carried out.</p>
                <hr/>

                <h2>Manual <span className={'txt-green'}>Sorting & Inspection</span></h2>
                <p>For ensuring the overall quality of the product, manual sorting & inspections are carried out. Our capable team helps in eliminating
                    to the minimum of contaminants left in the final product.</p>
                <hr/>

                <h2>Grinding </h2>
                <p>Our raw materials are then ground into smaller pellets. The pellets are held into silos until the same is ready to be sent for the washing process.</p>
                <hr/>

                <h2>Washing </h2>
                <p>The materials get washed thoroughly with soap. It is followed by a water-saving treatment process. Glass and rock get eliminated with the help of
                    the centrifugal techniques.</p>
                <hr/>

                <h2>Packaging </h2>
                <p>The washed pellets are then packaged and stored for further laboratory results.</p>
                <p>Plastcraft also boasts the presence of a dedicated team of lab technologists for conducting in-depth quality
                    control practices for ensuring the overall consistency of plastic pellets.</p>


            </div>
            <Footer/>
        </div>
    )
};

export default Process;
