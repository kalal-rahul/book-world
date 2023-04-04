import SearchIcon from '@mui/icons-material/Search';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { RowFlexContainer } from './Styles/GlobalStyle';


const MyAccLinkContainer = styled(RowFlexContainer)`
/* border: 0.1px solid red; */
justify-content: center;
gap:2%;
`;

export default function SearchBookLink(props) {
    return (
        <Link to='/bookSearch'>
            <MyAccLinkContainer>
                <SearchIcon color="action" />
                Search Books
            </MyAccLinkContainer >
        </Link>
    );
}