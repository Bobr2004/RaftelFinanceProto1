import { useEffect, useMemo, useState } from "react";
import { InputField } from "../../components/ui/InputField";
import { ContentBox } from "../../components/ui/ContentBox";
import { Col } from "../../components/positional/Cols";
import { handleNumberInput } from "../../functions/inputHandlers";
import { LabelRow, Row, Row32 } from "../../components/positional/Rows";
import { ResultBox } from "../../components/ui/ResultBox";
import { parseCurrency, round2Digits } from "../../functions/helpers";
import { OpenClose } from "../../components/ui/OpenClose";
import { Checkbox } from "../../components/ui/Checkbox";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { Tab } from "../../components/ui/Tab";
import "./animations.scss";

////// Experimental
// import strawHat from "../assets/Straw Hat Icon 147411.svg";
// import { StrawHatIcon } from "../customIcons/StrawHatIcon.tsx";

function MobdevicePage() {
   // Redux state
   const currency = useSelector((store: RootState) => store.settings.currency);
   const [_, currencyName] = useMemo(() => parseCurrency(currency), [currency]);

   // API data
   const description = `Заробітна плата в магазині мобільних аксесуарів MobDevice
                     складається з фіксованої ставки та процентів від продажів.
                     Базова ставка становить 350 грн за день. Крім того,
                     працівник отримує 6% від вартості проданих товарів та 50%
                     від вартості наданих послуг. Середня місячна заробітна
                     плата в MobDevice становить приблизно 19 000 грн.`;

   // Inner States
   const [mode, setMode] = useState<"day" | "month">("day");
   const [isAdvancedMode, setIsAdvancedMode] = useState(false);

   // Days
   const [days, setDays] = useState<number | "">("");
   // Base
   const [totalSimple, setTotalSimple] = useState<number | "">("");
   // Secondary
   const [services, setServices] = useState<number | "">("");

   const totalSimpleRevenue = (Number(totalSimple) - Number(services)) * 0.06;
   const servicesRevenue = Number(services) * 0.5;

   // Advanced
   const [products, setProducts] = useState<number | "">("");
   const productsRevenue = Number(products) * 0.06;
   const [powerBanks, setPowerBanks] = useState<number | "">("");
   const powerBanksRevenue = Number(powerBanks) * 0.05;

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

   const calculateResultRevenue = () => {
      let rateRevenue = 350;
      if (mode === "month") {
         rateRevenue *= Number(days);
      }

      let totalRevenue = 0;
      if (!isAdvancedMode) {
         totalRevenue = productsRevenue + powerBanksRevenue + servicesRevenue;
      } else {
         totalRevenue = totalSimpleRevenue + servicesRevenue;
      }

      return rateRevenue + totalRevenue;
   };
   const resultRevenue = calculateResultRevenue();

   const displayRevenue = (revenue: number) => {
      if (!round2Digits(revenue)) return "";
      return `${round2Digits(revenue)} ${currencyName}`;
   };

   // Test TO DELETE

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
               Day
            </Tab>
            <Tab
               activeTab={mode}
               setActiveTab={setMode}
               {...{ setTriggerAnimnation }}
               tabTitle="month"
            >
               Month
            </Tab>
         </Row>
         <ContentBox
            className={`flex flex-col gap-4 md:max-w-[650px] mx-auto transition05 ${
               isBlurred ? "blurred" : ""
            }`}
         >
            <Row32>
               <Col>
                  {mode === "month" && (
                     <Col>
                        <span className=""> Ставка 350 {currencyName}*</span>
                        <InputField
                           name="Кількість днів"
                           value={days}
                           onChange={handleNumberInput(setDays)}
                           display={displayRevenue(Number(days) * 350)}
                        />
                     </Col>
                  )}
                  <LabelRow className="gap-2 self-start">
                     <span>Швидкий підрахунок</span>
                     <Checkbox
                        isChecked={isAdvancedMode}
                        onChange={() => {
                           setIsAdvancedMode((isC) => !isC);
                        }}
                     />
                  </LabelRow>
                  {!isAdvancedMode ? (
                     <>
                        <InputField
                           name="Товари"
                           value={products}
                           onChange={handleNumberInput(setProducts)}
                           display={displayRevenue(productsRevenue)}
                        />
                        <InputField
                           name="Смарт годиннки"
                           value={powerBanks}
                           onChange={handleNumberInput(setPowerBanks)}
                           display={displayRevenue(powerBanksRevenue)}
                        />
                     </>
                  ) : (
                     <InputField
                        name="Каса"
                        value={totalSimple}
                        onChange={handleNumberInput(setTotalSimple)}
                        display={displayRevenue(totalSimpleRevenue)}
                        info="Вся каса, враховуючи послуги та різні типи товірів"
                     />
                  )}

                  <InputField
                     name="Послуги"
                     value={services}
                     onChange={handleNumberInput(setServices)}
                     display={displayRevenue(servicesRevenue)}
                  />

                  <OpenClose
                     title="Додатково "
                     className="gap-2 self-start w-full"
                  >
                     <span>Antoha</span>
                     {/* <InputField
                        name="Чайові"
                        value={total}
                        onChange={handleNumberInput(setTotal)}
                        info="На чайові не накладається ніякий відсоток"
                     /> */}
                  </OpenClose>
               </Col>
               <Col>
                  <div className="border C-borderBox h-16 overflow-hidden shadow-[inset_0_-2px_4px_rgba(0,0,0,0.6)] p-2">
                     {description}
                  </div>
                  <ResultBox>{round2Digits(resultRevenue)}</ResultBox>
               </Col>
            </Row32>
            <Row className="justify-between C-textSofter">
               <span style={{ fontSize: "0.875em" }}>
                  Київ, Лятошинського 14
               </span>{" "}
               <span style={{ fontSize: "0.875em" }}>Автор таблиці: ???</span>
            </Row>
         </ContentBox>
      </>
   );
}

export { MobdevicePage };
