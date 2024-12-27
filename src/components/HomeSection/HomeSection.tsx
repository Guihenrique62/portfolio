import React, { useEffect } from 'react';
import Button from '../Button';
import styles from './HomeSection.module.css';

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
      className={`w-full h-screen items-center justify-around flex flex-col rounded-b-3xl ${styles['section-home']}`}
      id='home'
    >
      <div className='w-full max-w-7xl flex py-10 px-10 flex-col gap-4 text-slate-300 h-auto'>
        <h1 className='text-8xl w-2/3'>
          {homeText('title')}
        </h1>
        <p className='text-lg w-1/3'>
          {homeText('subtitle')}
        </p>
      </div>

      <div className='flex justify-between items-center w-full max-w-7xl py-4 px-4 text-slate-300 h-auto'>

        <Button>
            {homeText('button')} 
            <i className="pi pi-arrow-down" style={{ fontSize: '1rem' }}></i>
        </Button>


        <div className='flex gap-4 justify-center items-center w-1/3'>

          <a href="/" className='hover:text-slate-500'>
            <i className="pi pi-instagram" style={{ fontSize: '2rem' }}></i>
          </a>

          <a href="/" className='hover:text-slate-500'>
            <i className="pi pi-whatsapp" style={{ fontSize: '2rem' }}></i>
          </a>

          <hr className='my-5 border-slate-300 w-1/3' />
          
          <p className='font-medium text-lg'>Medias</p>
        </div>
      </div>
    </section>
  );
};

export default HomeSection;