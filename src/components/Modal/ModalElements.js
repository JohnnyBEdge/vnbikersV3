import styled from 'styled-components';

export const Overlay = styled.div`
    display: ${({modalOpen}) => (modalOpen ? 'flex' : 'none')};
    position: fixed;
    top: 0;
    left: 0;
    z-index: 90;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
    background-color: rgba(0,0,0,0.8);
`
// export const ModalContent = styled.div`
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     margin: 0 auto;
//     /* max-width: 400px; */
//     width: 400px;
//     height: 700px;
//     background-color: white;
// `