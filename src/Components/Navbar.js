import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Logo from '../assets/BookWorldLogo.png';
import { Container, LinkText, PrimaryBtn, RowFlexContainer, SecondaryBtn } from './Styles/GlobalStyle';
import MyCartLink from './MUI/MyCartLink';
import HomePageLink from './HomePageLink';
import SearchBookLink from './SearchBookLink';
import { useContext } from 'react';
import { GlobalStateContext } from '../App';


const LogoImage = styled.img`
width: 120px;
height: 100px;
/* border: 1px solid red; */
/* border-radius: 200px; */
/* box-sizing: border-box; */
/* mix-blend-mode: multiply; This is to be applied for IMG styling */

@media (max-width:520px){
width: 60px;
height: 50px;
}

&:hover {
    cursor: pointer;
}
`;


const NavBarContainer = styled(RowFlexContainer)`
align-items: center;
justify-content:center;
gap: 160px;
/* max-height: 400px; */
/* overflow: hidden; */

@media (max-width:520px){
    gap:0px;
}

`;


// Extending styled components
const NavBarLinkContainer = styled(RowFlexContainer)`
width: 40%;
/* border: 1px solid black; */
padding-inline: 8%;
justify-content: space-around;

@media (max-width:520px){
width: 80%;
justify-content: space-evenly;
padding-inline: 1%;
}
`;

const StickyHead = styled.div`
position: sticky;
top:0;
z-index: 5;
background-color: white;
border-radius: 10%;
`;

export const Navbar = (props) => {

    const { cart } = useContext(GlobalStateContext);

    return (
        <StickyHead>
            <NavBarContainer>
                <Link to='/'>
                    <LogoImage src={Logo} />
                </Link>
                <NavBarLinkContainer >
                    <LinkText>
                        <HomePageLink />
                    </LinkText>
                    <LinkText>
                        <SearchBookLink />
                    </LinkText>
                    <LinkText>
                        <MyCartLink itemCount={(cart.length > 0) ? cart.length : null} />
                    </LinkText>
                </NavBarLinkContainer>
            </NavBarContainer>
        </StickyHead>
    );
}



