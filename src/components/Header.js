import React from "react";
import styles from '../styles/Header.module.css'
import { Link } from "react-router-dom";

function Header(props) {

  let [value, setValue] = React.useState('')
  let [searchItems, setSearchItems] = React.useState(null)
  let [position, setPosition] = React.useState(-500)
  let [visibility, setVisibility] = React.useState(0)

  function inputValue(e) {
    setValue(e)
  }

  function searchItem(arr, value) {
    value = value.replace(/\s/g, '').toLowerCase()
    let result = []
    arr.forEach(el => {
      let array = el.items
      for (let i = 0; i < array.length; i++) {
        let name = array[i].title.toLowerCase().split('').join('').replace(/\s/g, '')
        if (name.indexOf(value) >= 0) { result.push(array[i]) }
      }
    })
    setSearchItems(result)
  }

  function crearInput() {
    setValue('')
  }

  function showSearch() {
    setPosition(0);
    setVisibility(0.95)
  }

  function hideSearch() {
    setPosition(-500);
    setVisibility(0)
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
            <Link to='/Account'><img src={'img/Icons/Account.svg'} alt='acc'></img></Link>
          </div>
          <div className={styles.search}>
            <div><img src={'img/Icons/Search.svg'} alt='srch' onClick={showSearch} ></img></div>
          </div>
        </div>
        <div className={styles.search_block} style={{ top: position, opacity: visibility }}>
          <div className={styles.search_content}>
            <input type={'text'} value={value} onChange={(e) => { inputValue(e.target.value); searchItem(props.items, value) }} onBlur={crearInput} placeholder="Search..."></input>
            <div>{
              searchItems &&
              searchItems.map(item =>
                <Link to={item.url}><div className={styles.link_to_item} onClick={hideSearch}>{item.title}</div></Link>
              )}
            </div>
            <div className={styles.close_btn} onClick={hideSearch}></div>
          </div>
        </div>
      </header>
      <div className={styles.image_store}></div>
    </div>
  )
}

export default Header