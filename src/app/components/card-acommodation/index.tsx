import Image from 'next/image'
import styles from './card-acommodation.module.scss'
import Button from '../button'
import { IconLocation, IconSea, IconStar } from '../icons'

const CardAcommodation = () => {
  return (
    <article className={styles.cardAcommodation} data-type='carrusel-acommodation'>
      <header className={styles.cardAcommodation__header}>
        <div className={styles.cardAcommodation__stars}>
          <IconStar size={16} color="#ffb900" />
          <IconStar size={16} color="#ffb900" />
          <IconStar size={16} color="#ffb900" />
          <IconStar size={16} color="#ffb900" />
        </div>
        <Image src="/hero-1.jpg" alt="hero" width={200} height={250} />
      </header>
      <div className={styles.cardAcommodation__content}>
        <h3 className={styles.cardAcommodation__title}>San Andres 1</h3>
        <p className={styles.cardAcommodation__location}>
          <span><IconLocation size={12} /> 2,1 km del centro</span> 
          <span><IconSea size={16} /> A 350 m de la playa</span>
        </p>
        <p className={styles.cardAcommodation__description}>
          San Andres, Costa Rica
        </p>
        <Button color="primary" size="medium" icon='/icons/arrow-right.svg' text="Elegir Alojamiento" />
      </div>
    </article>
  )
}

export default CardAcommodation