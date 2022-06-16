import React from 'react';
import { Route, Routes, } from 'react-router-dom';
import './styles/App.css'
import Header from './components/Header';
import HomePage from './components/HomePage.jsx'
import Brand from './components/Brand';
import CardItem from './components/CardItem';
import Cart from './components/Cart';
import MyAccount from './components/MyAccount';
import RegistrationForm from './components/RegistrationForm';
import axios from 'axios';






function App() {

  let [brandItems, setBrandItems] = React.useState([])

  let [myAccount, setMyAccount] = React.useState({})

  React.useEffect(() => {
    axios.get('http://localhost:3001/MyAccount')
      .then((res) => {
        if (res.data.length > 0) setMyAccount(res.data[0])
        else setMyAccount({})
      })
  }, [])

  React.useEffect(() => {
    axios.get('http://localhost:3001/ItemsList')
      .then((res) => { setBrandItems(res.data) })
  }, [])


  if (brandItems.length === 0)
    return (
      <div className='loading'>
        <img src='/img/loading.gif' alt='loading'></img>
      </div>)
  else return (
    <div className="App">
      <div className='wrapper' >
        <Header items={brandItems} />
        <Routes>
          <Route path='/' element={<HomePage items={brandItems} />} />
          {brandItems.map((obj, index) =>
            <Route path={obj.url} element={<Brand item={obj} key={obj.title} />}></Route>
          )}
          <Route path='/:brand/:title' element={<CardItem items={brandItems} mycart={myAccount.Cart} />}></Route>
          <Route path='/Cart' element={<Cart mycart={myAccount.Cart} />}></Route>
          <Route path='/Account' element={<MyAccount myaccount={myAccount} />}></Route>
          <Route path='/Registration' element={<RegistrationForm />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
