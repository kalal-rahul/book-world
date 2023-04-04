import { Button } from "@mui/material";
import styled from "styled-components";
import { BookDetailsModal } from "./BookDetailsModal";
import { PrimaryBtn, SecondaryBtn } from "./Styles/GlobalStyle";



const CardContainer = styled.div`
min-width: 22%;
min-height: 42%;
max-width: 22%;
max-height: 42%;
border: 1px solid #a3a3a3;
border-radius: 10px;
display: inline-block;
margin: 20px;
text-align: center;
overflow: hidden;
padding-block: 2%;

&:hover{
    cursor: pointer;
    box-shadow: 0 10px 5px #b9b9b9;
    transition: 0.2s ease;
}
`;
const ImageContainer = styled.div`
/* min-width: 120px;
min-height: 180px;
max-width: 120px;
max-height: 180px; */
min-width: 80%;
min-height: 180px;
max-width: 120px;
max-height: 180px;
position: relative;
left: 50%;
transform: translateX(-50%);
background: url(http://books.google.com/books/content?id=HQRuDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api);
background-repeat: no-repeat;
background-size:cover;
`;

const BookTitle = styled.h4`
font-family: 'Poppins', sans-serif;
font-size: 0.8rem;
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
font-family: 'Poppins', sans-serif;
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



const BookCard = () => {
    const openDialog = () => {
        const dialogBox = document.querySelector('dialog');
        dialogBox.showModal();
    };


    return (
        <CardContainer>
            <BookDetailsModal/>
            <ImageContainer />
            <BookTitle>
                Destined for You Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus nostrum debitis non consequatur iure labore quod qui animi suscipit molestiae modi iusto, eius saepe harum dignissimos doloribus est eos repellat.
            </BookTitle>
            <Author>
                By Sarah Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus facilis nobis nam quasi ducimus repudiandae quae deserunt dignissimos reiciendis. Aspernatur sint numquam aperiam eveniet libero necessitatibus, maxime quasi error alias?
            </Author>
            <Button variant="contained" style={{ fontSize: "0.6rem" }} >Add to cart</Button>
            <Button variant="outlined" style={{ fontSize: "0.6rem", marginInline: "2%", fontWeight: 'bold' }}  onClick={openDialog}>View</Button>
        </CardContainer>
    );
};

export default BookCard;