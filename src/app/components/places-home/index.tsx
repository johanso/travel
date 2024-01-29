import Button from '../button'
import PlaceCard from './components/place-card'
import PlaceInfo from './components/place-info'
import styles from './places-home.module.scss'
import { client } from '../../../../sanity/lib/client'
import { IPostLugares } from '@/types/iPostLugares'

const getPosts = async () => {
  const query = `*[_type == "lugares"] {
    title,
    slug,
    publishedAt,
    excerpt
  } `
  const posts = await client.fetch(query)
  return posts
}

const PlacesCard = async () => {

  const posts: IPostLugares[] = await getPosts()
  
  return (
    <section className={`${styles.placescard} container`}>
      <div className={`${styles.placescard__header}`}>
        <h2 className="section-title"><strong>Vive</strong> San Andrés</h2>
      </div>
      <div className={styles.placescard__container}>
        {
          posts?.length > 0 && posts.map((post) => (

            <PlaceCard 
              key={post._id}
              image="/hero-1.jpg"
              title={post.title}
              description={post.excerpt}
              slug={post.slug.current}
            />
          ))
        }
      </div>
      <div className={styles.placescard__button_more}>
        <Button color="primary" size="large" text="Ver mas articulos" icon="/icons/arrow-right.svg" />
      </div>
      <PlaceInfo />
    </section>
  )
}

export default PlacesCard