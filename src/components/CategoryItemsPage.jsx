import React from "react";
import styles from '../styles/CategoryItemsPage.module.css'
import Card from './Card'
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import { fetchCategoryItems } from "../store/itemsSlice"
import Loading from './Loading'

function CategoryPage() {

  const dispatcher = useDispatch()

  const categoryItems = useSelector(state => state.items.categoryItems)

  let { category } = useParams()

  React.useEffect(() => {
    dispatcher(fetchCategoryItems(category))
  }, [])


  if (categoryItems.status !== 'fulfield')
    return (<Loading />)
  else
    return (
      <div className={styles.page_block}>
        <h3>Best sneakers for {category}</h3>
        <div className={styles.content}>
          {categoryItems.list.map(obj =>
            <Card
              key={obj.url}
              title={obj.title}
              color={obj.color}
              bgImage={obj.img[0]}
              price={obj.price}
              url={obj.url}
              onsale={obj.onsale}
            />)}
        </div>
      </div>
    )
}

export default CategoryPage