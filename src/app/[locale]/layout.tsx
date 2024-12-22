import "../globals.css";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { PrimeReactProvider } from 'primereact/api';

export default async function LocaleLayout({
  children,
  params
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string }
}>) {

  const { locale } = await params;
  

  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body>
          <NextIntlClientProvider messages={messages}>
            <PrimeReactProvider>
              {children}
            </PrimeReactProvider>
          </NextIntlClientProvider>
      </body>
    </html>
  );
}

