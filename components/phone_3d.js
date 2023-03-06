import { useEffect, useState } from 'react';
import styles from '../styles/Home.module.css'
import Lottie from 'lottie-react'
import animationData from '../public/46762-cellphone.json';

export default function Phone_3d() {

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
    transform: `rotate(-20deg) translate(${scrollPosition / -10}px, ${scrollPosition /6}px)`,transition: 'transform 1s ease-out',
  };

  return (
    <>
      <div  style={transformStyle} className={styles.phone_3d}>
        <Lottie animationData={animationData}
                loop={true}
                autoplay={true}
                speed={0.5}
                style={{ width: 260, height: 'auto' }}
        />
      </div>
     

    </>
  )
}