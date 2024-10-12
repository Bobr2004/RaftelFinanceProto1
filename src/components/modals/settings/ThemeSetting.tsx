import { useDispatch, useSelector } from "react-redux";
import { changeTheme } from "../../../store/settingsSlice";
import { Row, Row23 } from "../../positional/Rows";
import { Button } from "../../ui/Button";
import { RootState } from "../../../store/store";
import { useTranslation } from "react-i18next";

function ThemeSetting() {
   const { t } = useTranslation();

   return (
      <Row23 className="items-center">
         <span>{t("settings.themeChange")}</span>
         <Row className="flex-wrap">
            <ChangeThemeButton theme="dark">{t("settings.dark")}</ChangeThemeButton>
            <ChangeThemeButton theme="light">{t("settings.light")}</ChangeThemeButton>
         </Row>
      </Row23>
   );
}


type ChangeThemeButtonProps = {
   children: React.ReactNode;
   theme: "dark" | "light";
};

function ChangeThemeButton({ theme, children }: ChangeThemeButtonProps) {
   const dispatch = useDispatch();
   const currentTheme = useSelector((store: RootState) => store.settings.theme);

   const isActive = currentTheme === theme;

   const themeChange = (theme: "dark" | "light") => {
      dispatch(changeTheme(theme));
   };

   return (
      <Button
         className={`${isActive ? "C-focusSpecialBox" : ""}`}
         onClick={() => themeChange(theme)}
      >
         {children}
      </Button>
   );
}

export { ThemeSetting };
