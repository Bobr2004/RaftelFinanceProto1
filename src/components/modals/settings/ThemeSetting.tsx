import { useDispatch, useSelector } from "react-redux";
import { changeTheme } from "../../../store/settingsSlice";
import { Row, Row23 } from "../../positional/Rows";
import { Button } from "../../ui/Button";
import { RootState } from "../../../store/store";

function ThemeSetting() {
   return (
      <Row23 className="items-center">
         <span>Кольорова тема</span>
         <Row className="flex-wrap">
            <ChangeThemeButton theme="dark">Dark</ChangeThemeButton>
            <ChangeThemeButton theme="light">Light</ChangeThemeButton>
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
   const currentFontSize = useSelector(
      (store: RootState) => store.settings.theme
   );

   const isActive = currentFontSize === theme;

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
