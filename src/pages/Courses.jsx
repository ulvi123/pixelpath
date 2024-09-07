import { Link } from "react-router-dom";
import styles from "../pages/pageStyles/Courses.module.css";

function Courses() {
  return (
    <div>
      <div className={styles.coursesContainer}>
        <p>Courses and Programs</p>
        <h1>Discover the latest programs and courses</h1>
        <p>Try one of our short masterclasses or bootcamp programs to boost your career in tech</p>
        <Link to="/courses" className={styles.exploreCoursesLink}>Explore Courses and Start today</Link>
      </div>
      <div className={styles.coursesList}>
       
      </div>
    </div>
  );
}

export default Courses;
