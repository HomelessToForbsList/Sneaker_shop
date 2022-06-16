import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
import styles from '../styles/Cart.module.css'



function Cart() {

  const navigate = useNavigate()

  let [cartItems, setCartItems] = React.useState([])

  React.useEffect(() => {
    axios.get('http://localhost:3001/MyAccount/1')
      .then((res) => { setCartItems(res.data.Cart) })
  }, [])

  const Remove_item = (title) =>{
    setCartItems(cartItems = cartItems.filter((el) => (el.title !== title)))
    axios({
        method: 'PATCH',
        url: 'http://localhost:3001/MyAccount/1',
        data: {
          Cart: cartItems
        }
      })
      .then(() =>
      axios.get('http://localhost:3001/MyAccount/1')
      .then((res) => { setCartItems(res.data.Cart) }))
  }


  if (cartItems.length === 0) return (
    <div className={styles.cart_wrapper}>
      <div className={styles.empty_cart}>Cart is empty...</div>
      <div className={styles.close_cart}>
        <img src='/img/Close_btn.svg' alt='x' onClick={() => navigate(-1)}></img>
      </div>
    </div>
  )
  else return (
    <div className={styles.cart_wrapper}>
      <div className={styles.cart_items}>
        {cartItems.map(obj =>
          <div className={styles.cart_item} key={obj.url}>
            <img src={obj.img[0]} alt='img'></img>
            <p className={styles.title}>{obj.title}</p>
            <p className={styles.color}>color: {obj.color}</p>
            <p className={styles.size}>size: {obj.size[0]}</p>
            <div className={styles.remove_btn} onClick={() => Remove_item(obj.title)}>
              <span>Remove</span>
            </div>
          </div>)}
      </div>
      <div className={styles.cart_content}>
      </div>
      <div className={styles.close_cart}>
        <img src='/img/Close_btn.svg' alt='x' onClick={() => navigate(-1)}></img>
      </div>
    </div>
  )
}
export default Cart