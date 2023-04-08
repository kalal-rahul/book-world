import styled from "styled-components";
import NorthIcon from '@mui/icons-material/North';
import { ColumnFlexContainer } from "./Styles/GlobalStyle";
import * as Scroll from 'react-scroll';

const MoveToTopContainer = styled(ColumnFlexContainer)`
font-family: 'Roboto', sans-serif;
margin-block:2.5%;

&:hover{
  cursor: pointer;
  color: #428bca;
  text-decoration: underline;
  transition: 0.2s ease-in-out;
}
`;


export const MoveToTop = () => {
    return (
        <MoveToTopContainer onClick={() => { Scroll.animateScroll.scrollToTop(); }}>
            <NorthIcon />
            Move to top
        </MoveToTopContainer>
    );
}; 