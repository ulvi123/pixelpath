import { Link } from "react-router-dom";
import styles from "../pages/pageStyles/Courses.module.css";
import CourseCard from "./CourseCard";

function Courses() {
  return (
    <div>
      <div className={styles.coursesContainerGrid}>
        <p className={styles.subTitle}>Courses and Programs</p>
        <h1 className={styles.title}>Discover the latest programs and courses</h1>
        <p className={styles.description}>Try one of our short masterclasses or bootcamp programs to boost your career in tech</p>
        <Link to="/courses" className={styles.exploreCoursesLink}>Explore Courses and Start today</Link>
      </div>
      <div className={styles.coursesList}>
       <CourseCard/>
      </div>
    </div>
  );
}

export default Courses;
