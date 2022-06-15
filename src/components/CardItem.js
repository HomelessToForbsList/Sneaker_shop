import React from "react";
import styles from '../styles/CardItem.module.css'
import { useParams } from "react-router-dom";
import axios from "axios";




function CardItem(props) {

  let { brand, title } = useParams()

  let [BrandItem, setBrandItem] = React.useState([])
  let [pos, setPos] = React.useState(0)
  let [ArrImg, setArrImg] = React.useState([])

  let itemTitle = title.split('_').join(' ').toLowerCase()
  let item = props.items.filter(el => el.title === brand)[0].items.filter(el => el.title.toLowerCase() === itemTitle)

  React.useEffect(() => {
    setBrandItem(item);
    setArrImg(item[0].img)
  }, [])

  const move = {
    marginLeft: pos,
  }
  const onClickNext = () => {
    setPos(pos - 740)
    if (pos < -(ArrImg.length - 2) * 740) { setPos(pos = 0) }
  }

  const onClickPrev = () => {
    setPos(pos + 740)
    if (pos >= 0) { setPos(pos = -(ArrImg.length - 1) * 740) }
  }

  const onAddToCart = () => {

    // axios.put('https://629f5305461f8173e4e6f83a.mockapi.io/MyAccount/1',{
    //   new_cart:
    //   {
    //     title: BrandItem[0].title,
    //     img: BrandItem[0].img,
    //     price: BrandItem[0].price,
    //     color: BrandItem[0].color,
    //     size: BrandItem[0].sizeAviable,
    //     url: BrandItem[0].url,
    //       }
    // })
    axios({
      method: "POST",
      url: 'https://629f5305461f8173e4e6f83a.mockapi.io/Cart',
      data:{
        title: BrandItem[0].title,
        img: BrandItem[0].img,
        price: BrandItem[0].price,
        color: BrandItem[0].color,
        size: BrandItem[0].sizeAviable,
        url: BrandItem[0].url,
      }
    })
  }

  return (
    <div>
      {BrandItem.map(obj =>
        <div className={styles.carditem_block} key={obj.url}>
          <div className={styles.carditem_img}>
            <div className={styles.img_block} style={move}>{obj.img.map(url => <img src={url} alt='' key={url}></img>)}</div>
            <div className={styles.btn_next} onClick={onClickNext}><p></p></div>
            <div className={styles.btn_prev} onClick={onClickPrev}><p></p></div>
          </div>
          <div className={styles.carditem_content}>
            <div className={styles.sneaker_title}>{obj.title}</div>
            <div className={styles.sneaker_color}>{obj.color}</div>
            <div className={styles.sneaker_description}>Size:
              {obj.sizeAviable.map(value => <li key={value}>{value}</li>)}
            </div>
            <div className={styles.sneaker_price}>{obj.price} EUR</div>
            <div className={styles.btn_Add} onClick={onAddToCart}>Add To Cart</div>
          </div>
        </div>
      )}
    </div>
  )
}


export default CardItem
