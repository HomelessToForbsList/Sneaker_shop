import React from 'react';
import styles from '../styles/TopSaleCard.module.css'


function TopSaleCard(props) {
  return (
    <a href='#'>
      <div className={styles.top_sale_card}>
        <p>{props.title}</p>
        <p>{props.color}</p>
        <img src={props.imgURL} alt='asics' ></img>
        <p>{props.price} EUR</p>
      </div>
    </a>
  )
}
export default TopSaleCard

