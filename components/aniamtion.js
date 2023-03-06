import { useInView } from 'react-intersection-observer';
import styles from '../styles/Home.module.css'

export default function FadeInUp(props) {
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0.1, // trigger animation when 50% of the component is visible
  });



  return (
    <>
        <div 
          className={inView ? styles.animate_me_1 : styles.active } 
          ref={ref}
        >{props.children}</div>

    </>
  )


}

