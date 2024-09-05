import HeroSection from '../components/HeroSection'
import styles from '../pages/pageStyles/Home.module.css'

function Home() {
  return (
    <div className={styles.pageContainer}>
        <HeroSection />
    </div>
  )
}

export default Home