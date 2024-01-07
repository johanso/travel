import styles from './featured-accommodations.module.scss'

const FeaturedAcommodations = () => {
  return (
    <section className={styles.featuredAcommodations}>
      <div className={`${styles.featuredAcommodations__header} container`}>
        <h2 className="section-title"><strong>Explora </strong> los Mejores Hospedajes</h2>
      </div>

      <div className='container'>
        FeaturedAcommodations
      </div>
    </section>
  )
}

export default FeaturedAcommodations