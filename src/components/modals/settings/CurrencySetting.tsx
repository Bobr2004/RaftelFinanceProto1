import { useDispatch, useSelector } from "react-redux";
import {
   addCustomCurrency,
   changeCurrency,
   currencyType,
   deleteCustomCurrency
} from "../../../store/settingsSlice";
import { Row, Row23 } from "../../positional/Rows";
import { Button, ButtonIcon } from "../../ui/Button";
import { RootState } from "../../../store/store";
import { parseCurrency } from "../../../functions/helpers";

// UUID
import { v4 as generateId } from "uuid";
import { InputField } from "../../ui/InputField";
import { useState } from "react";
import { handleTextInput } from "../../../functions/inputHandlers";
import { faCheck, faClose, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type ChangeCurrencyButtonProps = {
   currency: currencyType;
};

function ChangeCurrencyButton({ currency }: ChangeCurrencyButtonProps) {
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
         onClick={() => {
            console.log(generateId());
            currencyChange(currency);
         }}
      >
         {code} {symbol}
      </Button>
   );
}

function CurrencySetting() {
   const customCurrencyList = useSelector(
      (store: RootState) => store.settings.customCurrencyList
   );
   return (
      <Row23 className="item-center">
         <span>Вибір валюти</span>
         <Row className="flex-wrap">
            <ChangeCurrencyButton currency="UAH-грн-₴" />
            <ChangeCurrencyButton currency="USD-dol-$" />
            <ChangeCurrencyButton currency="BTC-bit-₿" />
            {customCurrencyList.map((c) => (
               <CustomChangeCurrencyButton currency={c.currency} id={c.id} />
            ))}
            <Button onClick={() => {}}>
               <FontAwesomeIcon icon={faPlus} />
            </Button>
            <AddNewCurrencyForm />
         </Row>
      </Row23>
   );
}

function AddNewCurrencyForm() {
   const currency = useSelector((store: RootState) => store.settings.currency);
   const [customCurrency, setCustomCurrency] = useState("");

   const dispatch = useDispatch();

   // TODO add currency validation

   const submitCustomCurrency = () => {
      dispatch(
         addCustomCurrency({
            id: generateId(),
            currency: customCurrency as currencyType
         })
      );
   };

   return (
      <Row className="justify-between items-start">
         <InputField
            name="Валюта"
            value={customCurrency}
            onChange={handleTextInput(setCustomCurrency)}
            info={`Формат: ${currency}`}
         />
         <Button className="py-3" onClick={submitCustomCurrency}>
            <FontAwesomeIcon icon={faCheck} />
         </Button>
      </Row>
   );
}

type CustomChangeCurrencyButtonProps = {
   id: string;
   currency: currencyType;
};

function CustomChangeCurrencyButton({
   id,
   currency
}: CustomChangeCurrencyButtonProps) {
   const dispatch = useDispatch();
   const handleDeleteCustomCurrency = () => {
      dispatch(deleteCustomCurrency(id));
   };

   return (
      <div className="relative">
         <ButtonIcon
            className="-top-2 -right-2 absolute text-[0.6em] py-1 px-2 leading-[0.8em]"
            onClick={handleDeleteCustomCurrency}
         >
            <FontAwesomeIcon icon={faClose} />
         </ButtonIcon>
         <ChangeCurrencyButton currency={currency} />
      </div>
   );
}

export { CurrencySetting };
