import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import './styles/App.css'
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
        <div className='header_wrapper'>
          <header>
            <div className='country_container'>
              <div className='country hov_red'>
                <a href='#'><img width={37} height={37} src={'/img/Icons/Country.svg'} alt='country' ></img></a>
                <div className='coutry_text'>UA</div>
              </div>
            </div>
            <div className='logo'>
              <Link to='/'><img src={'/img/Icons/LOGO.svg'} alt='logo'></img></Link>
            </div>
            <div className='header_menu'>
              <div className='cart hov_red'>
                <Link to='/Cart'><img src={'img/Icons/Cart.svg'} alt='cart'></img></Link>
              </div>
              <div className='account hov_red'>
                <a href='#'><img src={'img/Icons/Account.svg'} alt='acc'></img></a>
              </div>
              <div className='search hov_red'>
                <a href='#'><img src={'img/Icons/Search.svg'} alt='srch'></img></a>
              </div>
              <input type={'text'} placeholder="Search..."></input>
            </div>
          </header>
          <div className='image_store'></div>
        </div>
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
          <Route path='/Cart' element={<Cart/>}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
