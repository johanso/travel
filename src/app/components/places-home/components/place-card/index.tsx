"use client"
import styles from './places-card.module.scss'

interface PlaceCardProps {
  image: string
  title: string
  description: string
}

const PlaceCard: React.FC<PlaceCardProps> = ({image, title, description}) => {
  return (
    <div style={{backgroundImage: `url(${image})`}} className={styles.placecard}>
      PlaceCard
    </div>
  )
}

export default PlaceCard