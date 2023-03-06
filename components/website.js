import { useEffect, useState } from 'react';
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Lottie from 'lottie-react'
import animationData from '../public/68658-website.json';

export default function Smeg() {

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
    transform: `rotate(-25deg) translate(${scrollPosition / 13}px, ${scrollPosition /-12}px)`,transition: 'transform 1s ease-out'
  };


  return (
    <>
      <div  style={transformStyle} className={styles.website_3d}>
        <Lottie animationData={animationData}
                loop={true}
                autoplay={true}
                speed={0.5}
                style={{ width: 330, height: 'auto' }}
        />
      </div>
     

    </>
  )
}