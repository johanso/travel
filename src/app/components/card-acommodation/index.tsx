import Image from 'next/image'
import styles from './card-acommodation.module.scss'
import Button from '../button'

const CardAcommodation = () => {
  return (
    <article className={styles.cardAcommodation} data-type='carrusel-acommodation'>
      <header className={styles.cardAcommodation__header}>
        <Image src="/hero-1.jpg" alt="hero" width={200} height={250} />
      </header>
      <div className={styles.cardAcommodation__content}>
        <h3 className={styles.cardAcommodation__title}>San Andres 1</h3>
        <p className={styles.cardAcommodation__description}>San Andres, Costa Rica</p>
        <Button color="primary" size="medium" text="Elegir Alojamiento" />
      </div>
    </article>
  )
}

export default CardAcommodation