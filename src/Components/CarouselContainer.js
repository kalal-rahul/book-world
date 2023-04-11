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
margin-left: 10%;
`;

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
top: 45%;
left: 4%;
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
top:45%;
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



const CarouselContainer = (props) => {

    const showNext = (id) => {
        console.log(id);
        const boxElem = document.getElementById(id);
        boxElem.scrollLeft = boxElem.scrollLeft + 230;
    };

    const showPrev = (id) => {
        console.log(id);
        const boxElem = document.getElementById(id);
        boxElem.scrollLeft = boxElem.scrollLeft - 230;
    };

    return (
        <CarouselWrapper>
            <PrevBtn onClick={() => showPrev(props.id)} >
                <ArrowBackIosNewIcon />
            </PrevBtn>
            <CardWrapper id={props.id}>
                {(props.bookData.length < 1) && <h2 style={{marginInline:"auto"}}>Loading...</h2>}

                {

                    props.bookData.map((resultItem) => {

                        const allItemsExist =
                            resultItem.volumeInfo.imageLinks?.smallThumbnail !== undefined &&
                            resultItem.volumeInfo?.authors !== undefined &&
                            resultItem.volumeInfo?.title !== undefined &&
                            resultItem?.id !== undefined &&
                            resultItem.volumeInfo?.description !== undefined;

                        // console.log("All items present " + allItemsExist);

                        if (allItemsExist) {
                            let eachBookData = {
                                id: resultItem.id,
                                bookName: resultItem.volumeInfo.title,
                                cost: resultItem.saleInfo.listPrice?.amount,
                                bookImage: resultItem.volumeInfo.imageLinks.smallThumbnail,
                                author: resultItem.volumeInfo.authors[0],
                                description: resultItem.volumeInfo.description,
                                pageCount: resultItem.volumeInfo?.pageCount,
                            };

                            return (
                                <BookCard
                                    key={eachBookData.id}
                                    bookData={eachBookData} />
                            );
                        }
                    })
                }
            </CardWrapper>
            <NextBtn onClick={() => showNext(props.id)}>
                <ArrowForwardIosIcon />
            </NextBtn>
        </CarouselWrapper>

    );
};


export default CarouselContainer;