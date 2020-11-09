import React from 'react';
import {FormContainer, Input, TextAreaInput, FormSubTitle, FormTitle, SendMessageBtn} from './FormElements';

const FormElements = () => {
    const sendMessage = (e) => {
        e.preventDefault();
        
    }
    return (
        <>
            <FormContainer>
                <FormTitle>Contact Us</FormTitle>
                <FormSubTitle>Questions? Comments? Concerns? Let us know below!</FormSubTitle>
                <Input type="text" id="fname" placeholder="First Name"/>
                <Input type="text" id="lname" placeholder="Last Name"/>
                <Input type="email" id="fname" placeholder="Email"/>
                <TextAreaInput type="text" placeholder="Leave your message here!" />
                <SendMessageBtn onClick={sendMessage}>Send Message</SendMessageBtn>
            </FormContainer>
        </>
    )
}

export default FormElements
