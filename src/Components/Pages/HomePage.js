import { ColumnFlexContainer, Container, RowFlexContainer } from '../Styles/GlobalStyle';
import CarouselContainer from '../CarouselContainer';
import { Categories } from '../Categories';
import styled from 'styled-components';
import Axios from 'axios';
import { useEffect, useState } from 'react';
import { API_KEY } from '../../App';
import { economicsCategoryItems, engineeringCategoryItems, fictionCategoryItems, medicalCategoryItems, philosophyCategoryItems, scienceCategoryItems } from '../Data/CategoryData';
import { FooterSection } from '../FooterSection';



const CategoryHeadWraper = styled(RowFlexContainer)`
margin-inline: 10%;
justify-content: flex-start;

    & h2 {
      text-decoration: underline red;
      letter-spacing: 0.2%;
    }
`;



export const HomePage = () => {

  const [scienceCategoryData, setScienceCategoryData] = useState([]);
  const [fictionCategoryData, setFictionCategoryData] = useState(fictionCategoryItems);
  const [engineeringCategoryData, setEngineeringCategoryData] = useState(engineeringCategoryItems);
  const [economicsCategoryData, setEconomicsCategoryData] = useState(economicsCategoryItems);
  const [medicalCategoryData, setMedicalCategoryData] = useState(medicalCategoryItems);
  const [philosophyCategoryData, setPhilosophyCategoryData] = useState(philosophyCategoryItems);


  async function getScienceCategoryData() {

    await Axios.get(`https://www.googleapis.com/books/v1/volumes?q=subject:science&filter=paid-ebooks&maxResults=15&key=${API_KEY}`)
      .then((response) => {
        // console.log(response.data.items);
        setScienceCategoryData(response.data.items);
      })
      .catch((error) => {
        console.log(error);
        console.log("Unable to fetch scienceCategoryData");
      });
  };

  async function getFictionCategoryData() {

    await Axios.get(`https://www.googleapis.com/books/v1/volumes?q=subject:fiction&filter=paid-ebooks&maxResults=15&key=${API_KEY}`)
      .then((response) => {
        // console.log(response.data);
        setFictionCategoryData(response.data.items);
      })
      .catch((error) => {
        console.log(error);
        console.log("Unable to fetch fictionCategoryData");
      });
  };

  async function getEngineeringCategoryData() {

    await Axios.get(`https://www.googleapis.com/books/v1/volumes?q=subject:technology&filter=paid-ebooks&maxResults=15&key=${API_KEY}`)
      .then((response) => {
        // console.log(response.data);
        setEngineeringCategoryData(response.data.items);
      })
      .catch((error) => {
        console.log(error);
        console.log("Unable to fetch engineeringCategoryData");
      });
  };

  async function getEconomicsCategoryData() {

    await Axios.get(`https://www.googleapis.com/books/v1/volumes?q=subject:economics&filter=paid-ebooks&maxResults=15&key=${API_KEY}`)
      .then((response) => {
        // console.log(response.data);
        setEconomicsCategoryData(response.data.items);
      })
      .catch((error) => {
        console.log(error);
        console.log("Unable to fetch EconomicsCategoryData");
      });
  };

  async function getMedicalCategoryData() {

    await Axios.get(`https://www.googleapis.com/books/v1/volumes?q=subject:medical&filter=paid-ebooks&maxResults=15&key=${API_KEY}`)
      .then((response) => {
        // console.log(response.data);
        setMedicalCategoryData(response.data.items);
      })
      .catch((error) => {
        console.log(error);
        console.log("Unable to fetch MedicalCategoryData");
      });
  };

  async function getPhilosophyCategoryData() {

    await Axios.get(`https://www.googleapis.com/books/v1/volumes?q=subject:philosophy&filter=paid-ebooks&maxResults=15&key=${API_KEY}`)
      .then((response) => {
        // console.log(response.data);
        setPhilosophyCategoryData(response.data.items);
      })
      .catch((error) => {
        console.log(error);
        console.log("Unable to fetch PhilosophyCategoryData");
      });
  };


  useEffect(() => {
    getScienceCategoryData();
    // getFictionCategoryData();
    // getEngineeringCategoryData();
    // getEconomicsCategoryData();
    // getMedicalCategoryData();
    // getPhilosophyCategoryData();
  }, []);


  return (
    <>
      <Container>

        <Categories />

        <CategoryHeadWraper>
          <h2>Science</h2>
        </CategoryHeadWraper>
        <CarouselContainer
          id="science"
          bookData={scienceCategoryData}
        />

        <CategoryHeadWraper>
          <h2>Fiction</h2>
        </CategoryHeadWraper>
        <CarouselContainer
          id="fiction"
          bookData={fictionCategoryData}
        />

        <CategoryHeadWraper>
          <h2>Philosophy</h2>
        </CategoryHeadWraper>
        <CarouselContainer
          id="philosophy"
          bookData={philosophyCategoryData}
        />

        <CategoryHeadWraper>
          <h2>Engineering</h2>
        </CategoryHeadWraper>
        <CarouselContainer
          id="engineering"
          bookData={engineeringCategoryData}
        />

        <CategoryHeadWraper>
          <h2>Economics</h2>
        </CategoryHeadWraper>
        <CarouselContainer
          id="economics"
          bookData={economicsCategoryData}
        />

        <CategoryHeadWraper>
          <h2>Medical</h2>
        </CategoryHeadWraper>
        <CarouselContainer
          id="medical"
          bookData={medicalCategoryData}
        />

      </Container>
      <FooterSection />
    </>
  );
};