import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Logo from '../assets/BookWorldLogo.png';
import SmallLogo from '../assets/SmallLogo.png';
import LogoSVG from '../assets/BookWorldLogo.svg';
import { Container, LinkText, PrimaryBtn, RowFlexContainer, SecondaryBtn } from './Styles/GlobalStyle';
import MyCartLink from './MUI/MyCartLink';
import Button from '@mui/material/Button';
import { fontSize } from '@mui/system';
import MyAccountLink from './MyAccountLink';
import SearchBookLink from './SearchBookLink';
import { Categories } from './Categories';


const LogoImage = styled.img`
width: 120px;
height: 100px;
/* border: 1px solid red; */
/* border-radius: 200px; */
/* box-sizing: border-box; */
/* mix-blend-mode: multiply; This is to be applied for IMG styling */

&:hover {
    cursor: pointer;
}
`;


const NavBarContainer = styled(RowFlexContainer)`
justify-content:center;
/* max-height: 400px; */
/* overflow: hidden; */
`;


// Extending styled components
const NavBarLinkContainer = styled(RowFlexContainer)`
width: 40%;
/* border: 1px solid black; */
padding-inline: 8%;
justify-content: space-around;
`;

const StickyHead = styled.div`
position: sticky;
top:0;
z-index: 5;
background-color: white;
border-radius: 10%;
`;

export const Navbar = (props) => {
    return (
        <StickyHead>
            <NavBarContainer>
                <Link to='/'>
                    <LogoImage src={Logo} />
                </Link>
                <NavBarLinkContainer >
                    <LinkText>
                        <SearchBookLink />
                    </LinkText>
                    <LinkText>
                        <MyCartLink itemCount={20} />
                    </LinkText>
                    <LinkText>
                        <MyAccountLink />
                    </LinkText>
                </NavBarLinkContainer>
            </NavBarContainer>
        </StickyHead>
    );
}



