"use client"
import styles from './hero.module.scss'
import Button from "../button";
import { IconStar } from '../icons';

const Hero = () => {
  return (
    <header className={styles.hero}>
      <div className="container">
        <h1 className={styles.hero__title}>Travel Bookings</h1>
        <h2 className={styles.hero__subtitle}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi nesciunt, hic tempore, voluptates iusto ex incidunt nobis minus doloremque... </h2>
        <div className={styles.hero__features}>
          <div className={styles.hero__features_stars}>
            <IconStar size={16} color="#ffb900" />
            <IconStar size={16} color="#ffb900" />
            <IconStar size={16} color="#ffb900" />
            <IconStar size={16} color="#ffb900" />
            <IconStar size={16} color="#bdbdbd" />
          </div>
          <div className={styles.hero__features_texts}>
            <p className={styles.hero__features_text}><strong>4.7</strong> Stars</p>
            <p className={styles.hero__features_text}><strong>3.91M</strong> Reviews</p>
            <p className={styles.hero__features_text}><strong>500M+</strong> Downloads</p>
          </div>
        </div>
        <div className={styles.hero__button}>
          <Button color="alternative" size={"large"} text="Download App" />
        </div>
        <div className={styles.hero__iconscroll}></div>
      </div>
    </header>
  )
}

export default Hero