import React from "react";
import { Link } from "react-router-dom";

function BrandSection(props) {
  return (
    <div className="brand_section">
      <div className="brand_bg" style={{
      backgroundImage: `url(${props.bgImage})`,
      backgrounRepeat: "no-repeat",
    }}>
      <Link to={props.url}>
        <img width={props.logoSize[0]} height={props.logoSize[1]} src={props.logo} alt='brandlogo'></img>
      </Link>
    </div>
    </div>

  )
}

export default BrandSection