import React from "react";
import styles from '../styles/Card.module.css'
import { Link } from "react-router-dom";

function Card(props) {


  return (
    <Link to={`${props.url}`}>
      <div className={styles.item}>
        <p className={styles.item_title}>{props.title}</p>
        <p className={styles.item_color}>{props.color}</p>
        <div className={styles.img_block}>
        <img src={props.bgImage}></img>
        </div>
        {props.onsale.salePrice ?
        <p className={styles.item_sale_price}>{props.onsale.salePrice} EUR</p>
        : <p className={styles.item_price}>{props.price} EUR</p>}
        {props.onsale.discount && <p className={styles.discount}>SALE -{props.onsale.discount}</p>}
      </div>
    </Link>
  )
}

export default Card