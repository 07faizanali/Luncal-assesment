import styles from './GallerySection.module.css';


const GallerySection = () => {
  return (
    <>
    <div className={styles.galleryContainer}>
    <div className={styles.iconContainer}>
      <img src='/assests/images/questionIcon.png' alt='icon' className={styles.icon} />
      <img src='/assests/images/squIcon.png' alt='icon' className={styles.squicon} />
      </div>
      <div className={styles.galleryHeader}>
        <span>Gallery</span>
        <button className={styles.addButton}>+ Add Image</button>
      </div>
      <div className={styles.galleryImages}>
        {/* Placeholder images */}
        <div className={styles.image}>
          <img src='./assests/images/background.png' alt='image'/>
        </div>
        <div className={styles.image}>
        <img src='./assests/images/background.png' alt='image'/>
        </div>
        <div className={styles.image}>
        <img src='./assests/images/background.png' alt='image'/>
        </div>
      </div>
    </div>
    <div className={styles.rectangle2}></div>
    </>
  );
};

export default GallerySection;
