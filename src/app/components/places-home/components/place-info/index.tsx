import { IconQuote } from '@/app/components/icons'
import styles from './place-info.module.scss'

const PlaceInfo = () => {
  return (
    <div className={styles.placeinfo}>
      <h2 className={styles.placeinfo__title}>
        <strong>Feeling Lost</strong> And Not Knowing The Way?
      </h2>
      <p className={styles.placeinfo__description}>
        Starting from the anxiety of the climbers when visiting a new climbing location, the possibility of getting lost is very large.
      </p>
      <p className={styles.placeinfo__icon}>
        <IconQuote size={180} color="var(--text-color-inverse)" />
      </p>
    </div>
  )
}

export default PlaceInfo