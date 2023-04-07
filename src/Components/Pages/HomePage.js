import { ColumnFlexContainer, Container, RowFlexContainer } from '../Styles/GlobalStyle';
import CarouselContainer from '../CarouselContainer';
import { Categories } from '../Categories';
import styled from 'styled-components';
import { MoveToTop } from '../MoveToTop';


export const HomePage = () => {

const CategoryHeadWraper = styled(RowFlexContainer)`
margin-inline: 10%;
justify-content: flex-start;

    & h2 {
      text-decoration: underline red;
      letter-spacing: 0.2%;
    }
`;


  return (
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
      <MoveToTop />
    </Container>
  );
};