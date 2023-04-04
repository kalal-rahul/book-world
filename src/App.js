import { Navbar } from './Components/Navbar';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import { ColumnFlexContainer, Container, LinkText, RowFlexContainer } from './Components/Styles/GlobalStyle';
import BookCard from './Components/BookCard';
import CarouselContainer from './Components/CarouselContainer';
import { Categories } from './Components/Categories';
import NorthIcon from '@mui/icons-material/North';
import * as Scroll from 'react-scroll';
import styled from 'styled-components';
import { FooterSection } from './Components/FooterSection';
import { BookDetailsModal } from './Components/BookDetailsModal';
import { BookSearchPage } from './Components/Pages/BookSearchPage';
import { MyCartPage } from './Components/Pages/MyCartPage';
import { HomePage } from './Components/Pages/HomePage';

function App() {

  return (

    <>
      <Router>
      <Navbar />
        <Routes>
          <Route
            path='/bookSearch'
            element={<BookSearchPage />}
          />

          <Route
            path='/myCart'
            element={<MyCartPage />}
          />

          <Route
            path='/'
            element={<HomePage />}
          />
        </Routes>
      </Router>
      <FooterSection />
    </>
  );
}

export default App;
