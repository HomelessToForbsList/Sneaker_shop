import React from "react"
import Card from "./Card"
import styles from '../styles/BrandBlock.module.css'

function Asicsbrand() {

  let [AsicsItems, setAsicsItems] = React.useState([])

  React.useEffect(() => {
    fetch('https://6299d3147b866a90ec437a24.mockapi.io/Asics-sneakers')
      .then((res) => { return res.json() })
      .then((json) => { setAsicsItems(json) })
  }, [])

  AsicsItems.name = 'Asics'

  return (
    <div className={styles.brand_block}>
      <div className={styles.brand_title}>
        <img src='/img/Asics_brandlogo.png' alt=""></img>
      </div>
      <div className={styles.item_list}>
        {AsicsItems.map(obj =>
          <Card
            key={obj.title}
            brand={AsicsItems.name}
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

export default Asicsbrand