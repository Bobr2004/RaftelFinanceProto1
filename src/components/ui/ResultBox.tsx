import { useSelector } from "react-redux";
import { Button } from "./Button";
import { RootState } from "../../store/store";
import { parseCurrency } from "../../functions/helpers";
import { useTranslation } from "react-i18next";

type ResultBoxProps = {
   children: React.ReactNode;
   onClick: () => void;
};

function ResultBox({ children, onClick }: ResultBoxProps) {

   const { t } = useTranslation();


   const currency = useSelector((store: RootState) => store.settings.currency);
   const [_, __, symbol] = parseCurrency(currency);
   return (
      <div className="C-borderBox border rounded-xl p-4 flex flex-col gap-2 relative">
         <div className="absolute -top-3 left-4 C-bgBox">{t("calculation.result")}:</div>
         <div className="C-bgTotal C-borderBox border py-1 px-3 text-right">
            {children} {symbol}
         </div>
         <Button onClick={onClick}>{t("calculation.generateBill")}</Button>
      </div>
   );
}

export { ResultBox };
