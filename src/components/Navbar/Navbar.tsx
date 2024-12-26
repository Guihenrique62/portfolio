"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import 'primeicons/primeicons.css';
import { SplitButton } from "primereact/splitbutton";
import { usePathname, useRouter } from 'next/navigation';
import Button from "../Button";
import Link from "next/link";
import { useEffect, useState } from "react";
import styles from './navbar.module.css';


export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 100) {
          setScrolled(true);
        } else {
          setScrolled(false);
        }
      };

      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);


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
    <div className={`w-full flex items-center justify-center h-auto fixed z-50 ${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <nav
      className={"w-full max-w-7xl flex py-4 px-4 text-gray-300 justify-between items-center"}
      >
        <div>
          <Link href={'/'}>
            <Image
              alt={t("altLogo")}
              src={'/images/logo/Logo-left-white.png'}
              width={140}
              height={140}
            />
          </Link>
        </div>
        <ul className="flex space-x-8 items-center">
          <li className="hover:text-gray-100">
            <a href="/">{t("home")}</a>
          </li>
          <li className="hover:text-gray-100">
            <a href="#cases">{t("cases")}</a>
          </li>
          <li className="hover:text-gray-100">
            <a href="#solution">{t("solutions")}</a>
          </li>
          <li className="hover:text-gray-100">
            <a href="#contact">{t("contact")}</a>
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
            <Button children={t('button')}></Button>
          </li>
        </ul>
      </nav>
    </div>
  );
}