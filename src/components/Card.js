import React from "react";
import styles from '../styles/Card.module.css'
import { Link } from "react-router-dom";

function Card(props) {
  return (
    <Link to={`${props.url}`}>
      <div className={styles.item} style={{
        backgroundImage: `url(${props.bgImage})`,
        backgrounRepeat: "no-repeat",
        backgroundSize: '100%'
      }}>
        <p className={styles.item_title}>{props.title}</p>
        <p className={styles.item_color}>{props.color}</p>
        <p className={styles.item_price}>{props.price} EUR</p>
      </div>
    </Link>
  )
}

export default Card