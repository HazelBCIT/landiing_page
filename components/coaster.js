import { useEffect, useState } from 'react';
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Coaster() {

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
    transform: `rotate(-10deg) translate(${scrollPosition / -16}px, ${scrollPosition /-6}px)`,transition: 'transform 1s ease-out'
  };


  return (
    <>

      <Image
            className={styles.coaster}
            style={transformStyle}
            src="/Coasters Mockup-000.png"
            alt=""
            width={180}
            height={180}
      />

    </>
  )
}