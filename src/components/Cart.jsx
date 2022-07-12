import React from "react";
import { useNavigate } from "react-router-dom";
import styles from '../styles/Cart.module.css'
import { useSelector, useDispatch } from 'react-redux'
import { getCart, removeFromCart } from '../store/accountSlice'
import { editableInputTypes } from "@testing-library/user-event/dist/utils";


function Cart() {

  const dispatcher = useDispatch()

  const accountId = useSelector(state => state.account.myAccount._id)

  const cart = useSelector(state => state.account.myAccount.cart)

  const itemsId = cart.map(obj => obj.itemId)

  const navigate = useNavigate()

  let [cartItems, setCartItems] = React.useState([])

  React.useEffect(() => {
    dispatcher(getCart(itemsId))
      .then(res => setCartItems(res.payload))
  }, [])

  const Remove_item = (itemId) => {
    dispatcher(removeFromCart({ accountId, itemId }))
      .then(res => {
        const itemsId = res.payload.map(obj => obj.itemId)
        dispatcher(getCart(itemsId))
          .then(res => setCartItems(res.payload))
      })
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
        {cart.map(obj =>
          <div className={styles.cart_item} key={obj.itemId}>
            <img src={cartItems.filter(el => el._id === obj.itemId)[0].img[0]} alt='img'></img>
            <p className={styles.title}>{cartItems.filter(el => el._id === obj.itemId)[0].title}</p>
            <p className={styles.color}>color: {obj.color}</p>
            <p className={styles.size}>size: {obj.size}</p>
            <p>Price: {cartItems.filter(el => el._id === obj.itemId)[0].onsale.salePrice || cartItems.filter(el => el._id === obj.itemId)[0].price} EUR</p>
            <div className={styles.remove_btn} onClick={() => Remove_item(obj.itemId)}>
              <span>Remove</span>
            </div>
          </div>)}
      </div>
      <div className={styles.cart_content}>
        <div className={styles.total}>Total: {cartItems.reduce((sum, obj) => { return sum + (obj.onsale.salePrice || obj.price) }, 0)} EUR</div>
      </div>
      <div className={styles.close_cart}>
        <img src='/img/Close_btn.svg' alt='x' onClick={() => navigate(-1)}></img>
      </div>
    </div>
  )
}
export default Cart