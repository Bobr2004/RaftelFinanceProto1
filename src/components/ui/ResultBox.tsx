import { useSelector } from "react-redux";
import { Button } from "./Button";
import { RootState } from "../../store/store";
import { parseCurrency } from "../../functions/helpers";
import { useTranslation } from "react-i18next";
import { StrawHatIcon } from "../../customIcons/StrawHatIcon";
import { CSSProperties, useMemo, useState } from "react";

import "../../customIcons/customSvg.scss";
import { Flame } from "../../customIcons/Flame";

type ResultBoxProps = {
   children: React.ReactNode;
   onClick: () => void;
   specialCode?: string;
};

function ResultBox({ children, onClick, specialCode }: ResultBoxProps) {
   const { t } = useTranslation();

   const [customStyles, setCustomStyles] = useState<CSSProperties>({});

   const customSvg = useMemo(() => {
      if (!specialCode) return;
      switch (specialCode) {
         case "Strawhat":
            setCustomStyles((cs) => {
               return { ...cs, marginTop: "0.5rem" };
            });
            return (
               <StrawHatIcon className="absolute -top-5 -right-6 h-12 rotate-[18deg]" />
            );
         case "Akagami":
            setCustomStyles((cs) => {
               return {
                  ...cs,
                  border: "0.5px solid #b91c1c",
                  boxShadow: "2px 2px 3px #dc2626"
               };
            });
            return;
         case "TonyTony":
            setCustomStyles((cs) => {
               return {
                  ...cs,
                  boxShadow: "4px 4px #ea2d7c, -2px -2px #c19bad"
               };
            });
            return;
         case "Portgas":
            setCustomStyles((cs) => {
               return { ...cs, marginTop: "0.5rem" };
            });
            return (
               <Flame className="absolute bottom-5 -left-6 h-6" />
            );
      }
   }, [specialCode]);

   const currency = useSelector((store: RootState) => store.settings.currency);
   const [_, __, symbol] = parseCurrency(currency);
   return (
      <div
         className="C-borderBox border rounded-xl p-4 flex flex-col gap-2 relative resultBox"
         style={customStyles}
      >
         <div className="absolute -top-3 left-4">
            {t("calculation.result")}:
         </div>
         <div className="C-bgTotal C-borderBox border py-1 px-3 text-right">
            {children} {symbol}
         </div>
         <Button onClick={onClick}>{t("calculation.generateBill")}</Button>
         {customSvg}
      </div>
   );
}

export { ResultBox };
