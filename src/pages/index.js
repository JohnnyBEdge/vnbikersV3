import React, {useState} from 'react'
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import Welcome from '../components/Welcome';
import InfoSection from '../components/InfoSection';
import { homeSecOne } from '../components/InfoSection/data';

const Home = () => {
    
    const [isOpen, setIsOpen] = useState(false);

    const toggleIsOpen = () => {
        setIsOpen(!isOpen)
    };

    return (
        <>
            <Sidebar isOpen={isOpen} toggleIsOpen={toggleIsOpen} />
            <Navbar toggleIsOpen={toggleIsOpen} />
            <Welcome/>
            <InfoSection {...homeSecOne} />
        </>
    )
}

export default Home
