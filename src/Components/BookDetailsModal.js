import { Button } from "@mui/material";
import styled from "styled-components";
import { RowFlexContainer } from "./Styles/GlobalStyle";
import CancelIcon from '@mui/icons-material/Cancel';

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
`;
const LeftSectionContainer = styled.div`
position: relative; //This is to place the book cover relatively
width: 35%;
height: 100%;
/* border: 2px solid yellow; */

& button{
    position: absolute;
    bottom: 5%;
    left: 50%;
    transform: translateX(-50%);
}

h2{
    margin-bottom: 0;
}

h3{
    margin-top: 0;
}

`;
const RightSectionContainer = styled.div`
position: relative; //This is to place the book details and about relatively
width: 65%;
height: 100%;
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
    font-family: 'Roboto', sans-serif;
    font-size: 0.8rem;
    padding-inline: 2.5%;
}
`;
const BookCoverContainer = styled.div`
position: absolute;
top:8%;
left: 50%;
transform: translateX(-50%);
height: 50%;
width: 55%;
border: 2px solid green;
display: block;
`;

const BookTitleContainer = styled.div`
position: absolute;
top: 55%;
left: 50%;
transform: translateX(-50%);
margin-block: 0;

& h2 h3 {
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


export const BookDetailsModal = () => {
    return (
        <ModalContainer >
            <ContentContainer>
                <LeftSectionContainer>
                    <BookCoverContainer>
                    </BookCoverContainer>
                    <BookTitleContainer>
                        <h2 >Book Title</h2>
                        <h3 >$ 785/-</h3>
                    </BookTitleContainer>
                    <Button variant="contained" style={{ fontSize: "0.6rem" }} >Add to cart</Button>
                </LeftSectionContainer>

                <RightSectionContainer>
                    <h3 >About the book</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur unde dignissimos odio aperiam modi enim a
                        ssumenda quidem minima consequuntur velit. Suscipit minima debitis nisi cupiditate ex cumque aut sunt voluptates.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur sit quam rerum ad, repudiandae atque
                        itaque tenetur quae dolore iusto soluta ex error earum eaque accusantium. Earum modi animi eveniet?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur unde dignissimos odio aperiam modi enim a
                        ssumenda quidem minima consequuntur velit. Suscipit minima debitis nisi cupiditate ex cumque aut sunt voluptates.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur sit quam rerum ad, repudiandae atque
                        itaque tenetur quae dolore iusto soluta ex error earum eaque accusantium. Earum modi animi eveniet?Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur unde dignissimos odio aperiam modi enim a
                        ssumenda quidem minima consequuntur velit. Suscipit minima debitis nisi cupiditate ex cumque aut sunt voluptates.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur sit quam rerum ad, repudiandae atque
                        itaque tenetur quae dolore iusto soluta ex error earum eaque accusantium. Earum modi animi eveniet?Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur unde dignissimos odio aperiam modi enim a
                        ssumenda quidem minima consequuntur velit. Suscipit minima debitis nisi cupiditate ex cumque aut sunt voluptates.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur sit quam rerum ad, repudiandae atque
                        itaque tenetur quae dolore iusto soluta ex error earum eaque accusantium. Earum modi animi eveniet?Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur unde dignissimos odio aperiam modi enim a
                        ssumenda quidem minima consequuntur velit. Suscipit minima debitis nisi cupiditate ex cumque aut sunt voluptates.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur sit quam rerum ad, repudiandae atque
                        itaque tenetur quae dolore iusto soluta ex error earum eaque accusantium. Earum modi animi eveniet?</p>
                </RightSectionContainer>

            </ContentContainer>
            <CloseModal>
                <CancelIcon onClick={() => { document.querySelector('dialog').close(); }}/>
            </CloseModal>

        </ModalContainer>
    );
};