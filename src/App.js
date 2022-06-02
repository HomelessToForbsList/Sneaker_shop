import React from 'react';
import './styles/App.css'
import TopSaleCard from './components/TopSaleCard.js'
import TopSaleSneaker from './TopSaleSneaker.js'
import TopBrands from "./TopBrands"
import BrandSection from './components/BrandSection';


function App() {
  return (
    <div className="App">
      <div className='wrapper' >
        <div className='scroll_page'>
          <div className='header_wrapper'>
            <header>
              <div className='country_container'>
                <div className='country hov_red'>
                  <a href='#'><img width={37} height={37} src={'/img/Icons/Country.svg'} alt='country' ></img></a>
                  <div className='coutry_text'>UA</div>
                </div>
              </div>
              <div className='logo'>
                <a href='#'><img src={'/img/Icons/LOGO.svg'} alt='logo'></img></a>
              </div>
              <div className='header_menu'>
                <div className='cart hov_red'>
                  <a href='#'><img src={'img/Icons/Cart.svg'} alt='cart'></img></a>
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
          <div className='menu'>
            <a href='#'>Men</a>
            <a href='#'>Woman</a>
            <a href='#'>Kids</a>
            <a href='#'>Sale</a>
          </div>
          <div className='run'></div>
          <div className='top_sale'>
            {
              TopSaleSneaker.map((obj) =>
                <TopSaleCard
                  title={obj.title}
                  color={obj.color}
                  price={obj.price}
                  imgURL={obj.imgURL[0]}
                />)
            }
          </div>
          <div className='top_brands'>
            {TopBrands.map((obj) =>
              <BrandSection
                logo={obj.logo}
                logoSize={obj.logoSize}
                bgImage={obj.backgroundImg}
              />)}
          </div>
        </div>
        <footer>
          <div className='subscribe_block'>
            <p>
              Hey you! Don't forget to subscribe to our newsletter for the latest editorial articles, offers, and special releases!
            </p>
            <a href='#'>
              <div className='subscribe_button hov_red'>
                <span>Sign Up for Newsletter</span>
              </div>
            </a>
          </div>
          <div className='info_block'>
            <div className='block_information'>
              <h3>INFORMATION</h3>
              <ul>
                <li><a href='#'>Sneaker Archive</a></li>
                <li><a href='#'>Release calendar</a></li>
                <li><a href='#'>Release archive</a></li>
                <li><a href='#'>Terms of service</a></li>
              </ul>
            </div>
            <div className='block_information'>
              <h3>SERVICE</h3>
              <ul>
                <li><a href='#'>Help center / FAQ</a></li>
                <li><a href='#'>Instore pickup</a></li>
                <li><a href='#'>Privacy Policy</a></li>
                <li><a href='#'>Cookie-Settings</a></li>
              </ul>
            </div>
            <div className='block_information'>
              <h3>CONTACT</h3>
              <ul>
                <li><a href='#'>Facebook</a></li>
                <li><a href='#'>Twitter</a></li>
                <li><a href='#'>Snapchat</a></li>
                <li><a href='#'>Instagram</a></li>
              </ul>
            </div>
            <div className='block_information'>
              <h3>DELIVERY</h3>
              <ul>
                <li><a href='#'>Returning goods</a></li>
                <li><a href='#'>Payment methods</a></li>
                <li><a href='#'>Shipping polycy</a></li>
                <li><a href='#'>Refund polycy</a></li>
                <a href='#'>qwerty</a>
              </ul>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
