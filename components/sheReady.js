import { useEffect, useState } from 'react';
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function SheReady() {

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
    transform: `rotate(-20deg) translate(${scrollPosition / 10}px, ${scrollPosition / 2}px)`,transition: 'transform 1s ease-out',
  };


  return (
    <>

      <Image
            className={styles.westPoint}
            style={transformStyle}
            src="/SheReady-00.png"
            alt="slogan"
            width={230}
            height={220}
      />

    </>
  )
}