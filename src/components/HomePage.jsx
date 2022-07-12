import styles from '../styles/HomePage.module.css'
import Card from './Card';
import BrandSection from './BrandSection';
import { Link } from 'react-router-dom';
import {useSelector} from 'react-redux'

function HomePage() {

  const brands = useSelector(state => state.brands.brands)
  const latest = useSelector(state => state.items.latest.list)

  return (
    <div className={styles.home_page}>
      <div className={styles.scroll_page}>
      <div className={styles.menu}>
        <Link to='/Men'>Men</Link>
        <Link to='/Women'>Woman</Link>
        <Link to='/Kids'>Kids</Link>
        <Link to='/Sale'>Sale</Link>
      </div>
      <div className={styles.run}>
        <img className={styles.run_img} src='/img/Head_image_2.jpg'></img>
      </div>
      <div className={styles.top_sale}>
        {
          latest.map((obj) =>
            <Card
              key = {obj.title}
              title={obj.title}
              price={obj.price}
              url={obj.url}
              onsale={obj.onsale}
              color={obj.color}
              bgImage={obj.img[0]}
            />)
        }
      </div>
      <div className={styles.top_brands}>
        {brands.map((obj) =>
          <BrandSection
            key = {obj.url}
            logo={obj.logo}
            logoSize={obj.logosize}
            bgImage={obj.backgroundImg}
            url={obj.url}
          />)}
      </div>
    </div>
    <footer>
    <div className={styles.subscribe_block}>
      <p>
        Hey you! Don't forget to subscribe to our newsletter for the latest editorial articles, offers, and special releases!
      </p>
      <a href='#'>
        <div className={styles.subscribe_button}>
          <span>Sign Up for Newsletter</span>
        </div>
      </a>
    </div>
    <div className={styles.info_block}>
      <div className={styles.block_information}>
        <h3>INFORMATION</h3>
        <ul>
          <li><a href='#'>Sneaker Archive</a></li>
          <li><a href='#'>Release calendar</a></li>
          <li><a href='#'>Release archive</a></li>
          <li><a href='#'>Terms of service</a></li>
        </ul>
      </div>
      <div className={styles.block_information}>
        <h3>SERVICE</h3>
        <ul>
          <li><a href='#'>Help center / FAQ</a></li>
          <li><a href='#'>Instore pickup</a></li>
          <li><a href='#'>Privacy Policy</a></li>
          <li><a href='#'>Cookie-Settings</a></li>
        </ul>
      </div>
      <div className={styles.block_information}>
        <h3>CONTACT</h3>
        <ul>
          <li><a href='#'>Facebook</a></li>
          <li><a href='#'>Twitter</a></li>
          <li><a href='#'>Snapchat</a></li>
          <li><a href='#'>Instagram</a></li>
        </ul>
      </div>
      <div className={styles.block_information}>
        <h3>DELIVERY</h3>
        <ul>
          <li><a href='#'>Returning goods</a></li>
          <li><a href='#'>Payment methods</a></li>
          <li><a href='#'>Shipping polycy</a></li>
          <li><a href='#'>Refund polycy</a></li>
        </ul>
      </div>
    </div>
  </footer>
    </div>
  )
}

export default HomePage