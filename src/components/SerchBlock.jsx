import React from "react";
import { Link } from "react-router-dom";
import styles from '../styles/SearchBlock.module.css'
import {hideSearchBlock,fetchSearchItem} from '../store/searchSlice'
import { useSelector, useDispatch } from 'react-redux'

function SearchBlock() {

  const dispatcher = useDispatch()

  const position = useSelector(state => state.search.position)
  const visibility = useSelector(state => state.search.visibility)
  const searchItems = useSelector(state => state.search.searchItems)

  function searchItem(e) {
    e.preventDefault();
    dispatcher(fetchSearchItem(e.target.value))
  }

  function hideSearch() {
    dispatcher(hideSearchBlock())
  }
  

  return(
    <div className={styles.search_block} style={{ top: position, opacity: visibility }}>
          <div className={styles.search_content}>
            <input type={'text'}  onChange={(e) => { ; searchItem(e) }}  placeholder="Search..."></input>
            <div>{
              searchItems &&
              searchItems.map(item =>
                <Link to={item.url}><div className={styles.link_to_item} onClick={hideSearch} key={item.url}>{item.title}</div></Link>
              )}
            </div>
            <div className={styles.close_btn} onClick={hideSearch}></div>
          </div>
        </div>
  )
}

export default SearchBlock