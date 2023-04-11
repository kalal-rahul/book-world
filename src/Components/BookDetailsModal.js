import { Button } from "@mui/material";
import styled from "styled-components";
import { RowFlexContainer } from "./Styles/GlobalStyle";
import CancelIcon from '@mui/icons-material/Cancel';
import { useContext } from "react";
import { CartContext } from "./BookCard";
import { GlobalStateContext } from "../App";

const ModalContainer = styled.dialog`
box-sizing: border-box;
border: 0.5px solid #999999;
border-radius: 15px;
padding: 10px;
position: fixed;
top: 5%;
width: 60%;
height: 72vh;
z-index: 8;

&::backdrop {
    backdrop-filter:blur(5px)
}
`;

const ContentContainer = styled(RowFlexContainer)`
height: 100%;
width: 100%;
/* border: 2px solid red; */

& button{
    position: absolute;
    bottom: 3%;
    left: 50%;
    transform: translateX(-50%);
}
`;
const LeftSectionContainer = styled.div`
position: relative; //This is to place the book cover relatively
width: 35%;
height: 100%;
overflow: auto;
/* border: 2px solid yellow; */


h2{
    margin-bottom: 0;
}

h3{
    margin-top: 0;
}

&::-webkit-scrollbar {
    width: 5px;
    background-color: #bb1717cc;
}

&::-webkit-scrollbar-track {
    background-color: white;
}

&::-webkit-scrollbar-thumb {
    background-color: #a7a7a7;
    border-radius: 10px;
    height: 50px;
    /* You cannot alter the thumb height it comes by default */
}

`;
const RightSectionContainer = styled.div`
position: relative; //This is to place the book details and about relatively
width: 65%;
height: 80%;
overflow: auto;

&::-webkit-scrollbar {
    width: 8px;
    background-color: #bb1717cc;
}

&::-webkit-scrollbar-track {
    background-color: white;
}

&::-webkit-scrollbar-thumb {
    background-color: #428bca;
    border-radius: 10px;
    height: 50px;
    /* You cannot alter the thumb height it comes by default */
}

& h3{
    margin-top: 0;
    text-align: left;
    position: sticky;
    top: 0;
    background-color: white;
}

& p{
    text-align:justify;
    line-height: 1.4;
    font-family: 'Roboto', sans-serif;
    font-size: 0.8rem;
    padding-inline: 5%;
}
`;
const BookCoverContainer = styled.div`
position: absolute;
top:8%;
left: 50%;
transform: translateX(-50%);
height: 45%;
width: 55%;
background: url(${props => props.imgLink});
background-repeat: no-repeat;
background-size:cover;
border: 1px solid green;
`;

const BookTitleContainer = styled.div`
position: absolute;
top: 55%;
left: 50%;
transform: translateX(-50%);
margin-block: 0;

& h2, h3 {
    margin-block: 0;
}
`;

const CloseModal = styled(RowFlexContainer)`
justify-content: center;
align-items: center;
position: absolute;
right: 1%;
top: 1%;

& :hover{
    color: red;
}

`;

const TableContainer = styled.table`
border-collapse: collapse;
text-align: left;
/* font-family: 'Roboto', sans-serif; */
font-family: monospace;
border-radius: 5px;
position: absolute;
top: 55%;
left: 50%;
transform: translateX(-50%);
min-width: 80%;
margin-top: 10px;

& th{
    /* padding-inline: 10px; */
    padding-block: 2.5px;
    font-size: 0.9rem;
    padding-left: 20px;
}

& td{
    font-size: 0.8rem;
    padding-left: 10px;
}
`;

export const BookDetailsModal = (props) => {

    const {buttonDisabled, setButtonDisabled} = useContext(CartContext);
    const { cart, setCart } = useContext(GlobalStateContext);

    const closeDialog = (modalId) => {
        const dialogBox = document.getElementById(modalId);
        dialogBox.close();
    };

    const handleAddToCart = (bookData) => {
        setButtonDisabled(true);
        setCart([...cart, bookData]);
    };


    return (
        <ModalContainer id={props.bookData.id}>
            <ContentContainer>
                <LeftSectionContainer>
                    <BookCoverContainer imgLink = {props.bookData.bookImage}/>
                    <TableContainer>
                       <tbody>
                       <tr>
                            <th>
                                Title
                            </th>
                            <td>
                               {props.bookData.bookName}
                            </td>
                        </tr>
                        <tr>
                            <th>
                                Author
                            </th>
                            <td>
                                {props.bookData.author}
                            </td>
                        </tr>
                        <tr>
                            <th>
                                Length
                            </th>
                            <td>
                                {props.bookData.pageCount} pages
                            </td>
                        </tr>
                        <tr>
                            <th>
                                Price
                            </th>
                            <td>
                                &#8377; {props.bookData.cost}
                            </td>
                        </tr>
                       </tbody>
                    </TableContainer>
                </LeftSectionContainer>

                <RightSectionContainer>
                    <h3 style={{ marginBottom: "0" }}>About the book</h3>
                    <p>{props.bookData.description}</p>
                </RightSectionContainer>
                <Button 
                    variant="contained" style={{ fontSize: "0.6rem" }} 
                    disabled = {buttonDisabled}
                    onClick={() => handleAddToCart(props.bookData)}>Add to cart</Button>
            </ContentContainer>
            <CloseModal>
                <CancelIcon onClick={() => closeDialog(props.bookData.id) } />
            </CloseModal>

        </ModalContainer>
    );
};