import React, {useState} from 'react'
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import Welcome from '../components/Welcome';
import Gallery from '../components/Gallery'
import InfoSection from '../components/InfoSection';
import { homeSecOne, homeSecTwo } from '../components/InfoSection/data';
import Modal from '../components/Modal';

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
            <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
            <Navbar toggleSidebar={toggleSidebar} />
            <Welcome/>
            <InfoSection {...homeSecOne} />
            <InfoSection {...homeSecTwo} modalOpen={modalOpen} toggleModal={toggleModal}/>
            <Modal modalOpen={modalOpen} toggleModal={toggleModal} />
            <Gallery/>
        </>
    )
}

export default Home
