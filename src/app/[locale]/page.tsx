
import 'primeicons/primeicons.css';
import Navbar from "@/components/Navbar";
import Button from '@/components/Button';

export default function Home() {


  return (
    <section 
    className='w-full h-screen items-center flex flex-col'
    id='home'
    > 
      <Navbar />

      <div className='w-full max-w-7xl flex py-4 px-4 flex-col gap-4 text-slate-300 '>
        <h1 className='text-8xl  w-2/3'>Experiência digital que transforma a sua Empresa.</h1>
        <p className='text-lg w-1/3'>Seu sucesso digital começa com uma interface bem desenvolvida. Vamos criar algo incrível juntos!</p>

        <Button children={'Ver projetos'}></Button>
      </div>


      
    </section>
  );
}