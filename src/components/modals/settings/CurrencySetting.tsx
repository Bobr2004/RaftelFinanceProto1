import { useDispatch, useSelector } from "react-redux";
import { changeCurrency, changeLanguage, currencyType } from "../../../store/settingsSlice";
import { Row, Row23 } from "../../positional/Rows";
import { Button } from "../../ui/Button";
import { RootState } from "../../../store/store";
import { parseCurrency } from "../../../functions/helpers";

function CurrencySetting() {
   return (
      <Row23 className="items-center">
         <span>Розмір Шрифту</span>
         <Row className="flex-wrap">
            <ChangeCurrencyButton currency="UAH-грн-₴" />
            <ChangeCurrencyButton currency="USD-dol-$" />
            <ChangeCurrencyButton currency="BIT-bit-₿" />
         </Row>
      </Row23>
   );
}

type ChangeCurrencyButtonProps = {
   currency: currencyType;
};

function ChangeCurrencyButton({currency }: ChangeCurrencyButtonProps) {
   const dispatch = useDispatch();
   const currentCurrency = useSelector(
      (store: RootState) => store.settings.currency
   );

   const isActive = currentCurrency === currency;

   const currencyChange = (currency: currencyType) => {
      dispatch(changeCurrency(currency));
   };

   const [code, _, symbol] = parseCurrency(currency);

   return (
      <Button
         className={`${isActive ? "C-focusSpecialBox" : ""}`}
         onClick={() => currencyChange(currency)}
      >
         {code} {symbol}
      </Button>
   );
}

export { CurrencySetting };
