import React, { useEffect } from "react";
import styles from '../styles/Header.module.css'
import { Link } from "react-router-dom";
import {useSelector, useDispatch} from 'react-redux'
import {showSearchBlock} from '../store/searchSlice'

function Header() {

  const dispatcher = useDispatch()

  const cart = useSelector(state => state.account.myAccount.cart)
  const isLoggedIn = useSelector(state => state.account.status)

  let [cartCounter, setCartCounter] = React.useState(0)

  useEffect(()=>{
    setCartCounter(cart.length)
  })

  function showSearch() {
    dispatcher(showSearchBlock())
  }


  return (
    <div className={styles.header_wrapper}>
      <header>
        <div className={styles.country_container}>
          <div className={styles.country}>
            <a href='#'><img width={37} height={37} src={'/img/Icons/Country.svg'} alt='country' ></img></a>
            <div className={styles.coutry_text}>UA</div>
          </div>
        </div>
        <div className={styles.logo}>
          <Link to='/'><img src={'/img/Icons/LOGO.svg'} alt='logo'></img></Link>
        </div>
        <div className={styles.header_menu}>
          <div className={styles.cart}>
            <Link to='/Cart'><img src={'img/Icons/Cart.svg'} alt='cart'></img></Link>
            {(cartCounter !== 0) && <div className={styles.cartcounter}><p>{cartCounter}</p></div>}
          </div>
          <div className={styles.account} >
            <Link to='/Account'><img src={'img/Icons/Account.svg'} alt='acc'></img></Link>
            {(isLoggedIn === 'loggedIn') && <div className={styles.login}></div>}
          </div>
          <div className={styles.search}>
            <div><img src={'img/Icons/Search.svg'} alt='srch' onClick={showSearch} ></img></div>
          </div>
        </div>
      </header>
      <div className={styles.image_store}>
        <img src={'/img/Icons/STORE.svg'} alt='logo'></img>
        </div>
    </div>
  )
}

export default Header