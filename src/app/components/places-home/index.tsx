"use client"
import Button from '../button'
import PlaceCard from './components/place-card'
import PlaceInfo from './components/place-info'
import styles from './places-home.module.scss'

const PlacesCard = () => {
  
  return (
    <section className={`${styles.placescard} container`}>
      <div className={`${styles.placescard__header}`}>
        <h2 className="section-title"><strong>Vive</strong> San Andrés</h2>
      </div>
      <div className={styles.placescard__container}>
        <PlaceCard 
          image="/hero-1.jpg"
          title="San Andres 1"
          description="San Andres, Costa Rica"
        />
        <PlaceCard 
          image="/hero-2.jpg"
          title="San Andres 2"
          description="San Andres, Costa Rica"
        />
        <PlaceCard 
          image="/hero-1.jpg"
          title="San Andres 3"
          description="San Andres, Costa Rica"
        />
        <PlaceCard 
          image="/hero-2.jpg"
          title="San Andres 4"
          description="San Andres, Costa Rica"
        />
        <PlaceCard 
          image="/hero-1.jpg"
          title="San Andres 1"
          description="San Andres, Costa Rica"
        />
        <PlaceCard 
          image="/hero-2.jpg"
          title="San Andres 2"
          description="San Andres, Costa Rica"
        />
      </div>
      <div className={styles.placescard__button_more}>
        <Button color="primary" size="large" text="Ver mas articulos" icon="/icons/arrow-right.svg" />
      </div>
      <PlaceInfo />
    </section>
  )
}

export default PlacesCard