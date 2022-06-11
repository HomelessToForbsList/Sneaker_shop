import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import './styles/App.css'
import Header from './components/Header';
import HomePage from './components/HomePage.jsx'
import Asicsbrand from './components/Asicsbrand';
import Adidasbrand from './components/Adidasbrand';
import Pumabrand from './components/Pumabrand';
import Nikebrand from './components/Nikebrand';
import CardItem from './components/CardItem';
import Cart from './components/Cart';




function App() {

  return (
    <div className="App">
      <div className='wrapper' >
        <Header />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/Asics' element={<Asicsbrand />}></Route>
          <Route path='/Adidas' element={<Adidasbrand />}></Route>
          <Route path='/Puma' element={<Pumabrand />}></Route>
          <Route path='/Nike' element={<Nikebrand />}></Route>
          <Route path='/Asics/:title' element={<CardItem />}></Route>
          <Route path='/Puma/:title' element={<CardItem />}></Route>
          <Route path='/Adidas/:title' element={<CardItem />}></Route>
          <Route path='/Nike/:title' element={<CardItem />}></Route>
          <Route path='/Cart' element={<Cart />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
