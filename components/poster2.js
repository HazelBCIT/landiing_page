import { useEffect, useState } from 'react';
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Poster_2() {

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
    transform: `rotate(${scrollPosition / 45}deg) translate(${scrollPosition / 10}px, ${scrollPosition / 12}px)`,transition: 'transform 1s ease-out',
  };


  return (
    <>
      <Image
            className={styles.poster2}
            style={transformStyle}
            src="/mockup-2.png"
            alt="slogan"
            width={200}
            height={280}
      />
    </>
  )
}