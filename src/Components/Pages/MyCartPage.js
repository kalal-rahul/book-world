import { useContext } from "react";
import styled from "styled-components";
import { GlobalStateContext } from "../../App";
import { CartItem } from "../CartItem";
import { Container, RowFlexContainer } from "../Styles/GlobalStyle";
import { NoBookMsg } from "./BookSearchPage";

const RightSectionConatiner = styled.div`
width: 25%;
height: 300px;
border: 1px solid grey;
box-shadow: grey 0px 0px 5px;
border-radius: 15px;
position: fixed;
top: 30%;
right: 7%;
`;

const OrderSummaryHead = styled.div`
height: 10%;
border-bottom: 1px solid grey;

& h4{
    font-family: 'Poppins', sans-serif;
    margin-block: 10px;
    font-weight: 500;
    color: black;
    text-align: center;
}
`;

const PriceContainer = styled.div`
font-family: monospace;
position: relative;
font-size: 1.2rem;
text-align: left;


& table{
    position: relative;
    top: 10%;
    left: 50%;
    transform: translateX(-50%);
    margin-top: 10%;
}

& th{
    padding-inline: 10px;
}

& td{
    padding-inline: 20px;
}
`;

const ButtonContainer = styled(RowFlexContainer)`
width: 100%;
height: 20%;
position: absolute;
bottom: 12%;
left: 50%;
transform: translateX(-50%);
justify-content: space-evenly;
flex-wrap: wrap;
padding-inline: 10px;
margin-top: 5%;
/* border: 1px solid red; */
`;


const PaymentBtn = styled.button`
padding-inline: 7%;
padding-block: 2.5%;
background-color: white;
color: #428bca ;
border: 1px solid #428bca;
font-family: 'Roboto', sans-serif;
font-weight:600;
border-radius: 10px;
margin-inline: 2%;

&:hover{
    cursor: pointer;
    background-color: #428bca;
    color: white;
    transition: 0.3s ease-in-out;
}
`;
const CanceltBtn = styled.button`
padding-inline: 7%;
padding-block: 2.5%;
background-color: white;
color: #ff3c3c ;
border: 1px solid #ff3b3b;
font-family: 'Roboto', sans-serif;
font-weight:600;
border-radius: 10px;
margin-inline: 2%;

&:hover{
    cursor: pointer;
    background-color: #ff3c3c;
    color: white;
    transition: 0.3s ease-in-out;
}
`;

const CartPageContainer = styled.div`
width: 90%;
`;

const LeftSectionContainer = styled.div`
position: relative;
width: 55%;
/* border:  1px solid grey; */
margin-left: 15%;
padding-left: 5%;
`;


export const MyCartPage = () => {
    const { cart, setCart } = useContext(GlobalStateContext);

    return (
        <Container>
            <CartPageContainer>
                <h2 style={{ fontWeight: "400", paddingLeft: "20%" }}>Cart Items</h2>
                {
                    //TODO Length < 1
                    (cart.length < 1) &&
                    <NoBookMsg>
                        <h2>No items to display...</h2>
                        <h2>Add items to cart to show here.</h2>
                    </NoBookMsg>
                }
                <LeftSectionContainer>

                    {
                        cart.map((eachBookData) => {
                            return (
                                <CartItem
                                    key={eachBookData.id}
                                    bookData={eachBookData} />
                            );
                        }
                        )
                    }

                </LeftSectionContainer>

                <RightSectionConatiner>
                    <OrderSummaryHead>
                        <h4>ORDER SUMMARY</h4>
                    </OrderSummaryHead>
                    <PriceContainer>
                        <table>
                            <tr>
                                <th>
                                    Total Cost
                                </th>
                                <td>
                                    $ 982
                                </td>
                            </tr>
                            <tr>
                                <th>
                                    Discount
                                </th>
                                <td>
                                    $ 182
                                </td>
                            </tr>
                            <tr>
                                <th>
                                    Shipping
                                </th>
                                <td>
                                    Free!
                                </td>
                            </tr>
                            <tr>
                                <th>
                                    AMOUNT PAYABLE
                                </th>
                                <td>
                                    $ 800
                                </td>
                            </tr>
                        </table>
                    </PriceContainer>

                    <ButtonContainer>
                        <PaymentBtn>Make Payment</PaymentBtn>
                        <CanceltBtn>Cancel Order</CanceltBtn>
                    </ButtonContainer>
                </RightSectionConatiner>
            </CartPageContainer>
        </Container>
    );
};