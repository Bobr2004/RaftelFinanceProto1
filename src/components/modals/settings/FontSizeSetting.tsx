import { useDispatch, useSelector } from "react-redux";
import { changeFontSize } from "../../../store/settingsSlice";
import { Row, Row23 } from "../../positional/Rows";
import { Button } from "../../ui/Button";
import { RootState } from "../../../store/store";

function FontSizeSetting() {
   return (
      <Row23 className="items-center">
         <span>Розмір Шрифту</span>
         <Row className="flex-wrap">
            <ChangeFontSizeButton className="text-[14px]" fontSize="14px" />
            <ChangeFontSizeButton className="text-[16px]" fontSize="16px" />
            <ChangeFontSizeButton className="text-[18px]" fontSize="18px" />
         </Row>
      </Row23>
   );
}
type ChangeFontSizeButtonProps = {
   className: string;
   fontSize: "14px" | "16px" | "18px";
};

function ChangeFontSizeButton({
   className,
   fontSize
}: ChangeFontSizeButtonProps) {
   const dispatch = useDispatch();
   const currentFontSize = useSelector(
      (store: RootState) => store.settings.fontSize
   );

   const isActive = currentFontSize === fontSize;

   const fontSizeChange = (size: "14px" | "16px" | "18px") => {
      dispatch(changeFontSize(size));
   };

   return (
      <Button
         className={`${className} ${isActive ? "C-focusSpecialBox" : ""}`}
         onClick={() => fontSizeChange(fontSize)}
      >
         {fontSize}
      </Button>
   );
}

export { FontSizeSetting };
