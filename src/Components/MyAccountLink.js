import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { RowFlexContainer } from './Styles/GlobalStyle';


const MyAccLinkContainer = styled(RowFlexContainer)`
/* border: 0.1px solid red; */
justify-content: center;
gap:2%;
`;

export default function MyAccountLink(props) {
    return (
        <Link>
            <MyAccLinkContainer>
                <AccountCircleIcon color="action" />
                My Account
            </MyAccLinkContainer >
        </Link>
    );
}