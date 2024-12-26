"use client";

import 'primeicons/primeicons.css';
import Navbar from "@/components/Navbar";
import Button from '@/components/Button';
import { useEffect } from 'react';
import styles from './page.module.css';
import { useTranslations } from 'next-intl';

export default function Home() {

  const homeText = useTranslations("HomeText");

  // Efeito ao scrollar a pagina
  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById('home');
      if (window.scrollY > 100) { // Ajuste conforme necessário
        section?.classList.add(styles.shrink);
      } else {
        section?.classList.remove(styles.shrink);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>

      <section 
        className={`w-full h-screen items-center flex flex-col rounded-b-3xl ${styles['section-home']}`}
        id='home'
      > 
          
        <Navbar />

        <div className='w-full max-w-7xl flex py-4 px-4 flex-col gap-4 text-slate-300 '>
          <h1 className='text-8xl  w-2/3'>{homeText('title')}</h1>
          <p className='text-lg w-1/3'>{homeText('subtitle')}</p>

          <Button children={homeText('button')}></Button>
        </div>


        
      </section>

      <section 
      className='w-full h-screen items-center flex flex-col'
      >

      </section>
    </>
  );
}