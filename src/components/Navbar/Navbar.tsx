"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import 'primeicons/primeicons.css';
import { SplitButton } from "primereact/splitbutton";
import { usePathname, useRouter } from 'next/navigation';
import Button from "../Button";
import Link from "next/link";


export default function Navbar() {

    const t = useTranslations("NavbarLinks");
    const pathname = usePathname();
    const router = useRouter();
    const locale = pathname.split('/')[1] || 'en'; // Default to 'en' if locale is not defined
  
    const locales = ['en', 'pt'];
  
    const items = locales.map((loc) => ({
      label: loc.toUpperCase(),
      command: () => {
        const newPathname = pathname.replace(new RegExp(`^/${locale}`), '') || '/';
        router.push(`/${loc}${newPathname}`);
      }
    }));

  return (
      <nav
      className={"w-full max-w-7xl flex py-4 px-4 text-gray-300 justify-between items-center"}
      >
          <Link href={'/'}>
            <Image
              alt={t("altLogo")}
              src={'/images/logo/Logo-left-white.png'}
              width={140}
              height={140}
            />
          </Link>
          
        <ul className="flex space-x-2 items-center
          lg:space-x-8 
          md:space-x-8 
          sm:space-x-8 
          ">
          <li className="hover:text-gray-100 hidden min-[860px]:block">
            <Link href="/">{t("home")}</Link>
          </li>
          <li className="hover:text-gray-100 hidden min-[860px]:block">
            <Link href="#cases">{t("cases")}</Link>
          </li>
          <li className="hover:text-gray-100 hidden min-[860px]:block">
            <Link href="#solution">{t("solutions")}</Link>
          </li>
          <li className="hover:text-gray-100 hidden min-[860px]:block">
            <Link href="#contact">{t("contact")}</Link>
          </li>
          <li>
            <SplitButton
              label={locale ? locale.toUpperCase() : ''}
              rounded model={items}
              style={{
                width: '6rem',
                height: '2.5rem',
                backgroundColor: '#e9e9e93a',
              }}
            />
          </li>
          <li>
            <Button >{t('button')}</Button>
          </li>
        </ul>
      </nav>
  );
}