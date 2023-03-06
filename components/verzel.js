import { useEffect, useState } from 'react';
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Verzel() {

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
    transform: `rotate(0deg) translate(${scrollPosition / -15}px, ${scrollPosition / -10}px)`,transition: 'transform 1s ease-out',
  };


  return (
    <>
      <Image
            className={styles.verzel}
            style={transformStyle}
            src="/verzel.png"
            alt="slogan"
            width={300}
            height={260}
      />
    </>
  )
}