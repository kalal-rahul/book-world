import styled from "styled-components";
import { MoveToTop } from "./MoveToTop";
import { Container } from "./Styles/GlobalStyle";


const FooterContainer = styled.div`
position: relative;
bottom: 0px;
width: 100%;
`;

const CopyRight = styled.div`
padding-inline: 10%;
padding-block: 1%;
background-color:#cdc9c9;
color: black;
font-size: 0.85rem;
font-family: 'Roboto', sans-serif;
text-align: center;
`;



export const FooterSection = () => {
    return (
        <Container>
            <FooterContainer>
                <MoveToTop />
                <CopyRight>
                    &#169;2023 BookWorld - All rights reserved.
                </CopyRight>
            </FooterContainer>
        </Container>

    );
};