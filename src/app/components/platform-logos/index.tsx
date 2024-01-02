import Image from 'next/image'
import styles from './platformlogos.module.scss'

const PlatformLogos = () => {
  return (
    <section className={styles.platforms}>
      <div className={styles.platforms__logos}>
        <div className={styles.platforms__logo}>
          <Image
            src="/logos/booking.svg"
            alt="logo"
            width={100}
            height={26}
            priority
          />
        </div>
        <div className={styles.platforms__logo}>
          <Image
            src="/logos/expedia.svg"
            alt="logo"
            width={100}
            height={26}
            priority
          />
        </div>
        <div className={styles.platforms__logo}>
          <Image
            src="/logos/tripadvisor.svg"
            alt="logo"
            width={100}
            height={26}
            priority
          />
        </div>
        <div className={styles.platforms__logo}>
          <Image
            src="/logos/orbitz.svg"
            alt="logo"
            width={100}
            height={26}
            priority
          />
        </div>
        <div className={styles.platforms__logo}>
          <Image
            src="/logos/booking.svg"
            alt="logo"
            width={100}
            height={26}
            priority
          />
        </div>
        <div className={styles.platforms__logo}>
          <Image
            src="/logos/expedia.svg"
            alt="logo"
            width={100}
            height={26}
            priority
          />
        </div>
        <div className={styles.platforms__logo}>
          <Image
            src="/logos/tripadvisor.svg"
            alt="logo"
            width={100}
            height={26}
            priority
          />
        </div>
        <div className={styles.platforms__logo}>
          <Image
            src="/logos/orbitz.svg"
            alt="logo"
            width={100}
            height={26}
            priority
          />
        </div>
      </div>
    </section>
  )
}

export default PlatformLogos