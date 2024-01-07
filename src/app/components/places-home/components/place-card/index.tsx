"use client"
import { IconLocation } from '../../../icons'
import styles from './places-card.module.scss'

interface PlaceCardProps {
  image: string
  title: string
  description: string
}

const PlaceCard: React.FC<PlaceCardProps> = ({image, title, description}) => {
  return (
    <article data-type='carrusel-place' style={{backgroundImage: `url(${image})`}} className={styles.placecard}>
      <div className={styles.placecard__icon}>
        <IconLocation color='var(--text-color)' size={24} />
      </div>
      <h3 className={styles.placecard__title}>{title}</h3>
      <p className={styles.placecard__description}>{description}</p>
    </article>
  )
}

export default PlaceCard