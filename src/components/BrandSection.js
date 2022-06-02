import React from "react";

function BrandSection(props) {
  return (
    <div className="brand_section" style={{
      backgroundImage: `url(${props.bgImage})`,
      backgrounRepeat: "no-repeat",
      backgroundSize: 'auto'
    }}>
      <a href="#">
        <img width={props.logoSize[0]} height={props.logoSize[1]} src={props.logo} alt='brandlogo'></img>
      </a>
    </div>

  )
}

export default BrandSection