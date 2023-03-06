import { useEffect, useState } from 'react';
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Slogan() {
  // const [scrollPosition, setScrollPosition] = useState(0);

  // useEffect(() => {
  //   function handleScroll() {
  //     const scrollPosition = window.scrollY;

  //     setScrollPosition(scrollPosition);
  //   }

  //   window.addEventListener('scroll', handleScroll);

  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, []);

  // const transformStyle = {
  //   transform: `translate(0px, ${scrollPosition /1.2}px)`,transition: 'transform 1s ease-out'
  // };

  const [scrollPosition, setScrollPosition] = useState(0);
  const [windowHeight, setWindowHeight] = useState(0);

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

  useEffect(() => {
    function handleResize() {
      setWindowHeight(window.innerHeight);
    }

    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxHeight = windowHeight + 600 ; 
  const transformStyle = {
    transform: `translateY(${scrollPosition <= maxHeight ? scrollPosition : maxHeight}px)`,
    transition: 'transform 1s ease-out',
  };

  return (
    <>
      <div className={styles.slogan_container}>
        <Image
          className={`${styles.slogan}`}
          style={transformStyle}
          src="/slogan.png"
          alt="slogan"
          width={600}
          height={750}
        />

        <Image
          className={`${styles.icon}`}
          style={transformStyle}
          src="/icon-down.png"
          alt="icon"
          width={100}
          height={100}
        />
      </div>
    </>
  )
}
