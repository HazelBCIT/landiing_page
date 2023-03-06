import { useEffect, useState } from 'react';
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Can() {

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
    transform: `rotate(-10deg) translate(${scrollPosition / 6}px, ${scrollPosition /-16}px)`,transition: 'transform 1s ease-out',
  };


  return (
    <>

      <Image
            className={styles.can}
            style={transformStyle}
            src="/Orange-11.png"
            alt=""
            width={320}
            height={260}
      />

    </>
  )
}