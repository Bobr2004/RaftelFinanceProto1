import { useState } from "react";
import { InputField, InputFieldWithInfo } from "../components/ui/InputField";
import { ContentBox } from "../components/ui/ContentBox";
import { Col } from "../components/positional/Cols";
import { handleNumberInput } from "../functions/inputHandlers";
import { Row32 } from "../components/positional/Rows";
import { ResultBox } from "../components/ui/ResultBox";
import { round2Digits } from "../functions/helpers";

////// Experimental
// import strawHat from "../assets/Straw Hat Icon 147411.svg";
// import { StrawHatIcon } from "../customIcons/StrawHatIcon.tsx";

function HomePage() {
   const [total, setTotal] = useState<number | "">("");
   const [services, setServices] = useState<number | "">("");

   const totalRevenue = (Number(total) - Number(services)) * 0.06;
   const servicesRevenue = Number(services) / 2;

   console.log(totalRevenue)

   const resultRevenue = 350 + totalRevenue + servicesRevenue;

   return (
      <div className="flex justify-center m-4 md:mt-36">
         <ContentBox className="flex flex-col gap-4 md:max-w-[650px]">
            <h1 className="font-bold text-2xl text-center">
               Mobdevice Revenue
               {/* <StrawHatIcon /> */}
            </h1>
            <Row32>
               <Col>
                  <InputFieldWithInfo
                     name="Каса"
                     value={total}
                     onChange={handleNumberInput(setTotal)}
                     display={round2Digits(totalRevenue) || ""}
                     info="Вся каса, враховуючи послуги та різні типи товірів"
                  />
                  <InputField
                     name="Послуги"
                     value={services}
                     onChange={handleNumberInput(setServices)}
                     display={round2Digits(totalRevenue) || ""}
                  />
               </Col>
               <Col>
                  <ResultBox>{round2Digits(resultRevenue)}</ResultBox>
               </Col>
            </Row32>
            <div className="flex justify-between C-textSoft text-sm">
               <span>Київ, Лятошинського 14</span>{" "}
               <span>Автор таблиці: ???</span>
            </div>
         </ContentBox>
      </div>
   );
}

export { HomePage };
