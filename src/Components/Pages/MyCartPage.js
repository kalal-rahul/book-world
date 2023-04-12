import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { GlobalStateContext } from "../../App";
import { CartItem } from "../CartItem";
import { FooterSection } from "../FooterSection";
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

@media(max-width:520px) {
display: none;
}
`;
const RightSectionConatinerMobile = styled.div`
width: 25%;
height: 300px;
border: 1px solid grey;
box-shadow: grey 0px 0px 5px;
border-radius: 15px;
position: fixed;
top: 30%;
right: 7%;
display: none;

@media(max-width:520px) {
display: block;
position: relative;
bottom: 0px;
width: 85%;
height: 220px;
margin-left: 60px;
}
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

@media(max-width:520px) {
    width: 85%;
    margin-inline: 10%;
}
`;


export const MyCartPage = () => {
    const { cart, setCart } = useContext(GlobalStateContext);

    const [totalCost, setTotalCost] = useState(0);
    const [discount, setDiscount] = useState(0);
    const [amtPay, setAmtPay] = useState(0);

    const [quantityChange, setQuantityChange] = useState(0);

    const handleMakePayment = () => {
        setCart([]);
        setTotalCost(0);
        setDiscount(0);
        setAmtPay(0);
        alert("Congratulations your order has been placed!\nDetails are shared to your email ID");
    };

    const handleCancelOrder = () => {
        setCart([]);
        setTotalCost(0);
        setDiscount(0);
        setAmtPay(0);
        alert("Your order has been cancelled...\nDetails are shared to your email ID");
    };

    useEffect(() => {

        // alert("Calculating Bill");
        let total = 0;
        let disc = 0;
        let totalAmt = 0;

        cart.map((eachBookData) => {
            // console.log(eachBookData.cost);
            total += eachBookData.totalPrice;
        });

        total = Math.trunc(total);
        disc = Math.trunc(total * 0.10);
        totalAmt = Math.trunc(total - disc);
        // console.log("tc " + total + " disc " + disc + " totalAmt " + totalAmt);
        setTotalCost(total);
        setDiscount(disc);
        setAmtPay(totalAmt);

    }, [cart, quantityChange]); //The logic placed in the above code block will be executed when ever there is change in these states



    return (
        <>
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
                        {/* eachBookData.cost */}
                        {
                            cart.map((eachBookData) => {
                                return (
                                    <CartItem
                                        key={eachBookData.id}
                                        bookData={eachBookData}
                                        setQuantityChange={setQuantityChange}
                                        quantityChange={quantityChange}
                                    />
                                );
                            }
                            )
                        }

                    </LeftSectionContainer>

                    {
                        (cart.length >= 1) &&
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
                                            &#8377; {totalCost}
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>
                                            Discount
                                        </th>
                                        <td>
                                            &#8377; {discount}
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
                                            &#8377; {amtPay}
                                        </td>
                                    </tr>
                                </table>
                            </PriceContainer>

                            <ButtonContainer>
                                <PaymentBtn onClick={handleMakePayment} >Make Payment</PaymentBtn>
                                <CanceltBtn onClick={handleCancelOrder} >Cancel Order</CanceltBtn>
                            </ButtonContainer>
                        </RightSectionConatiner>
                    }

                </CartPageContainer>

                {
                    (cart.length >= 1) &&
                    <RightSectionConatinerMobile>
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
                                        &#8377; {totalCost}
                                    </td>
                                </tr>
                                <tr>
                                    <th>
                                        Discount
                                    </th>
                                    <td>
                                        &#8377; {discount}
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
                                        &#8377; {amtPay}
                                    </td>
                                </tr>
                            </table>
                        </PriceContainer>

                        <ButtonContainer>
                            <PaymentBtn onClick={handleMakePayment}>Make Payment</PaymentBtn>
                            <CanceltBtn onClick={handleCancelOrder}>Cancel Order</CanceltBtn>
                        </ButtonContainer>
                    </RightSectionConatinerMobile>
                }

            </Container>
            <FooterSection />
        </>
    );

};