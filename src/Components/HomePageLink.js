import HomeIcon from '@mui/icons-material/Home';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { RowFlexContainer } from './Styles/GlobalStyle';


const MyAccLinkContainer = styled(RowFlexContainer)`
/* border: 0.1px solid red; */
justify-content: center;
gap:2%;
`;

export default function HomePageLink(props) {
    return (
        <Link to="/">
            <MyAccLinkContainer>
                <HomeIcon color="action" />
                Home
            </MyAccLinkContainer >
        </Link>
    );
}