// src/components/HeroSection.jsx
import styles from "../components/common/styles/HeroSection.module.css"; // Import CSS module

const HeroSection = () => {
  return (
    <div className={styles.heroContainer}>
      <div className={styles.contentWrapper}>
        <h1 className={styles.title}>
          Combine <span className={styles.highlight}>software engineering</span> with entrepreneurship
        </h1>
        <p className={styles.subtitle}>
          Join more than 100+ learners who aspire to become quality software engineers and founders
        </p>
        <div className={styles.profileImages}>
          {/* Example images, replace with actual image sources */}
          <img src="profile1.jpg" alt="Profile 1" className={styles.profileImage} />
          <img src="profile2.jpg" alt="Profile 2" className={styles.profileImage} />
          <img src="profile3.jpg" alt="Profile 3" className={styles.profileImage} />
          <img src="profile4.jpg" alt="Profile 4" className={styles.profileImage} />
          <img src="profile5.jpg" alt="Profile 5" className={styles.profileImage} />
        </div>
        <p className={styles.companyText}>
          Our Amigo engineers work in top companies
        </p>
        <div className={styles.companyLogos}>
          {/* Example logos, replace with actual logo sources */}
          <img src="logo1.png" alt="Company 1" className={styles.logo} />
          <img src="logo2.png" alt="Company 2" className={styles.logo} />
          <img src="logo3.png" alt="Company 3" className={styles.logo} />
          <img src="logo4.png" alt="Company 4" className={styles.logo} />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
