import { Navbar } from './Components/Navbar';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import { FooterSection } from './Components/FooterSection';
import { BookSearchPage } from './Components/Pages/BookSearchPage';
import { MyCartPage } from './Components/Pages/MyCartPage';
import { HomePage } from './Components/Pages/HomePage';
import { useState } from 'react';
import { createContext } from 'react';

function App() {

  const [cart, setCart] = useState([]);

  return (

    <GlobalStateContext.Provider value={{cart, setCart}}>
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
    </GlobalStateContext.Provider>
  );
}

export default App;
export const GlobalStateContext = createContext();
export const  API_KEY = "AIzaSyDnjxV0J2xUBLBAejecvQwUrxKZSDWWbfE";