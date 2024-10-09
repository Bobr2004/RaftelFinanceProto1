import { useDispatch, useSelector } from "react-redux";
import { changeLanguage } from "../../../store/settingsSlice";
import { Row, Row23 } from "../../positional/Rows";
import { Button } from "../../ui/Button";
import { RootState } from "../../../store/store";

function LanguageSetting() {
   return (
      <Row23 className="items-center">
         <span>Розмір Шрифту</span>
         <Row className="flex-wrap">
            <ChangeLanguageButton language="ukrainian">Українська</ChangeLanguageButton>
            <ChangeLanguageButton language="english">English</ChangeLanguageButton>
         </Row>
      </Row23>
   );
}

type ChangeLanguageButtonProps = {
   children: React.ReactNode;
   language: "ukrainian" | "english";
};

function ChangeLanguageButton({ children, language }: ChangeLanguageButtonProps) {
   const dispatch = useDispatch();
   const currentLanguage = useSelector(
      (store: RootState) => store.settings.language
   );

   const isActive = currentLanguage === language;

   const languageChange = (language: "ukrainian" | "english") => {
      dispatch(changeLanguage(language));
   };

   return (
      <Button
         className={`${isActive ? "C-focusSpecialBox" : ""}`}
         onClick={() => languageChange(language)}
      >
         {children}
      </Button>
   );
}

export { LanguageSetting };
