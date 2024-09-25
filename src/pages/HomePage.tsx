import { useState } from "react";
import { InputField, InputFieldWithInfo } from "../components/InputField";
import { ContentBox } from "../components/ContentBox";
import { Col } from "../components/Col";
import { handleNumberInput } from "../functions/inputHandlers";

////// Experimental
// import strawHat from "../assets/Straw Hat Icon 147411.svg";
// import { StrawHatIcon } from "../customIcons/StrawHatIcon.tsx";

function HomePage() {
   const [total, setTotal] = useState<number | "">("");
   const [services, setServices] = useState<number | "">("");

   
   return (
      <div className="flex justify-center">
         <ContentBox className="flex flex-col gap-4 mt-40 w-full md:w-[600px]">
            <h1 className="font-bold text-2xl text-center">
               Mobdevice Revenue
               {/* <StrawHatIcon /> */}
            </h1>
            <div className="grid32 gap-4">
               <Col>
                  <InputFieldWithInfo
                     name="Каса"
                     value={total}
                     onChange={handleNumberInput(setTotal)}
                     display={total}
                     info="Вся каса, враховуючи послуги та різні типи товірів"
                  />
                  <InputField
                     name="Послуги"
                     value={services}
                     onChange={handleNumberInput(setServices)}
                     display={services}
                  />
               </Col>
               <Col>
                  <span>233</span>
               </Col>
            </div>
            <div className="flex justify-between C-textSoft text-sm">
               <span>Київ, Лятошинського 14</span>{" "}
               <span>Автор таблиці: ???</span>
            </div>
         </ContentBox>
      </div>
   );
}

export { HomePage };
