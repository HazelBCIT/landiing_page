import { useEffect, useState } from 'react';
import styles from '../styles/Home.module.css'
import Lottie from 'lottie-react'
import animationData from '../public/46776-hand.json';

export default function Hand_3d() {

  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    function handleScroll() {
      const scrollPosition = window.scrollY;

      setScrollPosition(scrollPosition);
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const transformStyle = {
    transform: `translate(${scrollPosition / -4}px, ${scrollPosition /-6}px)`,transition: 'transform 1s ease-out',
  };

  return (
    <>
      <div  style={transformStyle} className={styles.hand_3d}>
        <Lottie animationData={animationData}
                loop={true}
                autoplay={true}
                speed={0.5}
                style={{ width: 240, height: 'auto' }}
        />
      </div>
     

    </>
  )
}