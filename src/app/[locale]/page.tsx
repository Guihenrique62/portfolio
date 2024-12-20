
import { useTranslations } from "next-intl";

export default function Home() {

  const t = useTranslations("NavbarLinks")

  return (
    <div>
      <h1>{t("home")}</h1>
    </div>
  );
}
