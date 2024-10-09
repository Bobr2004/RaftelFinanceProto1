import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { RootState } from "./store/store";
import { useEffect } from "react";
import { changeFontSize } from "./store/settingsSlice";

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
   const dispatch = useDispatch();
   const { theme, fontSize, language, currency } = useSelector(
      (store: RootState) => store.settings
   );

   useEffect(() => {
      localStorage.setItem("storageTheme", theme);
      localStorage.setItem("storageFontSize", fontSize);
      localStorage.setItem("storageLanguage", language);
      localStorage.setItem("storageCurrency", currency);
   }, [theme, fontSize, language, currency]);

   return (
      <div className={`h-full ${theme}Theme fontSize${fontSize}`}>
         <div className="h-full C-textBase flex flex-col">{children}</div>
      </div>
   );
}

export { Settings };
