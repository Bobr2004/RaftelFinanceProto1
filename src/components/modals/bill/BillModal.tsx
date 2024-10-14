import { useMemo, useState } from "react";
import { Col } from "../../positional/Cols";
import { ModalTemplate } from "../ModalTemplate";
import { RootState } from "../../../store/store";
import { useSelector } from "react-redux";
import { parseCurrency } from "../../../functions/helpers";
//
import "./bill.scss";
import { Row32 } from "../../positional/Rows";
import { InputField } from "../../ui/InputField";
import { handleTextInput } from "../../../functions/inputHandlers";
import { Button } from "../../ui/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSave, faShare } from "@fortawesome/free-solid-svg-icons";

function BillModal({ data }: { data: any }) {
   const currency = useSelector((store: RootState) => store.settings.currency);
   const [_, currencyName] = useMemo(() => parseCurrency(currency), [currency]);

   const billList = Object.entries(data);

   const [receiver, setReceiver] = useState("");

   function getCurrentDateTime() {
      const now = new Date();

      const year = now.getFullYear();
      const month = String(now.getMonth() + 1).padStart(2, "0"); // Months are zero-based
      const day = String(now.getDate()).padStart(2, "0");

      const hours = String(now.getHours()).padStart(2, "0");
      const minutes = String(now.getMinutes()).padStart(2, "0");
      const seconds = String(now.getSeconds()).padStart(2, "0");
      const time = `${hours}:${minutes}:${seconds}`;

      return [year, month, day, time];
   }
   const [year, month, day, time] = useMemo(() => {
      return getCurrentDateTime();
   }, []);

   return (
      <ModalTemplate title={"Розрахунковий чек"}>
         <Row32>
            <div className="!bg-white !text-black text-sm flex flex-col gap-1 p-4 w-[300px] border C-borderBox">
               <div className="text-center">
                  <h4>ТОВ ОТК "Raftel"</h4>
                  <div>м.Київ, вул.Максимовчиа, 28</div>
                  <div>тел. 098337281</div>
                  <div>ПН 39571623222</div>
               </div>
               <p className="text-center">
                  ------------------------------------
               </p>
               <ul className="billList">
                  {billList &&
                     billList.map((el: any, i: any) => (
                        <li key={i} className="flex justify-between">
                           {el[0]}{" "}
                           <span>
                              {el[1]}{" "}
                              {el[0] !== "Відпрацьовано днів:" && currencyName}
                           </span>
                        </li>
                     ))}
               </ul>
               <div>
                  <p className="text-center">
                     ------------------------------------
                  </p>
                  {receiver && <p>Отримувач: {receiver}</p>}
                  {receiver && (
                     <p className="text-center">
                        ------------------------------------
                     </p>
                  )}
               </div>
               <p className="flex justify-between">
                  <span>
                     Дата: {day}.{month}.{year}
                  </span>{" "}
                  <span>Час: {time}</span>
               </p>
               <p className="text-center">Фіксальний чек</p>
            </div>
            <Col>
               <InputField
                  name="Отримувач"
                  info="Необовʼязково"
                  value={receiver}
                  onChange={handleTextInput(setReceiver)}
               />
               <Button>
                  Поділитися <FontAwesomeIcon icon={faShare} className="ml-3" />
               </Button>
               <Button>
                  Зберегти <FontAwesomeIcon icon={faSave} className="ml-3" />
               </Button>
            </Col>
            {/* {JSON.stringify(data)}
            {JSON.stringify(Object.entries(data))} */}
            {/* {Object.entries(data).map((value: any, i: any) => {
               <div key={i}>
                  {value[0]} {value[1]}
               </div>;
            })} */}
            {/* <Row23 className="items-center">
                  <span>Візуальна тема</span>
                  <Row className="flex-wrap">
                     <Button>Світла</Button>
                     <Button>Темна</Button>
                  </Row>
               </Row23>
               <Row23 className="items-center">
                  <span>Розмір Шрифту</span>
                  <Row className="flex-wrap">
                     <Button className="text-[14px]">14px</Button>
                     <Button className="text-[16px]">16px</Button>
                     <Button className="text-[18px]">18px</Button>
                  </Row>
               </Row23> */}
         </Row32>
      </ModalTemplate>
   );
}

export { BillModal };
