import React from "react"
import Card from "./Card"

function Pumabrand(props) {

  let [PumaItems, setPumaItems] = React.useState([])

  React.useEffect(() => {
    fetch('https://6299d3147b866a90ec437a24.mockapi.io/Puma-sneakers')
      .then((res) => { return res.json() })
      .then((json) => { setPumaItems(json) })
  }, [])

  PumaItems.name = 'Puma'

  return (
    <div className='brand_block'>
      <div className="brand_title">
        <img src='/img/Puma_brandlogo.png' alt=""></img>
      </div>
      <div className="item_list">
        {PumaItems.map(obj =>
          <Card
            key={obj.url}
            brand={PumaItems.name}
            title={obj.title}
            color={obj.color}
            bgImage={obj.img[0]}
            price={obj.price}
            url = {obj.url}
          />
        )}
      </div>
      <div className='brand_page_scroll'>
        1 of 1
      </div>
    </div>
  )
}

export default Pumabrand