import HeroSection from '../components/HeroSection'
import Courses from '../pages/Courses'
import styles from '../pages/pageStyles/Home.module.css'

function Home() {
  return (
    <div className={styles.pageContainer}>
        <HeroSection />
        <Courses/>
    </div>
  )
}

export default Home