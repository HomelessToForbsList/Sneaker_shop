import React from "react";
import { Link } from "react-router-dom";

function Card(props) {
  return (
    <Link to={`/${props.brand}/${props.url}`}>
      <div className="item" style={{
        backgroundImage: `url(${props.bgImage})`,
        backgrounRepeat: "no-repeat",
        backgroundSize: '100%'
      }}>
        <p className="item_title">{props.title}</p>
        <p className="item_color">{props.color}</p>
        <p className="item_price">{props.price} EUR</p>
      </div>
    </Link>
  )
}

export default Card