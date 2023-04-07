import styled from "styled-components";
import BookCard from "./BookCard";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';



const CarouselWrapper = styled.div`
position: relative;
padding-inline: 40px;
/* border: 2px solid grey; */
min-height: 300px;
max-height:380px ;
max-width: 80%;
margin-left: 7%;
`

const CardWrapper = styled.div`
max-width: 90%;
min-height: 80%;
max-height: 80%;
margin: auto;
display: flex;
overflow: hidden;
scroll-behavior: smooth;
border-block: 1px solid #d1d1d1;
border-radius: 10%;
box-shadow: 0 0 10px grey;
`;

const PrevBtn = styled.button`
position: absolute;
top: 50%;
left: 5%;
z-index: 2;
background-color: transparent;
border-radius: 20px;
border: none;
box-shadow: 0 0 5px;
padding: 5px;
&:hover{
    cursor: pointer;
    color: white;
    background-color: grey;
}
`;

const NextBtn = styled.button`
position: absolute;
top:50%;
right: 4%;
z-index: 2;
background-color: transparent;
border-radius: 20px;
border: none;
box-shadow: 0 0 5px;
padding: 5px;
&:hover{
    cursor: pointer;
    color: white;
    background-color: grey;
}
`;


const showNext = (id) => {
    console.log(id)
    const boxElem = document.getElementById(id);
    boxElem.scrollLeft = boxElem.scrollLeft + 230;
};

const showPrev = (id) => {
    console.log(id)
    const boxElem = document.getElementById(id);
    boxElem.scrollLeft = boxElem.scrollLeft - 230;
};


const CarouselContainer = (props) => {
    return (
        <CarouselWrapper>
            <PrevBtn onClick={() => showPrev(props.id)} >
            <ArrowBackIosNewIcon/>
            </PrevBtn>
            <CardWrapper id={props.id}>
                <BookCard />
                <BookCard />
                <BookCard />
                <BookCard />
                <BookCard />
                <BookCard />
                <BookCard />
                <BookCard />
                <BookCard />
                <BookCard />
                <BookCard />
                <BookCard />
                <BookCard />
            </CardWrapper>
            <NextBtn onClick={() => showNext(props.id)}>
            <ArrowForwardIosIcon/>
            </NextBtn>
        </CarouselWrapper>

    );
};


export default CarouselContainer;