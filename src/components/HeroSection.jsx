// src/components/HeroSection.jsx
import styles from "../components/common/styles/HeroSection.module.css"; // Import CSS module
import profile1 from "../assets/images/profile1.jpg"; // Replace with actual image sources
import profile2 from "../assets/images/kanan.jpg";
import profile3 from "../assets/images/Tarmo.jpg";
import profile4 from "../assets/images/Cem.jpg";
import profile5 from "../assets/images/Vlad.jpg";
import profile6 from "../assets/images/kamran.jpg";
import logo1 from "../assets/images/AZMIU.png";
import logo2 from "../assets/images/AZRTN.jpg";
import logo3 from "../assets/images/g1s1.jpg";
import logo4 from "../assets/images/Malwarebytes.png";

const HeroSection = () => {
  return (
    <div className={styles.heroContainer}>
      <div className={styles.contentWrapper}>
        <h1 className={styles.title}>
          Combine <span className={styles.highlight}>software engineering</span> with entrepreneurship
        </h1>
        <p className={styles.subtitle}>
          Join more than 100+ learners who aspire to become quality software engineers and founders,by learning from top industry profesisionalls
        </p>
        <div className={styles.profileImages}>
          {/* Example images, replace with actual image sources */}
          <img src={profile1} alt="Profile 1" className={styles.profileImage} />
          <img src={profile2} alt="Profile 2" className={styles.profileImage} />
          <img src={profile3} alt="Profile 3" className={styles.profileImage} />
          <img src={profile4} alt="Profile 4" className={styles.profileImage} />
          <img src={profile5} alt="Profile 5" className={styles.profileImage} />
          <img src={profile6} alt="Profile 6" className={styles.profileImage} />
        </div>
        <p className={styles.companyText}>
          Pixel is working close with industry to achieve your goals.
        </p>
        <div className={styles.companyLogos}>
          {/* Example logos, replace with actual logo sources */}
          <img src={logo1} alt="Company 1" className={styles.logo} />
          <img src={logo2} alt="Company 2" className={styles.logo} />
          <img src={logo3} alt="Company 3" className={styles.logo} />
          <img src={logo4} alt="Company 4" className={styles.logo} />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
