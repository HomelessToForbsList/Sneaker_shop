import React from "react";
import styles from '../styles/Header.module.css'
import { Link } from "react-router-dom";

function Header() {

  let [value, setValue] = React.useState('')

  function inputValue(e) {
    setValue(e)
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
          </div>
          <div className={styles.account} >
            <a href='#'><img src={'img/Icons/Account.svg'} alt='acc'></img></a>
          </div>
          <div className={styles.search}>
            <a href='#'><img src={'img/Icons/Search.svg'} alt='srch'></img></a>
          </div>
          <input type={'text'} value={value} onChange={(e) => inputValue(e.target.value)} placeholder="Search..."></input>
        </div>
      </header>
      <div className={styles.image_store}></div>
    </div>
  )
}

export default Header