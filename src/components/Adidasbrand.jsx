import React from "react"
import Card from "./Card"
import styles from '../styles/BrandBlock.module.css'

function Adidasbrand(props) {

  let [AdidasItems, setAdidasItems] = React.useState([])

  React.useEffect(() => {
    fetch('https://6299d3147b866a90ec437a24.mockapi.io/Adidas-sneakers')
      .then((res) => { return res.json() })
      .then((json) => { setAdidasItems(json) })
  }, [])

  AdidasItems.name = 'Adidas'

  return (
    <div className={styles.brand_block}>
      <div className={styles.brand_title}>
        <img src='/img/Adidas_brandlogo.png' alt=""></img>
      </div>
      <div className={styles.item_list}>
        {AdidasItems.map(obj =>
          <Card
            key={obj.url}
            brand={AdidasItems.name}
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

export default Adidasbrand