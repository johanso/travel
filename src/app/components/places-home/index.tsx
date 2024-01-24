"use client"
import { allPosts } from 'contentlayer/generated';
import Button from '../button'
import PlaceCard from './components/place-card'
import PlaceInfo from './components/place-info'
import styles from './places-home.module.scss'
import Link from 'next/link';

const PlacesCard = () => {

  const sortedPosts = allPosts.sort((a, b) => b.date.localeCompare(a.date));
  
  return (
    <section className={`${styles.placescard} container`}>
      <div className={`${styles.placescard__header}`}>
        <h2 className="section-title"><strong>Vive</strong> San Andrés</h2>
      </div>
      <div className={styles.placescard__container}>

      {sortedPosts.map((post) => (
        <Link key={post.url} href={post.url}>
          <PlaceCard
            key={post.url}
            title={post.title}
            description={post.excerpt}
            image={post.cover.filePath.replace('../public', '')}
          />
        </Link>
        ))}

      </div>
      <div className={styles.placescard__button_more}>
        <Button color="primary" size="large" text="Ver mas articulos" icon="/icons/arrow-right.svg" />
      </div>
      <PlaceInfo />
    </section>
  )
}

export default PlacesCard