import Hero from './components/hero'
import PlatformLogos from './components/platform-logos'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={`${styles.main}`}>
      <Hero />
      <PlatformLogos />
    </main>
  )
}
