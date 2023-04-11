import { Container } from "@mui/system";
import styled from "styled-components";
import SearchIcon from '@mui/icons-material/Search';
import { ColumnFlexContainer, RowFlexContainer } from "../Styles/GlobalStyle";
import BookCard from "../BookCard";
import { Button } from "@mui/material";
import { useState } from "react";
import Axios  from "axios";
import { API_KEY } from "../../App";


const SearchPageContainer = styled(RowFlexContainer)`
position: relative;
/* border: 1px solid red; */
`;

const LeftSectionConatiner = styled.div`
width: 65%;
padding-left: 16%;
`;


const SearchInput = styled(RowFlexContainer)`
width: 100%;
position: sticky;
background-color: white;
/* border-radius: 80%; */
top:86px;
z-index: 8;



& input {
    height: 20px;
    width: 70%;
    /* background-color: white; */
    background-color: #f7f7f7;
    padding-inline: 2%;
    padding-block: 1%;
    border: 1px solid grey;
    border-radius: 25px;
    margin-inline:14%;
    margin-top: 1.5%;
    font-size: 1.2rem;
}

& div{
    position: absolute;
    right: 15%;
    top: 45%;
    
    
    & :hover{
        cursor: pointer;
        color: #428bca;
    }
}
`;


const RightSectionConatiner = styled.div`
width: 15%;
height: 250px;
border: 1px solid grey;
box-shadow: 0 0 5px grey;
border-radius: 15px;
position: fixed;
top:40%;
right: 8%;


& button{
    position: absolute;
    bottom: 20px;
    left:50%;
    transform: translateX(-50%);
}
`;

const FilterHead = styled.div`
width: 100%;
margin-block: 2.5%;
border-bottom: 1px solid #cfcfcf;
background-color: white;

& h4{
    font-family: 'Roboto', sans-serif;
    margin-block: 10px;
    font-weight: 500;
    color: black;
    text-align: center;
}
`;

const FilterCheckBox = styled(ColumnFlexContainer)`
height: 55%;
justify-content: space-evenly;
align-items: flex-start;
font-family: 'Roboto', sans-serif;
font-size: 0.9rem;
margin-inline: 20%;
margin-block: 5%;
overflow: auto;
`;
const CheckBoxContainer = styled(RowFlexContainer)`
padding-left: 0;
`;

export const NoBookMsg = styled.div`
position: relative;
margin: 10%;
padding-left: 20%;
`;

export const BookSearchPage = () => {

    const [searchResult, setSearchResult] = useState([]);

    let searchedBook = "";

    const HandleSearchClick = async() => {
        await Axios.get(`https://www.googleapis.com/books/v1/volumes?q=${searchedBook}&filter=paid-ebooks&maxResults=20&key=AIzaSyDnjxV0J2xUBLBAejecvQwUrxKZSDWWbfE`)
            .then((response) => {
                console.log(response.data);
                setSearchResult(response.data.items);

            }).catch((error) => {
                console.log(error);
                alert("Sorry...\nUnable to fetch data from SERVER");
            });

    }

    const handlePressEnter = async (e) => {
        if (e.key === "Enter"){
            await Axios.get(`https://www.googleapis.com/books/v1/volumes?q=${searchedBook}&filter=paid-ebooks&maxResults=20&key=${API_KEY}`)
            .then((response) => {
                // console.log(response.data);
                setSearchResult(response.data.items);

            }).catch((error) => {
                console.log(error);
                alert("Sorry...\nUnable to fetch data from SERVER");
            });
        }    
    }

    return (
        <Container>
            <SearchInput>
                <input 
                    type="text" 
                    placeholder="Search for book title, author, subject..." 
                    onChange={(e) => searchedBook = e.target.value}
                    onKeyDown={handlePressEnter} 
                />
                <div onClick={HandleSearchClick}>
                    <SearchIcon />
                </div>
            </SearchInput>
            {
                (searchResult.length < 1) &&

                <NoBookMsg>
                    <h2>No books to display...</h2>
                    <h2>Search for books to show results.</h2>
                </NoBookMsg>
            }

            <SearchPageContainer>
                <LeftSectionConatiner>

                    {
                        searchResult.map( (resultItem) => {

                            if (resultItem.volumeInfo.imageLinks.smallThumbnail){

                                let eachBookData = {
                                    id: resultItem.id,
                                    bookName: resultItem.volumeInfo.title,
                                    cost: resultItem.saleInfo.listPrice?.amount,
                                    bookImage: resultItem.volumeInfo.imageLinks.smallThumbnail,
                                    author: resultItem.volumeInfo.authors[0],
                                    description: resultItem.volumeInfo.description,
                                    pageCount: resultItem.volumeInfo.pageCount,
                                };

                                return ( 
                                    <BookCard 
                                         key={eachBookData.id}
                                         bookData = {eachBookData}/>
                                );
                            }

                        }
                        )
                    }

                </LeftSectionConatiner>
                <RightSectionConatiner>
                    <FilterHead>
                        <h4>Search with filters</h4>
                    </FilterHead>
                    <FilterCheckBox>
                        <CheckBoxContainer>
                            <input type="checkbox" name="E-Book" />
                            <label for="E-Book" >E-Book</label>
                        </CheckBoxContainer>
                        <CheckBoxContainer>
                            <input type="checkbox" name="E-Book" />
                            <label for="E-Book" >Free E-Book</label>
                        </CheckBoxContainer>
                        <CheckBoxContainer>
                            <input type="checkbox" name="E-Book" />
                            <label for="E-Book" >Paper Back</label>
                        </CheckBoxContainer>
                        <CheckBoxContainer>
                            <input type="checkbox" name="E-Book" />
                            <label for="E-Book" >New arrivals</label>
                        </CheckBoxContainer>
                        <CheckBoxContainer>
                            <input type="checkbox" name="E-Book" />
                            <label for="E-Book" >Limited Edition</label>
                        </CheckBoxContainer>
                    </FilterCheckBox>
                    <Button 
                        variant="contained" 
                        style={{ fontSize: "0.6rem", backgroundColor: "#ff8f24" }} 
                        onClick={()=> alert("Filter feature will be implemented soon!")}> Apply Filter </Button>
                </RightSectionConatiner>
            </SearchPageContainer>
        </Container>
    );
};