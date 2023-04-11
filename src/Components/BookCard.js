import { Button } from "@mui/material";
import styled from "styled-components";
import { BookDetailsModal } from "./BookDetailsModal";
import { PrimaryBtn, SecondaryBtn } from "./Styles/GlobalStyle";
import { useContext } from 'react';
import { GlobalStateContext } from "../App";
import { useState } from "react";
import { createContext } from "react";



const CardContainer = styled.div`
width: 200px;
height: 270px;
box-sizing: border-box;
border: 1px solid #a3a3a3;
border-radius: 10px;
display: inline-block;
margin: 20px;
text-align: center;
padding-block: 2%;
flex-shrink: 0; //This is a flex child property if not set then the flex child item will resize undesirabely

&:hover{
    cursor: pointer;
    box-shadow: 0 10px 5px #b9b9b9;
    transition: 0.2s ease;
}
`;
const ImageContainer = styled.div`
width: 110px;
height: 160px;
position: relative;
left: 50%;
transform: translateX(-50%);
background: url(${props => props.imgLink});
background-repeat: no-repeat;
background-size:cover;
`;

const BookTitle = styled.h4`
font-family: 'Roboto', sans-serif;
font-size: 0.85rem;
text-align: center;
white-space: nowrap;
width :70% ;
overflow: hidden;
text-overflow: ellipsis; 
margin-top: 6px;
margin-bottom: 0;
margin-left: 12%;
`;

const Author = styled.h5`
font-family: 'Roboto', sans-serif;
font-size: 0.7rem;
color:#676767;
text-align: center;
white-space: nowrap;
width :50% ;
overflow: hidden;
text-overflow: ellipsis; 
margin-block: 0;
margin-bottom: 10px;
margin-left: 22%;
`;



const BookCard = (props) => {

    const [buttonDisabled, setButtonDisabled] = useState(false);
    const { cart, setCart } = useContext(GlobalStateContext);

    const openDialog = (modalId) => {
        const dialogBox = document.getElementById(modalId);
        dialogBox.showModal();
    };


    const handleAddToCart = (bookData) => {
        setButtonDisabled(true);
        setCart([...cart, bookData]);
    };


    return (
        <CartContext.Provider value={{buttonDisabled, setButtonDisabled}}>
            <CardContainer>
                <BookDetailsModal
                    bookData={props.bookData}
                />
                <ImageContainer imgLink={props.bookData.bookImage} />
                <BookTitle>
                    {props.bookData.bookName}
                </BookTitle>
                <Author>
                    By {props.bookData.author}
                </Author>
                <Button variant="contained" style={{ fontSize: "0.6rem" }} onClick={() => handleAddToCart(props.bookData)} disabled={buttonDisabled} >Add to cart</Button>
                <Button variant="outlined" style={{ fontSize: "0.6rem", marginInline: "2%", fontWeight: 'bold' }} onClick={() => openDialog(props.bookData.id)}>View</Button>
            </CardContainer>
        </CartContext.Provider>
    );
};

export default BookCard;
export const CartContext = createContext(); 