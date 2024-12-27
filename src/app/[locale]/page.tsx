"use client";

import 'primeicons/primeicons.css';
import Navbar from "@/components/Navbar/Navbar";
import { useEffect, useState } from 'react';
import styles from './page.module.css';
import { useTranslations } from 'next-intl';
import HomeSection from '@/components/HomeSection/HomeSection';

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const homeText = useTranslations("HomeText");

  // Efeito ao scrollar a pagina
  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById('home');
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header className={`w-full flex items-center justify-center h-auto fixed z-50 ${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
        <Navbar />
      </header>

      <main className='w-full h-auto flex flex-col items-center justify-center'>
        
        <HomeSection homeText={homeText} />
        <section
          className='w-full h-screen items-center flex flex-col'
        >

        </section>

      </main>
      
    </>
  );
}