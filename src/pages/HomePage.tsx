import { useState } from "react";
import { InputField } from "../components/ui/InputField";
import { ContentBox } from "../components/ui/ContentBox";
import { Col } from "../components/positional/Cols";
import { handleNumberInput } from "../functions/inputHandlers";
import { LabelRow, Row, Row32 } from "../components/positional/Rows";
import { ResultBox } from "../components/ui/ResultBox";
import { parseCurrency, round2Digits } from "../functions/helpers";
import { OpenClose } from "../components/ui/OpenClose";
import { Button } from "../components/ui/Button";
import { Checkbox } from "../components/ui/Checkbox";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";

////// Experimental
// import strawHat from "../assets/Straw Hat Icon 147411.svg";
// import { StrawHatIcon } from "../customIcons/StrawHatIcon.tsx";

function HomePage() {
   const [total, setTotal] = useState<number | "">("");
   const [services, setServices] = useState<number | "">("");

   const totalRevenue = (Number(total) - Number(services)) * 0.06;
   const servicesRevenue = Number(services) / 2;

   const resultRevenue = 350 + totalRevenue + servicesRevenue;

   const displayRevenue = (revenue: number) => {
      if (!round2Digits(revenue)) return "";
      return `${round2Digits(revenue)} ${currencyName}`;
   };

   // Test TO DELETE
   const [isChecked, setIsChecked] = useState(false);
   const currency = useSelector((store: RootState) => store.settings.currency);
   const [_, currencyName] = parseCurrency(currency);
   return (
      <>
         <h1 className="font-bold text-center mb-8 mt-8 md:mt-24">
            Mobdevice Revenue
         </h1>
         <ContentBox className="flex flex-col gap-4 md:max-w-[650px] mx-auto">
            <Row className="items-center">
               <span>Підрахунок </span>
               <Button>Day</Button>
               <Button>Month</Button>
            </Row>
            <Row32>
               <Col>
                  <LabelRow className="gap-2 self-start">
                     <span>Advanced</span>
                     <Checkbox
                        isChecked={isChecked}
                        onChange={() => {
                           setIsChecked((isC) => !isC);
                        }}
                     />
                  </LabelRow>
                  {isChecked && "oleg lsp - proect oxxymirona"}

                  <InputField
                     name="Каса"
                     value={total}
                     onChange={handleNumberInput(setTotal)}
                     display={displayRevenue(totalRevenue)}
                     info="Вся каса, враховуючи послуги та різні типи товірів"
                  />
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
                     <InputField
                        name="Чайові"
                        value={total}
                        onChange={handleNumberInput(setTotal)}
                        info="На чайові не накладається ніякий відсоток"
                     />
                  </OpenClose>
               </Col>
               <Col>
                  <ResultBox>{round2Digits(resultRevenue)}</ResultBox>
               </Col>
            </Row32>
            <Row className="justify-between C-textSoft text-sm">
               <span>Київ, Лятошинського 14</span>{" "}
               <span>Автор таблиці: ???</span>
            </Row>
         </ContentBox>
      </>
   );
}

export { HomePage };
