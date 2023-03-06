import { useEffect, useState } from 'react';
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Fantasia() {

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
    transform: `rotate(-20deg) translate(${scrollPosition / 10}px, ${scrollPosition / 12}px)`,transition: 'transform 1s ease-out',
  };


  return (
    <>
      <Image
            className={styles.fantasia}
            style={transformStyle}
            src="/mockup-noshadow.png"
            alt="slogan"
            width={300}
            height={230}
      />
    </>
  )
}