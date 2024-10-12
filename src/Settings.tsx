import { useSelector } from "react-redux";
import { RootState } from "./store/store";
import { useEffect } from "react";
import i18next from "i18next";

type SettingsProps = {
   children: React.ReactNode;
};

function Settings({ children }: SettingsProps) {
   // const [searchParams] = useSearchParams();
   // const themeFromParams = searchParams.get("theme");
   // let theme = "dark";
   // if (themeFromParams && ["dark", "light"].includes(themeFromParams)) {
   //    theme = themeFromParams;
   // }
   // const dispatch = useDispatch();
   const { theme, fontSize, language, currency, customCurrencyList } =
      useSelector((store: RootState) => store.settings);


   // Language trigger
   const languageMap = new Map().set("ukrainian", "uk").set("english", "en");
   useEffect(() => {
      i18next.changeLanguage(languageMap.get(language));
      localStorage.setItem("storageLanguage", language);
   }, [language]);

   // CustomCurrency trigger
   useEffect(() => {
      localStorage.setItem(
         "storageCustomCurrencyList",
         JSON.stringify(customCurrencyList)
      );
   }, [customCurrencyList]);

   // Other settings trigger
   useEffect(() => {
      localStorage.setItem("storageTheme", theme);
      localStorage.setItem("storageFontSize", fontSize);
      localStorage.setItem("storageCurrency", currency);
   }, [theme, fontSize, currency]);

   return (
      <div className={`h-full ${theme}Theme`} style={{ fontSize }}>
         <div className="h-full C-textBase flex flex-col">{children}</div>
      </div>
   );
}

export { Settings };
