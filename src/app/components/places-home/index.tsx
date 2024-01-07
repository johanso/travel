"use client"
import { IconArrowLeft, IconArrowRight } from '../icons'
import PlaceCard from './components/place-card'
import PlaceInfo from './components/place-info'
import styles from './places-home.module.scss'
import useCarrousel from '@/hooks/useCarrousel'

const PlacesCard = () => {
  
  const { configCarrousel, containerCarrousel, onHandleRightOrLeftScroll } = useCarrousel();

  return (
    <section className={styles.placescard}>
      <div className={`${styles.placescard__header} container`}>
        <h2 className="section-title"><strong>Vive</strong> San Andrés</h2>
        <div className='placescard-buttons'>
          <button className='button' onClick={() => onHandleRightOrLeftScroll('left')} aria-hidden="true">
            <IconArrowLeft color={configCarrousel.left ? 'var(--text-color)' : 'var(--text-disabled)'} size={18} />
          </button>
          <button className='button' onClick={() => onHandleRightOrLeftScroll('right')} aria-hidden="true">
            <IconArrowRight color={configCarrousel.right ? 'var(--text-color)' : 'var(--text-disabled)'} size={18} />
          </button>
        </div>
      </div>
      <div 
        id='carrousel-places'
        className={styles.placescard__container} 
        ref={containerCarrousel}>
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
      </div>
      <div className='container'>
        <PlaceInfo />
      </div>
    </section>
  )
}

export default PlacesCard