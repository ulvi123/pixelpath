import { Link } from "react-router-dom";
import styles from "../pages/pageStyles/CourseCard.module.css";
import courseData from "../data/courses.json";
import java from "../assets/images/java.jpg";
import azmiu from "../assets/images/azmiu.png";
import kenan from "../assets/images/kanan.jpg";
import tarmo from "../assets/images/tarmo.jpg";
import cem from "../assets/images/cem.jpg";
import malware from "../assets/images/Malwarebytes.png";

const mapImages = {
  "java.jpg": java,
  "azmiu.png": azmiu,
  "kanan.jpg": kenan,
  "tarmo.jpg": tarmo,
  "cem.jpg": cem,
  "malware.jpg": malware,
};


function CourseCard() {
  

  return (
    <div className={styles.coursesContainerGrid}>
      {courseData.courses.map((course) => (
        <div className={styles.courseCard} key={course.id}>
          <img  src={mapImages[course.image.split('/').pop()]}  alt="Mainimage" className={styles.courseImage} />
          <h2 className={styles.courseTitle}>{course.title}</h2>
          <h3 className={styles.courseDescription}>{course.description}</h3>
          <Link to="#" className={styles.readMoreLink}>
            Learn more
          </Link>
        </div>
      ))}
    </div>
  );
}

export default CourseCard;
