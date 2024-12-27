import React, { useEffect } from 'react';
import Button from '../Button';
import styles from './HomeSection.module.css';
import Link from 'next/link';

interface HomeSectionProps {
  homeText: (key: string) => string;
}

const HomeSection: React.FC<HomeSectionProps> = ({ homeText }) => {

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
    <section
      className={`w-full h-screen flex flex-col justify-start rounded-b-2xl pt-16
        lg:h-screen lg:items-center lg:rounded-b-3xl lg:justify-between
        md:h-screen md:items-center md:rounded-b-2xl md:justify-between
        sm:h-screen sm:items-center sm:rounded-b-xl sm:justify-between
        ${styles['section-home']}
      `}
      id='home'
    >
      <div className=' w-full max-w-7xl flex py-10 px-10 flex-col gap-14 text-slate-300 h-auto '>
        <h1 className='
          lg:text-7xl lg:w-3/4 lg:my-10 lg:text-start
          md:text-6xl md:w-3/4 md:my-10 md:text-start
          sm:text-5xl sm:w-3/4 sm:my-10 sm:text-start
          text-3xl w-full font-medium text-center
        '>
          {homeText('title')}
        </h1>
        <p className='
          lg:text-lg lg:w-2/5 lg:text-start lg:font-normal
          md:text-base md:w-2/5 md:text-start md:font-normal
          sm:text-sm sm:w-3/5 sm:text-start sm:font-normal
          text-md w-full text-center font-light
        '>
          {homeText('subtitle')}
        </p>
      </div>

      <div className='
        flex flex-col gap-4 justify-around items-center w-full max-w-7xl py-4 px-4 text-slate-300 h-full
        lg:flex-row lg:py-10 lg:px-10 lg:justify-between
        md:flex-row md:py-10 md:px-10 md:justify-between
        sm:flex-row sm:py-10 sm:px-10 sm:justify-between
      '>

        <Button>
            {homeText('button')} 
            <i className="pi pi-arrow-down" style={{ fontSize: '1rem' }}></i>
        </Button>


        <div className='flex gap-4 justify-center items-center w-full
        lg:w-1/3 
        md:w-1/3
        '>

          <Link href="/" className='hover:text-slate-500'>
            <i className="pi pi-instagram" style={{ fontSize: '2rem' }}></i>
          </Link>

          <Link href="/" className='hover:text-slate-500'>
            <i className="pi pi-whatsapp" style={{ fontSize: '2rem' }}></i>
          </Link>

          <hr className='my-5 border-slate-300 w-1/3' />
          
          <p className='font-medium text-lg'>Medias</p>
        </div>
      </div>
    </section>
  );
};

export default HomeSection;