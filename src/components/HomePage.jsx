import styles from '../styles/HomePage.module.css'
import TopSaleCard from './TopSaleCard.js'
import TopSaleSneaker from './TopSaleSneaker.js'
import BrandSection from './BrandSection';

function HomePage(props) {
  return (
    <div className={styles.home_page}>
      <div className={styles.scroll_page}>
      <div className={styles.menu}>
        <a href='#'>Men</a>
        <a href='#'>Woman</a>
        <a href='#'>Kids</a>
        <a href='#'>Sale</a>
      </div>
      <div className={styles.run}>
        <img className={styles.run_img} src='/img/Head_image_2.jpg'></img>
      </div>
      <div className={styles.top_sale}>
        {
          TopSaleSneaker.map((obj) =>
            <TopSaleCard
              key = {obj.title}
              title={obj.title}
              color={obj.color}
              price={obj.price}
              imgURL={obj.imgURL[0]}
            />)
        }
      </div>
      <div className={styles.top_brands}>
        {props.items.map((obj) =>
          <BrandSection
            key = {obj.url}
            logo={obj.logo}
            logoSize={obj.logoSize}
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