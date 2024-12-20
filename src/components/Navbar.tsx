"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import 'primeicons/primeicons.css';
import { SplitButton } from "primereact/splitbutton";
import { usePathname, useRouter } from 'next/navigation';

export default function Navbar() {
    const t = useTranslations("NavbarLinks");
    const pathname = usePathname();
    const router = useRouter();
    const locale = pathname.split('/')[1] || 'en'; // Default to 'en' if locale is not defined
  
    const locales = ['en', 'pt']; // Adicione os locales disponíveis aqui
  
    const items = locales.map((loc) => ({
      label: loc.toUpperCase(),
      command: () => {
        const newPathname = pathname.replace(new RegExp(`^/${locale}`), '') || '/';
        router.push(`/${loc}${newPathname}`);
      }
    }));

  return (
    <nav>
      <div>
        <Image
          alt={t("altLogo")}
          src={'/images/logo/Logo-left-white.png'}
          width={200}
          height={200}
        />
      </div>

      <ul>
        <li>
          <a href="/">{t("home")}</a>
        </li>
        <li>
          <a href="/cases">{t("cases")}</a>
        </li>
        <li>
          <a href="/solution">{t("solutions")}</a>
        </li>
        <li>
          <a href="/contact">{t("contact")}</a>
        </li>

        <li>
          <SplitButton label={locale ? locale.toUpperCase() : ''} rounded model={items} />
        </li>
      </ul>
    </nav>
  );
}