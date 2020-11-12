import React from 'react';
import {Overlay, ModalContent} from './ModalElements';
import ContactForm from '../ContactForm'

const Modal = ({toggleModal, modalOpen}) => {

    return (
        <>
            <Overlay modalOpen = {modalOpen} onClick={()=> toggleModal()}>

            {modalOpen ? <ContactForm/> : null}
            </Overlay>
                
            
            
        </>
    )
}

export default Modal
