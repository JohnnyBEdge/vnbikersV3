import React, {useState} from 'react'
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import Welcome from '../components/Welcome';
import Gallery from '../components/Gallery'
import InfoSection from '../components/InfoSection';
import { homeSecOne } from '../components/InfoSection/data';
import Modal from '../components/Modal';
import Services from '../components/Services';
import Footer from '../components/Footer';

const Home = () => {
    
    const [isOpen, setIsOpen] = useState(false);
    const [modalOpen, setModalOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen)
    };
    const toggleModal = () => {
        setModalOpen(!modalOpen);
        console.log("modal open:", modalOpen)
    };

    return (
        <>
            <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} toggleModal={toggleModal}/>
            <Navbar toggleSidebar={toggleSidebar} toggleModal={toggleModal} />
            <Welcome/>
            <InfoSection {...homeSecOne} />
            {/* <InfoSection {...homeSecTwo} modalOpen={modalOpen} toggleModal={toggleModal}/> */}
            <Services/>
            <Modal modalOpen={modalOpen} toggleModal={toggleModal} />
            <Gallery/>
            <Footer toggleModal={toggleModal}/>
        </>
    )
}

export default Home
