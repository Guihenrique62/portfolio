import { useTranslations } from "next-intl"


export default function CaseSection () {

    const t = useTranslations('CasesText')

    return (
        <section
          className='
            w-full h-screen flex flex-col justify-start
            lg:h-screen lg:items-center lg:rounded-b-3xl lg:justify-between
            md:h-screen md:items-center md:rounded-b-2xl md:justify-between
            sm:h-screen sm:items-center sm:rounded-b-xl sm:justify-between
          
          '
        >
            <h2>{t('title')}</h2>
            <p>{t('subtitle')}</p>

        </section>
    )
}