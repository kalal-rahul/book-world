import { ColumnFlexContainer, Container,RowFlexContainer } from '../Styles/GlobalStyle';
import CarouselContainer from '../CarouselContainer';
import { Categories } from '../Categories';
import NorthIcon from '@mui/icons-material/North';
import * as Scroll from 'react-scroll';
import styled from 'styled-components';


export const HomePage = () =>{

const CategoryHeadWraper = styled(RowFlexContainer)`
margin-inline: 10%;
justify-content: flex-start;
    & h2 {
      text-decoration: underline red;
      letter-spacing: 0.2%;
    }
`;

const MoveToTop = styled(ColumnFlexContainer)`
font-family: 'Roboto', sans-serif;
margin-block:2.5%;

&:hover{
  cursor: pointer;
  color: #428bca;
  text-decoration: underline;
  transition: 0.2s ease-in-out;
}
`;


    return(
        <Container>
            <Categories />
            <CategoryHeadWraper>
              <h2>Science</h2>
            </CategoryHeadWraper>
            <CarouselContainer id="science" />
            <CategoryHeadWraper>
              <h2>New Arrivals</h2>
            </CategoryHeadWraper>
            <CarouselContainer id='new' />
            <CategoryHeadWraper>
              <h2>Text Books</h2>
            </CategoryHeadWraper>
            <CarouselContainer id='text' />
            <CategoryHeadWraper>
              <h2>Best Sellers</h2>
            </CategoryHeadWraper>
            <CarouselContainer id='best' />
            <CategoryHeadWraper>
              <h2>Award Winners</h2>
            </CategoryHeadWraper>
            <CarouselContainer id='award' />
            <CategoryHeadWraper>
              <h2>Fiction</h2>
            </CategoryHeadWraper>
            <CarouselContainer id='fiction' />
            <CategoryHeadWraper>
              <h2>Engineering</h2>
            </CategoryHeadWraper>
            <CarouselContainer id='eng' />
            <MoveToTop onClick={() => { Scroll.animateScroll.scrollToTop(); }}>
              <NorthIcon />
              Move to top
            </MoveToTop>
          </Container>
    )
}