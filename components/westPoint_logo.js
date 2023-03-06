import { useEffect, useState } from 'react';
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function WestPointLogo() {

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
    transform: `translate(${scrollPosition / 10}px, ${scrollPosition / -10}px)`,transition: 'transform 1s ease-out',
  };


  return (
    <>

      <Image
            className={styles.westPoint_logo}
            style={transformStyle}
            src="/Color logo 1 (2)@4x.png"
            alt=""
            width={80}
            height={80}
      />

    </>
  )
}