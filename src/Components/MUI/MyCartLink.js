import * as React from 'react';
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';
import { RowFlexContainer } from '../Styles/GlobalStyle';
import styled from 'styled-components';


const CartLinkContainer = styled(RowFlexContainer)`
/* border: 0.1px solid red; */
justify-content: center;
gap:2%;
`;

export default function MyCartLink(props) {
    return (
        <Link to="/myCart">
            <CartLinkContainer>
                <Badge  badgeContent={props.itemCount} color="error">
                    <ShoppingCartIcon color="action" />
                </Badge>
                My Cart
            </CartLinkContainer >
        </Link>
    );
}


