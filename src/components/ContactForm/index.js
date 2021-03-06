import React from 'react';
import {FormContainer, Input, TextAreaInput, FormSubTitle, FormTitle, SendMessageBtn} from './FormElements';

const FormElements = () => {

    const handleForm = (event) => {
        const form = event.target;
        const data = new FormData(form);
        const xhr = new XMLHttpRequest();
        xhr.open(form.method, form.action);
        xhr.setRequestHeader("Accept", "application/json");
        xhr.onreadystatechange = () => {
            if(xhr.readyState !== XMLHttpRequest.DONE) return;
            if(xhr.status === 200) {
                form.reset();
            }
        }
        xhr.send(data);
    }


    return (
        <>
            <FormContainer 
                onSubmit={(event) => handleForm(event)}
                action="https://formspree.io/f/mdopdglo"
                method="POST">
                <FormTitle>Contact Us</FormTitle>
                <FormSubTitle>Questions? Comments? Concerns? Let us know below!</FormSubTitle>
                <Input 
                    type="text" 
                    name="First name" 
                    placeholder="First Name"
                    required />
                <Input 
                    type="text" 
                    name="Last name"
                    placeholder="Last Name"
                    required />
                <Input 
                    type="email" 
                    placeholder="Email"
                    name="Email"
                    required />
                <TextAreaInput 
                    type="text" 
                    placeholder="Leave your message here!" 
                    name="Message"
                    required />
                <SendMessageBtn >Send Message</SendMessageBtn>
            </FormContainer>
        </>
    )
}

export default FormElements
