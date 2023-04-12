import styled from "styled-components";
import { RowFlexContainer } from "./Styles/GlobalStyle";
import { Link as LinkScroll } from "react-scroll";



const ListContainer = styled(RowFlexContainer)`
text-decoration: none;
list-style: none;
padding-inline: 2.5%;
font-family: 'Roboto', sans-serif;
border: 1px solid #c7c7c7;
border-radius: 20%;
margin-inline: 10%;
/* margin-left: 12%; */
justify-content: space-evenly;
background-color: #f5f5f5;
position: sticky;
top:100px;
z-index: 7;
/* font-weight:600; */

& :hover{
    cursor: pointer;
    color: #428bca;
    text-decoration: underline;
    transition: 0.2s ease-in-out;
}

@media (max-width:520px){
width:90%;
margin-inline: 6%;
position: sticky;
top:50px;
z-index: 7;
border-radius: 20%;
padding-inline: 1%;
}
`;


export const Categories = () => {
    return (
        <ListContainer>
            <LinkScroll
                activeClass="active"
                to="medical"
                spy={true}
                smooth={true}
                hashSpy={true}
                offset={-240}
                duration={800}
                delay={400}
                isDynamic={true}
                spyThrottle={500}
            >
                Medical
            </LinkScroll>
            <p>|</p>
            <LinkScroll
                activeClass="active"
                to="engineering"
                spy={true}
                smooth={true}
                hashSpy={true}
                offset={-240}
                duration={800}
                delay={400}
                isDynamic={true}
                spyThrottle={500}
            >
                Engineering
            </LinkScroll>
            <p>|</p>
            <LinkScroll
                activeClass="active"
                to="science"
                spy={true}
                smooth={true}
                hashSpy={true}
                offset={-240}
                duration={800}
                delay={400}
                isDynamic={true}
                spyThrottle={500}
            >
                Science
            </LinkScroll>
            <p>|</p>
            <LinkScroll
                activeClass="active"
                to="fiction"
                spy={true}
                smooth={true}
                hashSpy={true}
                offset={-240}
                duration={800}
                delay={400}
                isDynamic={true}
                spyThrottle={500}
            >
                Fiction
            </LinkScroll>
            <p>|</p>
            <LinkScroll
                activeClass="active"
                to="economics"
                spy={true}
                smooth={true}
                hashSpy={true}
                offset={-240}
                duration={800}
                delay={400}
                isDynamic={true}
                spyThrottle={500}
            >
                Economics
            </LinkScroll>
            <p className="no-disp">|</p>
            <LinkScroll
                activeClass="active"
                to="award"
                spy={true}
                smooth={true}
                hashSpy={true}
                offset={-240}
                duration={800}
                delay={400}
                isDynamic={true}
                spyThrottle={500}
                onClick={() => alert('Dummy Link Please try other!')}
                className="no-disp"
            >
                Award Winners
            </LinkScroll>
            <p>|</p>
            <LinkScroll
                activeClass="active"
                to="philosophy"
                spy={true}
                smooth={true}
                hashSpy={true}
                offset={-240}
                duration={800}
                delay={400}
                isDynamic={true}
                spyThrottle={500}
            >
                Philosophy
            </LinkScroll>
        </ListContainer>
    );
};  