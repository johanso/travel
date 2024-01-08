import DownloadApp from './components/download-app'
import FeaturedAcommodations from './components/featured-accommodations'
import Features from './components/features'
import Hero from './components/hero'
import PlacesCard from './components/places-home'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={`${styles.main}`}>
      <Hero />
      <FeaturedAcommodations />
      <PlacesCard />
      <Features />
      <DownloadApp />
    </main>
  )
}
