"use client"
import { useRef, useState, useEffect } from 'react'
import { IconArrowLeft, IconArrowRight } from '../icons'
import PlaceCard from './components/place-card'
import PlaceInfo from './components/place-info'
import styles from './places-home.module.scss'

const PlacesCard = () => {
  const [configCarrousel, setConfigCarrousel] = useState({
    right: false,
    left: false
  })
  const containerCarrousel = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const { current: carrousel } = containerCarrousel
  
    if(carrousel !== null && carrousel.scrollWidth > carrousel.offsetWidth) {
      setConfigCarrousel({
        ...configCarrousel,
        right: true,
        left: false,
      })
    }
  }, [])
  

  const onHandleRightOrLeftScroll = (action: 'left' | 'right') => {
    const { current: carrousel } = containerCarrousel
    
    if (carrousel) {
      const elements = Array.from(carrousel.querySelectorAll('[data-type="carrusel-place"]'));
  
      if (elements.length >= 2) {
        const [firstElement, secondElement] = elements;
  
        const nextWidth = secondElement.getBoundingClientRect().left - firstElement.getBoundingClientRect().left;
  
        if (action === 'right') carrousel.scrollLeft += nextWidth;
        if (action === 'left') carrousel.scrollLeft -= nextWidth;
      }
    }
  }

  const handleScroll = (): void => {
    const { current: carrousel } = containerCarrousel;
  
    if (carrousel) {
      const right = carrousel.scrollLeft < carrousel.scrollWidth - carrousel.offsetWidth;
      const left = carrousel.scrollLeft > 0;
      setConfigCarrousel({ right, left });
    }
  };
  

  return (
    <section className={styles.placescard}>
      <div className={`${styles.placescard__header} container`}>
        <h2 className="section-title"><strong>Explora</strong> San Andrés</h2>
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
        onScroll={handleScroll}
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