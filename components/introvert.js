import { useEffect, useState } from 'react';
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Introvert() {

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
    transform: `rotate(-10deg) translate(${scrollPosition / 13}px, ${scrollPosition /8}px)`,transition: 'transform 1s ease-out',
  };


  return (
    <>

      <Image
            className={styles.introvert}
            style={transformStyle}
            src="/252.png"
            alt=""
            width={360}
            height={260}
      />

    </>
  )
}