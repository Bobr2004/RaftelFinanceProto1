import { useState } from "react";
import { InputField, InputFieldWithInfo } from "../components/InputField";
import { stringToNumberOrEmptyString } from "../functions/helpers";
import { ContentBox } from "../components/ContentBox";
import { Col } from "../components/Col";

////// Experimental
// import strawHat from "../assets/Straw Hat Icon 147411.svg";
// import { StrawHatIcon } from "../customIcons/StrawHatIcon.tsx";

function HomePage() {
   const [total, setTotal] = useState<number | "">("");
   const [services, setServices] = useState<number | "">("");

   const handleChange =
      (setter: React.Dispatch<React.SetStateAction<any>>) =>
      (value: string) => {
         setter(stringToNumberOrEmptyString(value));
      };
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
                     onChange={handleChange(setTotal)}
                     display={total}
                     info="Вся каса, враховуючи послуги та різні типи товірів"
                  />
                  <InputField
                     name="Послуги"
                     value={services}
                     onChange={handleChange(setServices)}
                     display={services}
                  />
               </Col>
               <Col>
                  <span>233</span>
                  {/* <InputField
                     name="Виручка"
                     value={223}
                     onChange={handleChange(setTotal)}
                  /> */}
               </Col>
            </div>
            <div className="flex justify-between text-stone-400 text-sm">
               <span>Київ, Лятошинського 14</span>{" "}
               <span>Автор таблиці: ???</span>
            </div>
         </ContentBox>
      </div>
   );
}

export { HomePage };
