import styled from "styled-components";
import { Container } from "./Styles/GlobalStyle";


const FooterContainer = styled.div`
`

const CopyRight = styled.div`
padding-inline: 10%;
padding-block: 1%;
background-color:#cdc9c9;
color: black;
font-size: 1rem;
font-family: 'Roboto', sans-serif;
text-align: center;
`



export const FooterSection = () =>{
    return(
        <CopyRight>
            &#169;2023 BookWorld - All rights reserved.
        </CopyRight>
    )
}