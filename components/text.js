import styles from '../styles/Home.module.css'
import FadeInUp from './aniamtion';

export default function Text() {
  return (
    <>
      <div className={styles.col2}>
        <FadeInUp>
          <p className={styles.hello}>Hi!</p>
        </FadeInUp>
        <FadeInUp>
          <p className={styles.hello} style={{marginTop:-120}}>I'm Hazel</p>
        </FadeInUp>
        <FadeInUp>
          <p className={styles.codystar} style={{animationDelay:"500ms"}}>UI /UX & Graphic Designer</p>
        </FadeInUp>
        <FadeInUp>
          <p className={styles.iiii} style={{marginTop:100,animationDelay:"1000ms"}}>I roll up my sleeves</p>
        </FadeInUp>
        <FadeInUp>
          <p className={styles.iiii} style={{animationDelay:"2000ms"}}>I make it easy</p>
        </FadeInUp>
        <FadeInUp>
          <p className={styles.iiii} style={{animationDelay:"3000ms"}}>I play to win</p>  
        </FadeInUp>
        <FadeInUp>
          <p className={styles.iiii} style={{animationDelay:"4000ms"}}>I am proud</p>  
        </FadeInUp>
      </div>
    </>
  )


}

