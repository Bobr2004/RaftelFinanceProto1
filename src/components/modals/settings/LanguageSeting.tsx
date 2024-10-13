import { useDispatch, useSelector } from "react-redux";
import { changeLanguage } from "../../../store/settingsSlice";
import { Row, Row23 } from "../../positional/Rows";
import { Button } from "../../ui/Button";
import { RootState } from "../../../store/store";
import { useTranslation } from "react-i18next";

function LanguageSetting() {
   const { t } = useTranslation();

   return (
      <Row23 className="items-center">
         <span>{t("settings.selectedLanguage")}</span>
         <Row className="flex-wrap">
            <ChangeLanguageButton language="ukrainian">
               Українська
            </ChangeLanguageButton>
            <ChangeLanguageButton language="english">
               English
            </ChangeLanguageButton>
         </Row>
      </Row23>
   );
}

type ChangeLanguageButtonProps = {
   children: React.ReactNode;
   language: "ukrainian" | "english";
};

function ChangeLanguageButton({
   children,
   language
}: ChangeLanguageButtonProps) {
   // Redux
   const dispatch = useDispatch();
   const currentLanguage = useSelector(
      (store: RootState) => store.settings.language
   );

   // Inner state
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
