"use client";

import 'primeicons/primeicons.css';
import Navbar from "@/components/Navbar/Navbar";
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
      if (window.scrollY > 50) {
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
      <Navbar />
      <section
        className={`w-full h-screen items-center justify-around flex flex-col rounded-b-3xl ${styles['section-home']}`}
        id='home'
      >

        

        <div className='w-full max-w-7xl flex py-4 px-4 flex-col gap-4 text-slate-300 h-auto'>

          <h1 className='text-8xl  w-2/3'>
            {homeText('title')}
          </h1>

          <p className='text-lg w-1/3'>
            {homeText('subtitle')}
          </p>
        
        </div>

        <div className='flex justify-between items-center w-full max-w-7xl py-4 px-4 text-slate-300 h-auto'>
          <Button children={homeText('button')}></Button>

          <div className='flex gap-4 justify-center items-center w-1/3'>
            <a href="/"><i className="pi pi-instagram" style={{ fontSize: '2rem' }}></i></a>
            <a href="/"><i className="pi pi-whatsapp" style={{ fontSize: '2rem' }}></i></a>

            <hr 
            className='my-5 border-slate-300 w-1/3'
            />

            <p>Medias</p>
          </div>
        </div>


      </section>

      <section
        className='w-full h-screen items-center flex flex-col'
      >

      </section>
    </>
  );
}