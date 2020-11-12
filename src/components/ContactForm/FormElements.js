import styled from 'styled-components';

export const FormContainer = styled.form`
    display: flex;
    position: fixed;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 500px;
    height: auto;
    background-color: whitesmoke;
    z-index: 990;
    border-radius: 10px;
    top: 20%;
    left: 50%;
    transform: translate(-50%, 0);
    @media screen and (max-width: 768px){
        width: 98%;
        top: 5%;
    }
`
export const Input = styled.input`
    width: 90%;
    border-style: none;
    border-bottom: 2px solid black;
    height: 40px;
    margin: 10px 0 20px 0;
    background-color: whitesmoke;
    padding: 5px;
    font-family: 'Indie Flower', cursive;
    font-size: 1.2rem;
`
export const TextAreaInput = styled.textarea`
    display: block;
  min-height: 32px;
  max-height: 320px;
  line-height: 21px;
  background-color: #FFFAFA;
  min-width: 400px;
  margin: 0 auto;
  box-sizing: border-box;
  border: 1px solid rgb(217, 217, 217);
  padding: 4px 11px;
  text-size-adjust: 100%;
  border: none;
  border-bottom: 2px solid lightgray; 
  margin-top: 30px;
  font-family: 'Indie Flower', cursive;       
  font-size: 1.2rem;
  &:focus {
        background-color: lightgray;
        outline: none;
    }

    @media screen and (max-width: 480px){
        min-width: 350px;
    }
`
export const FormTitle = styled.h2`
    font-family: 'Permanent Marker', cursive;
    font-size: 4vw;
    margin: 10px 0;
`
export const FormSubTitle = styled.p`
    font-family: 'Indie Flower', cursive;
    font-size: 2rem;
    margin: 10px 15px;
    text-align: center;
`
export const SendMessageBtn = styled.button`
    display: 'flex';
    align-items: center;
    border-radius: 50px;
    background-color: rgb(14, 214, 14);
    white-space: nowrap;
    padding: 10px 22px;
    color: #010606;
    font-size: 1.5rem;
    font-family: 'Permanent Marker', cursive;
    margin: 20px 0;
    outline: none;
    border: none;
    cursor: pointer;

`