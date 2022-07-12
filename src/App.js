import React from 'react';
import { Route, Routes, } from 'react-router-dom';

import {useSelector,useDispatch } from 'react-redux'
import { fetchLatestItems } from './store/itemsSlice';
import {fetchBrands} from './store/brandSlice'

import './styles/App.css'
import Loading from './components/Loading';
import Header from './components/Header';
import HomePage from './components/HomePage.jsx'
import CategoryItemsPage from './components/CategoryItemsPage.jsx'
import Brand from './components/Brand';
import CardItem from './components/CardItem';
import Cart from './components/Cart';
import MyAccount from './components/MyAccount';
import RegistrationForm from './components/RegistrationForm';
import SearchBlock from './components/SerchBlock';



function App() {

  const cart = useSelector(state => state.account.myAccount.cart)
  const brands = useSelector(state=>state.brands.brands)
  const latest = useSelector(state => state.items.latest.list)

  const dispatcher = useDispatch()


  React.useEffect(() => {
    dispatcher(fetchLatestItems());
    dispatcher(fetchBrands())
  }, [])


  // const additems = () => {
  //   const brand = brandItems.filter(item => item.title == 'Asics')
  //   const item = brand[0].items[7]
  //   axios({
  //     method: "POST",
  //     url: 'http://localhost:3002/add-item',
  //     data: {
  //       title: item.title,
  //       color: item.color,
  //       url: item.url,
  //       gender: item.gender,
  //       price: item.price,
  //       onsale: item.onsale,
  //       sizeavailable: item.sizeAviable,
  //       img: item.img
  //     }
  //   })
  //     .then(res => console.log(res))
  // }

  console.log('latest: ',latest)


  if (!true)
    return (<Loading/>)
  else return (
    <div className="App">
      <div className='wrapper' >
        <SearchBlock/>
        <Header />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/:category' element={<CategoryItemsPage/>}></Route>
          {brands.map((obj) =>
            <Route path={obj.url} element={<Brand item={obj} key={obj._id}/>}></Route>
          )}
          <Route path='/:brand/:title' element={<CardItem/>}></Route>
          <Route path='/Cart' element={<Cart items={cart}/>}></Route>
          <Route path='/Account' element={<MyAccount/>}></Route>
          <Route path='/Registration' element={<RegistrationForm />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
