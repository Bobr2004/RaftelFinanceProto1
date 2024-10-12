import { useDispatch, useSelector } from "react-redux";
import { changeFontSize } from "../../../store/settingsSlice";
import { Row, Row23 } from "../../positional/Rows";
import { Button } from "../../ui/Button";
import { RootState } from "../../../store/store";
import { useTranslation } from "react-i18next";

function FontSizeSetting() {
   const { t } = useTranslation();

   return (
      <Row23 className="items-center">
         <span>{t("settings.fontSize")}</span>
         <Row className="flex-wrap">
            {/* <ChangeFontSizeButton fontSize="12px" /> */}
            <ChangeFontSizeButton fontSize="14px" />
            <ChangeFontSizeButton fontSize="16px" />
            <ChangeFontSizeButton fontSize="18px" />
            {/* <ChangeFontSizeButton fontSize="20px" /> */}
         </Row>
      </Row23>
   );
}
type ChangeFontSizeButtonProps = {
   fontSize: `${number}px`;
};

function ChangeFontSizeButton({ fontSize }: ChangeFontSizeButtonProps) {
   const dispatch = useDispatch();
   const currentFontSize = useSelector(
      (store: RootState) => store.settings.fontSize
   );

   const isActive = currentFontSize === fontSize;

   const fontSizeChange = (size: `${number}px`) => {
      dispatch(changeFontSize(size));
   };

   return (
      <Button
         style={{ fontSize }}
         className={`${isActive ? "C-focusSpecialBox" : ""}`}
         onClick={() => fontSizeChange(fontSize)}
      >
         {fontSize}
      </Button>
   );
}

export { FontSizeSetting };
