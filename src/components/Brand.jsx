import React from "react"
import styles from '../styles/BrandBlock.module.css'
import Card from "./Card"
import {useSelector,useDispatch } from 'react-redux'
import { fetchBrandItems } from "../store/itemsSlice"
import Loading from './Loading'

function Brand(props){

  const brandItems = useSelector(state => state.items.brandItems)

  const dispatcher = useDispatch()

  React.useEffect(()=>{
    dispatcher(fetchBrandItems(props.item.title))
  },[])
  
  let url = `/img/${props.item.title}_brandlogo.png`


  if (brandItems.status !== 'fulfield') { return <Loading /> }
  return(
    <div className={styles.brand_block}>
    <div className={styles.brand_title}>
      <img src={url} alt=""></img>
    </div>
    <div className={styles.item_list}>
      {brandItems.list.map(obj =>
        <Card
          key={obj.url}
          brand={props.item.title}
          title={obj.title}
          color={obj.color}
          bgImage={obj.img[0]}
          price={obj.price}
          url={obj.url}
          onsale={obj.onsale}
        />
      )}
    </div>
    <div className={styles.brand_page_scroll}>
      1 of 1
    </div>
  </div>
  )
}

export default Brand