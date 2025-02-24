import { useTranslations } from "next-intl"
import CasesCarousel from "../CasesCarousel/CasesCarousel"


export default function CaseSection () {

    const t = useTranslations('CasesText')

    return (
        <section
          className='
            w-full h-screen flex flex-col 
            lg:h-screen lg:items-center lg:rounded-b-3xl  
            md:h-screen md:items-center md:rounded-b-2xl 
            sm:h-screen sm:items-center sm:rounded-b-xl 
            
          '
        >   
          <div
          className="w-full flex flex-col justify-start h-auto
          lg:items-center lg:rounded-b-3xl lg:w-3/4 lg:flex-row lg:p-12 lg:gap-4
          md:items-center md:rounded-b-2xl md:w-3/4 md:flex-row md:p-8 md:gap-4
          sm:items-center sm:rounded-b-xl sm:w-3/4 sm:flex-row sm:p-6 sm:gap-2"
          >
            <h2 className="w-1/2 font-medium text-4xl">{t('title')}</h2>
            <p className="w-1/2">{t('subtitle')}</p>
          </div>

          <div
          className="
          w-2/4 h-1/2 p-4 rounded-3xl shadow-lg border-slate-950
          
          "
          >
            <CasesCarousel />

          </div>

        </section>
    )
}