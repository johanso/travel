"use client"
import PlaceCard from './components/place-card'
import styles from './places-home.module.scss'

const PlacesCard = () => {
  return (
    <section className={styles.placescard}>
      <div className='container'>
        <h2 className="section-title">Places you must visit</h2>
      </div>
      <div className={styles.placescard__container}>
        <PlaceCard 
          image="/hero-1.jpg"
          title="San Andres"
          description="San Andres, Costa Rica"
        />
        <PlaceCard 
          image="/hero-1.jpg"
          title="San Andres"
          description="San Andres, Costa Rica"
        />
        <PlaceCard 
          image="/hero-1.jpg"
          title="San Andres"
          description="San Andres, Costa Rica"
        />
      </div>
    </section>
  )
}

export default PlacesCard