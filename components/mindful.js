import { useEffect, useState } from 'react';
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Mindful() {

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
    transform: `rotate(-20deg) translate(${scrollPosition / -5}px, ${scrollPosition /-5}px)`,transition: 'transform 1s ease-out',
  };


  return (
    <>

      <Image
            className={styles.mindful}
            style={transformStyle}
            src="/76.png"
            alt=""
            width={260}
            height={260}
      />

    </>
  )
}