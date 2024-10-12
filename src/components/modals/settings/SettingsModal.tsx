import { useTranslation } from "react-i18next";
import { Col } from "../../positional/Cols";
import { Divider } from "../../ui/Divider";
import { ModalTemplate } from "../ModalTemplate";
import { CurrencySetting } from "./CurrencySetting";
import { FontSizeSetting } from "./FontSizeSetting";
import { LanguageSetting } from "./LanguageSeting";
import { ThemeSetting } from "./ThemeSetting";

function SettingsModal() {
   const { t } = useTranslation();
   return (
      <ModalTemplate title={t("settings.settingsTitle")}>
         <Col>
            <ThemeSetting />
            <Divider />
            <FontSizeSetting />
            <Divider />
            <LanguageSetting />
            <Divider />
            <CurrencySetting />
         </Col>
      </ModalTemplate>
   );
}

export { SettingsModal };
