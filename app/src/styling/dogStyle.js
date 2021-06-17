import styled from 'styled-components';

const MainDiv = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
width: auto;
padding-left: 25%;
padding-right: 25%;
max-height: 50%;
`;

const Button = styled.button`
margin-top: 2%;
width: fit-content;
justify-content: center;
margin-left: 40%;
padding: 1%;
border-radius: 10px;
:hover{
    background: white;
}
`;

export {MainDiv, Button};