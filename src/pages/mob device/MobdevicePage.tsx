import { useEffect, useMemo, useState } from "react";
import { InputField } from "../../components/ui/InputField";
import { ContentBox } from "../../components/ui/ContentBox";
import { Col } from "../../components/positional/Cols";
import { handleNumberInput } from "../../functions/inputHandlers";
import { LabelRow, Row, Row32 } from "../../components/positional/Rows";
import { ResultBox } from "../../components/ui/ResultBox";
import {
   getRevenue,
   parseCurrency,
   round2Digits
} from "../../functions/helpers";
import { OpenClose } from "../../components/ui/OpenClose";
import { Checkbox } from "../../components/ui/Checkbox";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { Tab } from "../../components/ui/Tab";
import "./animations.scss";
import { openBill, openDescription } from "../../store/modalsSlice";
import { Button, ButtonIcon } from "../../components/ui/Button";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoins } from "@fortawesome/free-solid-svg-icons";
import { PaymentInput } from "../../components/ui/PaymentInput";
import { TeremkyRaftable } from "./types";
import { useSearchParams } from "react-router-dom";

////// Experimental
// import strawHat from "../assets/Straw Hat Icon 147411.svg";
// import { StrawHatIcon } from "../customIcons/StrawHatIcon.tsx";

// type optionalFieldType = {
//    id: string,
//    name: string,

// }

type paymentInputType = {
   id: number;
   order: number;
   name: string;
   percentage: number;
   base?: boolean;
   secondary?: boolean;
   value: "" | number;
};

function MobdevicePage() {
   // Redux state
   const currency = useSelector((store: RootState) => store.settings.currency);
   const [_, currencyName] = useMemo(() => parseCurrency(currency), [currency]);
   const dispatch = useDispatch();

   const { t } = useTranslation();

   // API data
   const description = `Заробітна плата в магазині мобільних аксесуарів MobDevice
                     складається з фіксованої ставки та процентів від продажів.
                     Базова ставка становить 350 грн за день. Крім того,
                     працівник отримує 6% від вартості проданих товарів та 50%
                     від вартості наданих послуг. Середня місячна заробітна
                     плата в MobDevice становить приблизно 19 000 грн.`;

   // Inner States
   const [searchParams, setSearchParams] = useSearchParams();

   const mode: "month" | "day" = useMemo(() => {
      const searchMode = searchParams.get("mode") || "";
      if (searchMode === "month" || searchMode === "day") return searchMode;
      return "day";
   }, [searchParams]);

   const setMode = (mode: "month" | "day") => {
      setSearchParams({ mode });
   };

   const [isSimplifiedMode, setIsSimplifiedMode] = useState(true);

   // Days
   const [days, setDays] = useState<number | "">("");

   const rate = TeremkyRaftable.rate;

   // Payments
   const [paymentInputs, setPaymentInputs] = useState<paymentInputType[]>(
      () => {
         return TeremkyRaftable.payments.map((py) => {
            return { value: "", ...py };
         });
      }
   );

   const baseRevenue = useMemo(() => {
      const baseIn = paymentInputs.find((el) => el.base);
      if (!baseIn) return 0;
      return (
         Math.round(
            paymentInputs.reduce((acc, ell) => {
               if (ell.secondary) return acc - Number(ell.value);
               return acc;
            }, Number(baseIn.value)) * baseIn.percentage
         ) / 100
      );
   }, [paymentInputs]);

   const displayInputs = useMemo(() => {
      if (!isSimplifiedMode) return paymentInputs.filter((py) => !py.base);
      return paymentInputs.filter((py) => py.base || py.secondary);
   }, [paymentInputs, isSimplifiedMode]);

   const changeValue = (id: number) => (value: string) => {
      let valueToSet: "" | number = "";
      if (value) valueToSet = Number(value);
      setPaymentInputs((pys) =>
         pys.map((py) => (py.id === id ? { ...py, value: valueToSet } : py))
      );
   };

   // Optional
   const [optional, setOptional] = useState<number | "">("");

   // Animations
   const [isBlurred, setIsBlurred] = useState(false);
   const [triggerAnimation, setTriggerAnimnation] = useState(false);

   const triggerBlur = () => {
      setIsBlurred(true);
      setTimeout(() => {
         setIsBlurred(false);
      }, 500);
   };

   useEffect(() => {
      triggerBlur();
   }, [triggerAnimation]);

   useEffect(() => {
      clearFields();
      setIsSimplifiedMode(mode === "day");
   }, [mode]);

   const calculateResultRevenue = () => {
      let rateRevenue = rate;
      if (mode === "month" && days) rateRevenue *= days;
      return (
         rateRevenue +
         displayInputs.reduce((acc, el) => acc + getRevenue(el), 0)
      );
   };

   const displayRevenue = (revenue: number) => {
      if (!round2Digits(revenue)) return "";
      return `${round2Digits(revenue)} ${currencyName}`;
   };

   const clearFields = () => {
      setDays("");
      setPaymentInputs((pys) =>
         pys.map((el) => {
            return { ...el, value: "" };
         })
      );
   };

   const calculateRevenueObject = () => {
      const revenueObj = [
         {
            rate,
            days: mode === "month" ? days : 0,
            payments: displayInputs.map((py) => {
               return {
                  name: py.name,
                  value: py.value,
                  percentage: py.percentage,
                  order: py.order
               };
            }),
            bonuses: [],
            expenses: [],
            result: calculateResultRevenue()
         }
      ];
      return revenueObj;
   };

   return (
      <>
         <h1 className="font-bold text-center mb-8 mt-8 md:mt-24">
            Mobdevice Revenue
         </h1>
         <Row className="justify-center md:max-w-[650px] mx-auto mb-2">
            <Tab
               activeTab={mode}
               setActiveTab={setMode}
               {...{ setTriggerAnimnation }}
               tabTitle="day"
            >
               {t("calculation.day")}
            </Tab>
            <Tab
               activeTab={mode}
               setActiveTab={setMode}
               {...{ setTriggerAnimnation }}
               tabTitle="month"
            >
               {t("calculation.month")}
            </Tab>
         </Row>
         <ContentBox
            className={`flex flex-col gap-4 md:max-w-[650px] mx-auto transition05 mb-8 md:mb-12 ${
               isBlurred ? "blurred" : ""
            }`}
         >
            <Row32>
               <Col>
                  {mode === "month" && (
                     <Col>
                        <span className="ml-1 C-textSoft">
                           {t("calculation.rate")} {rate} {currencyName}*
                        </span>
                        <InputField
                           name={t("calculation.numberOfDays")}
                           value={days}
                           onChange={handleNumberInput(setDays)}
                           display={displayRevenue(Number(days) * rate)}
                        />
                     </Col>
                  )}
                  <LabelRow className="gap-2 self-start">
                     <span>{t("calculation.simplifiedCalculation")}</span>
                     <Checkbox
                        isChecked={isSimplifiedMode}
                        onChange={() => {
                           setIsSimplifiedMode((isC) => !isC);
                        }}
                     />
                  </LabelRow>
                  <ul className="flex flex-col gap-4">
                     {displayInputs.map((py) => (
                        <li key={py.order}>
                           <PaymentInput
                              name={py.name}
                              value={py.value}
                              onChange={changeValue(py.id)}
                              display={py.base ? baseRevenue : getRevenue(py)}
                           />
                        </li>
                     ))}
                  </ul>
                  <OpenClose
                     title={t("calculation.optional")}
                     className="gap-2 self-start w-full"
                  >
                     <Col>
                        <InputField
                           name={t("calculation.bonus")}
                           value={optional}
                           onChange={handleNumberInput(setOptional)}
                           display={displayRevenue(Number(optional))}
                        />
                        <InputField
                           name={t("calculation.tax")}
                           value={optional}
                           onChange={handleNumberInput(setOptional)}
                           display={displayRevenue(Number(optional))}
                        />
                        <Row className="!grid !grid-cols-2 text-[0.8em]">
                           <ButtonIcon>
                              {t("calculation.addIncome")}{" "}
                              <FontAwesomeIcon
                                 className="text-green-500"
                                 icon={faCoins}
                              />
                           </ButtonIcon>
                           <ButtonIcon>
                              {t("calculation.addExpense")}{" "}
                              <FontAwesomeIcon
                                 className="text-red-500"
                                 icon={faCoins}
                              />
                           </ButtonIcon>
                        </Row>
                     </Col>
                  </OpenClose>
               </Col>
               <Col>
                  <div
                     onClick={() => {
                        dispatch(openDescription());
                     }}
                     className="relative border C-borderBox h-16 overflow-hidden p-2 cursor-pointer descriptionBox"
                  >
                     <span
                        className="absolute bottom-2 right-2"
                        style={{ fontSize: "1.5em" }}
                     >
                        ...
                     </span>
                     <span>{description}</span>
                  </div>
                  <ResultBox
                     onClick={() =>
                        dispatch(openBill(calculateRevenueObject()))
                     }
                  >
                     {calculateResultRevenue()}
                  </ResultBox>
                  <div className="text-center">
                     <Button
                        className="!px-12"
                        onClick={() => {
                           clearFields();
                        }}
                     >
                        Clear
                     </Button>
                  </div>
               </Col>
            </Row32>
            <Row className="justify-between C-textSofter">
               <span style={{ fontSize: "0.875em" }}>
                  {TeremkyRaftable.place}
               </span>{" "}
               <span style={{ fontSize: "0.875em" }}>
                  {t("calculation.tableAuthor")}: ??
               </span>
            </Row>
         </ContentBox>
      </>
   );
}

export { MobdevicePage };
