import React from "react";
import { useParams } from "react-router-dom";
import axios from "axios";




function CardItem() {

  let { title } = useParams()

  let [BrandItem, setBrandItem] = React.useState([])
  let str = title.slice(0, title.indexOf('_'))
  let [pos, setPos] = React.useState(0)
  let [ArrImg, setArrImg] = React.useState([])

  React.useEffect(() => {
    fetch(`https://6299d3147b866a90ec437a24.mockapi.io/${str}-sneakers/`)
      .then((res) => { return res.json() })
      .then((json) => { let snkr =json.filter((item) => item.url === title); setBrandItem(snkr) ;setArrImg(snkr[0].img) })
  }, [])

  const move = {
    marginLeft: pos,
  }
  const onClickNext = () => {
    setPos(pos-740)
    if(pos < -(ArrImg.length-2)*740) {setPos(pos=0)}
  }

  const onClickPrev = () => {
    setPos(pos+740)
    if(pos >= 0) {setPos(pos=-(ArrImg.length-1)*740)}
  }

  const onAddToCart = () => {
      axios({
      method: "POST",
      url: 'https://629f5305461f8173e4e6f83a.mockapi.io/Cart',
      data: {
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
        <div className="carditem_block" key={obj.url}>
          <div className="carditem_img">
            <div className="img_block" style={move}>{obj.img.map(url => <img src={url} alt='' key={url}></img>)}</div>
            <div className="btn_next" onClick={onClickNext}><p></p></div>
            <div className="btn_prev" onClick={onClickPrev}><p></p></div>
          </div>
          <div className="carditem_content">
            <div className="sneaker_title">{obj.title}</div>
            <div className="sneaker_color">{obj.color}</div>
            <div className="sneaker_description">Size:
              {obj.sizeAviable.map(value => <li key={value}>{value}</li>)}
            </div>
            <div className="sneaker_price">{obj.price} EUR</div>
            <div className="btn_Add" onClick={onAddToCart}>Add To Cart</div>
          </div>
        </div>
      )}
    </div>
  )
}


export default CardItem
