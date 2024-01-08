import { useState } from 'react'
import Image from 'next/image'
import styles from './card-acommodation.module.scss'
import Button from '../button'
import { IconChatLeftText, IconDash, IconLocation, IconPlus, IconSea, IconStar } from '../icons'

const CardAcommodation = () => {

  const [activeAmenities, setActiveAmenities] = useState<boolean>(false)

  return (
    <article className={styles.cardAcommodation} data-type='carrusel-acommodation'>
      <header className={styles.cardAcommodation__header}>
        <div className={styles.cardAcommodation__stars}>
          <IconStar size={14} color="#ffb900" />
          <IconStar size={14} color="#ffb900" />
          <IconStar size={14} color="#ffb900" />
          <IconStar size={14} color="#ffb900" />
        </div>
        <Image src="/hero-1.jpg" alt="hero" width={200} height={250} />
      </header>
      <div className={styles.cardAcommodation__content}>
        <h3 className={styles.cardAcommodation__title}>San Andres 1</h3>
        <p className={styles.cardAcommodation__location}>
          <span><IconLocation size={14} /> 2,1 km del centro</span> 
          <span><IconSea size={18} /> A 350mts. de la playa</span>
        </p>
        <p className={styles.cardAcommodation__reputation}>
          <span><IconChatLeftText size={14} /> 299 comentarios</span> 
          <span><IconStar size={14} /> 8.0 Promedio de calificación</span>
        </p>
        <div className={styles.cardAcommodation__amenities}>
          <ul className={styles.cardAcommodation__amenities_list}>
            <li className={styles.cardAcommodation__amenities_item}>Servicio 1</li>
            <li className={styles.cardAcommodation__amenities_item}>Servicio 2</li>
            <li className={styles.cardAcommodation__amenities_item}>Servicio 3</li>
            <li className={styles.cardAcommodation__amenities_item}>Servicio 4</li>
          </ul>
        </div>
      </div>
      <footer className={styles.cardAcommodation__footer}>
        <Button color="primary" size="medium" icon='/icons/arrow-right.svg' text="Elegir Alojamiento" />
      </footer>
    </article>
  )
}

export default CardAcommodation