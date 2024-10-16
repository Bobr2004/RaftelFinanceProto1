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
import {
   faCheck,
   faPlus,
   faTrash,
   faXmark
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTranslation } from "react-i18next";

function CurrencySetting() {
   const { t } = useTranslation();
   const customCurrencyList = useSelector(
      (store: RootState) => store.settings.customCurrencyList
   );
   const [isAddMode, setIsAddMode] = useState(false);
   return (
      <Row23 className={`items-start`}>
         <span className="mt-1">{t("settings.selectedCurrency")}</span>
         <Row className="flex-wrap">
            <ChangeCurrencyButton currency="UAH-грн-₴" />
            <ChangeCurrencyButton currency="USD-dol-$" />
            <ChangeCurrencyButton currency="BTC-bit-₿" />
            {customCurrencyList.map((c) => (
               <CustomChangeCurrencyButton currency={c.currency} id={c.id} />
            ))}
            {isAddMode ? (
               <AddNewCurrencyForm {...{ setIsAddMode }} />
            ) : (
               <Button
                  onClick={() => {
                     setIsAddMode(true);
                  }}
               >
                  <FontAwesomeIcon icon={faPlus} />
               </Button>
            )}
         </Row>
      </Row23>
   );
}

type AddNewCurrencyFormType = {
   setIsAddMode: React.Dispatch<React.SetStateAction<boolean>>;
};

function AddNewCurrencyForm({ setIsAddMode }: AddNewCurrencyFormType) {
   const { t } = useTranslation();

   const currency = useSelector((store: RootState) => store.settings.currency);
   const [customCurrency, setCustomCurrency] = useState("");
   const [error, setError] = useState("");

   const dispatch = useDispatch();

   // TODO add currency validation

   const submitCustomCurrency = () => {
      if (!customCurrency) {
         setIsAddMode(false);
         return;
      }

      const currencyArray = customCurrency.split("-");
      if (currencyArray.length !== 3) {
         setError(t("settings.currencyFormat"));
         return;
      }
      for (let curEl of currencyArray) {
         if (curEl.length < 1 || curEl.length > 4) {
            setError(t("settings.currencyFormat"));
            return;
         }
      }

      dispatch(
         addCustomCurrency({
            id: generateId(),
            currency: customCurrency as currencyType
         })
      );
      setIsAddMode(false);
   };

   return (
      <>
         <Row className="justify-between items-start">
            <InputField
               name={t("settings.currency")}
               value={customCurrency}
               onChange={handleTextInput(setCustomCurrency)}
               info={`${t("settings.currencyFormat")}: ${currency}`}
            />
            <Button
               className="py-3 w-12 text-center"
               onClick={submitCustomCurrency}
            >
               <FontAwesomeIcon icon={customCurrency ? faCheck : faXmark} />
            </Button>
         </Row>
         <div className="text-red-500 -my-2 ml-1" style={{ fontSize: "0.8em" }}>
            {error}
         </div>
      </>
   );
}

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

type CustomChangeCurrencyButtonProps = {
   id: string;
   currency: currencyType;
};

function CustomChangeCurrencyButton({
   id,
   currency
}: CustomChangeCurrencyButtonProps) {
   const currentCurrency = useSelector(
      (store: RootState) => store.settings.currency
   );

   const dispatch = useDispatch();

   const handleDeleteCustomCurrency = () => {
      if (currency === currentCurrency) dispatch(changeCurrency("UAH-грн-₴"));
      dispatch(deleteCustomCurrency(id));
   };

   return (
      <div className="relative">
         <ButtonIcon
            className="-top-2 -right-2 absolute text-[0.6em] py-1 !px-2 leading-[0.8em]"
            onClick={handleDeleteCustomCurrency}
         >
            <FontAwesomeIcon icon={faTrash} />
         </ButtonIcon>
         <ChangeCurrencyButton currency={currency} />
      </div>
   );
}

export { CurrencySetting };
