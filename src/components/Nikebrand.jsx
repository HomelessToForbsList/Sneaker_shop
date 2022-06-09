import React from "react"
import Card from "./Card"

function Nikebrand(props) {

  let [NikeItems, setNikeItems] = React.useState([])

  React.useEffect(() => {
    fetch('https://6299d3147b866a90ec437a24.mockapi.io/Nike-sneakers')
      .then((res) => { return res.json() })
      .then((json) => { setNikeItems(json) })
  }, [])

  NikeItems.name = 'Nike'

  return (
    <div className='brand_block'>
      <div className="brand_title">
        <img src='/img/Nike_brandlogo.png' alt=""></img>
      </div>
      <div className="item_list">
        {NikeItems.map(obj =>
          <Card
            key={obj.url}
            brand={NikeItems.name}
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

export default Nikebrand