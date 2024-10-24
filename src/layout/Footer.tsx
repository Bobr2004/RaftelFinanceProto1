import { useTranslation } from "react-i18next";

function Footer() {
   const { t } = useTranslation();
   return (
      <footer className="C-bgBox C-borderBox border-t p-2 flex justify-center gap-x-4 flex-wrap">
         <span>©raftel proto 0.1</span>{" "}
         <span>{t("footer.contactDeveloper")} <a href="https://t.me/Bhd_shvk04" target="_blank" className="underline">@bhd_shvk04</a></span>
      </footer>
   );
}

export { Footer };
