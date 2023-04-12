import { Style } from '@mui/icons-material';
import styled from 'styled-components';

export const Container = styled.div`
max-width: 1400px;
/* min-height: 600px; */
margin-inline: auto;
/* border: 1px solid red; */
position: relative;
`;


export const LinkText = styled.div`
font-family: 'Roboto', sans-serif;
font-size: 1.2rem;
/* border: 0.1px solid red; */
min-width: 33%;
& a {
    text-decoration: none;
    color: black;

    & :hover{
        color: #428bca;
        text-decoration: underline;
        transition: 0.2s ease-in-out;
    }
}
`;

export const RowFlexContainer = styled.div`
display: flex;
align-items: center;
`;

export const ColumnFlexContainer = styled.div`
display: flex;
align-items: center;
flex-direction: column;
`;

export const PrimaryBtn = styled.div`
& button{
    font-size: 0.875rem;
    font-weight: 600;
    background-color: #428bca;
}
`;

export const SecondaryBtn = styled.div`
& button{
    font-size: 0.875rem;
    font-weight: 600;
    border-radius:0.512rem;
}

& button:hover{
    background-color:#1976d2;
    color: white;
}
`;

