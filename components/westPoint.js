import { useEffect, useState } from 'react';
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function WestPoint() {

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
    transform: `rotate(-20deg) translate(${scrollPosition / 5}px, ${scrollPosition / 5}px)`,transition: 'transform 1s ease-out',
  };


  return (
    <>

      <Image
            className={styles.westPoint}
            style={transformStyle}
            src="/278-0.png"
            alt="slogan"
            width={330}
            height={220}
      />

    </>
  )
}