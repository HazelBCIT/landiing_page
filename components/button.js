import styles from '../styles/Home.module.css'
import Lottie from 'lottie-react'
import animationData from '../public/74499-circle.json';

export default function Button() {

  return (
    <>
      <div className={styles.button_cont}>
        <Lottie animationData={animationData}
                loop={true}
                autoplay={true}
                speed={0.5}
                style={{ width: 330, height: 'auto' }}
                className={styles.lottie}
        />
      <a href="https://www.hazelwang.ca/portfolio/" target="_blank" rel="noopener noreferrer" className={styles.explore}>
        <button className={styles.button}>Explore</button>
      </a>
      </div>
    </>
  )
}