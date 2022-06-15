import React from "react"
import styles from '../styles/BrandBlock.module.css'
import Card from "./Card"

function Brand(props){

  let url = `/img/${props.item.title}_brandlogo.png`



  return(
    <div className={styles.brand_block}>
    <div className={styles.brand_title}>
      <img src={url} alt=""></img>
    </div>
    <div className={styles.item_list}>
      {props.item.items.map(obj =>
        <Card
          key={obj.url}
          brand={props.item.title}
          title={obj.title}
          color={obj.color}
          bgImage={obj.img[0]}
          price={obj.price}
          url={obj.url}
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