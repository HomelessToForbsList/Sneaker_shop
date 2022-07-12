import React from "react";
import styles from '../styles/CardItem.module.css'
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import { fetchItem } from '../store/itemsSlice'
import { addToCart, error } from '../store/accountSlice'

import Loading from "./Loading";
import ErrorPage from "./ErrorPage";





function CardItem() {

  const dispatcher = useDispatch()

  let { brand, title } = useParams()
  let itemTitle = title.split('_').join(' ')

  const selecteditem = useSelector(state => state.items.selectedItem)
  const id = useSelector(state => state.account.myAccount._id)
  const isLoggedIn = useSelector(state => state.account.status)
  const err = useSelector(state=>state.account.error)

  React.useEffect(() => {
    dispatcher(fetchItem(itemTitle))
  }, [])

  let [count, setCount] = React.useState(0)
  let [selecdedSize, setSelectedSize] = React.useState(null)
  let [active, setActive] = React.useState(null)

  const onClickNext = () => {
    setCount(++count)
    if (count >= selecteditem.data.img.length) setCount(0)
  }

  const onClickPrev = () => {
    setCount(--count)
    if(count < 0) setCount(selecteditem.data.img.length-1)
  }

  const onSizeClick = (value)=>{
    setSelectedSize(value)
    setActive(value)
  }

  const onAddToCart = () => {

    if (isLoggedIn !== 'loggedIn'){dispatcher(error('To add an item to your shopping cart, please register.'))}
    if (!selecdedSize){dispatcher(error('Please, select size'))}
    else{
    dispatcher(addToCart({
      accountId: id,
      itemId: selecteditem.data._id,
      color: selecteditem.data.color,
      size: selecdedSize
    }))
  }
  }


  if (selecteditem.status !== 'fulfield') { return <Loading /> }
  else return (
    <div>
      {err && <ErrorPage info={err}/>}
      {[selecteditem.data].map(obj =>
        <div className={styles.carditem_block} key={obj.url}>
          <div className={styles.carditem_img}>
            <div className={styles.img_block} >
              <img src={selecteditem.data.img[count]} alt='' key={selecteditem.data.img[count]}></img>
            </div>
            <div className={styles.btn_next} onClick={onClickNext}><p></p></div>
            <div className={styles.btn_prev} onClick={onClickPrev}><p></p></div>
          </div>
          <div className={styles.carditem_content}>
            <div className={styles.sneaker_title}>{obj.title}</div>
            <div className={styles.sneaker_color}>{obj.color}</div>
            <div className={styles.sneaker_description}>
              <p>Size: </p>
            <div className={styles.size_block}>
            {obj.sizeavailable.map((value) =>
              <div className={active === value ? styles.active_size: styles.size} onClick={()=>{onSizeClick(value)}} key={value}>
                <p>{value}</p>
              </div>
            )}
            </div>
            </div>
            <div className={styles.sneaker_price}>{obj.onsale ? ('Price on sale: ' + obj.onsale.salePrice) : obj.price} EUR</div>
            <button className={styles.btn_Add} onClick={onAddToCart} >Add To Cart</button>
          </div>
        </div>
      )}
    </div>
  )
}



export default CardItem
