import { useMemo, useState } from "react";
import { Col } from "../../positional/Cols";
import { ModalTemplate } from "../ModalTemplate";
import { RootState } from "../../../store/store";
import { useSelector } from "react-redux";
import {
   getCurrentDateTime,
   parseCurrency,
   round2Digits
} from "../../../functions/helpers";
//
import "./bill.scss";
import { LabelRow, Row32 } from "../../positional/Rows";
import { InputField } from "../../ui/InputField";
import { handleTextInput } from "../../../functions/inputHandlers";
import { Button } from "../../ui/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSave, faShare } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";
import { Checkbox } from "../../ui/Checkbox";

type paymentType = {
   name: string;
   value: number | "";
   percentage: number;
   order: number;
};

type megaNigger = {
   rate: number;
   days: number;
   payments: paymentType[];
   bonuses: paymentType[];
   expenses: paymentType[];
   result: number;
};

function BillModal({ data }: { data: megaNigger }) {
   const { t } = useTranslation();

   const paymentsList = useMemo(() => [...data.payments].sort(), []);

   const [receiver, setReceiver] = useState("");

   const [isSimplifiedForm, setIsSimplifiedForm] = useState(true);

   const [year, month, day, time] = useMemo(() => {
      return getCurrentDateTime();
   }, []);

   const rateRevenue = useMemo(() => {
      if (!data.days)
         return (
            <li>
               <BillRow name={t("bill.rate")} value={data.rate} />
            </li>
         );
      return (
         <li className="flex flex-col">
            <BillRow
               name={`${t("bill.rate")} ${t("bill.revenue")}`}
               value={round2Digits(data.rate * data.days)}
            />
            <BillSubRow name={t("bill.rate")} value={data.rate} />
            <BillSubRow name={t("bill.days")} value={data.days} noCurrency />
         </li>
      );
   }, []);

   return (
      <ModalTemplate title={t("bill.billTitle")}>
         <Row32>
            <div className="!bg-white !text-black text-[14px] flex flex-col gap-1 p-4 w-[300px] border C-borderBox">
               <div className="text-center">
                  <h4>ТОВ ОТК "Raftel"</h4>
                  <div>м.Київ, вул.Максимовчиа, 28</div>
                  <div>тел. 098337281</div>
                  <div>ПН 39571623222</div>
               </div>
               <BillDivider />
               {/* {JSON.stringify(data)} */}
               <ul className="billList">
                  {rateRevenue}
                  {paymentsList &&
                     paymentsList.map((el: any, i: any) => (
                        <li key={i}>
                           <BillComplexRow
                              name={el.name}
                              value={el.value}
                              percentage={el.percentage}
                              isSimplifiedForm={isSimplifiedForm}
                           />
                        </li>
                     ))}
                  <li>
                     <BillRow name={t("bill.result")} value={data.result} />
                  </li>
               </ul>
               <div>
                  <BillDivider />
                  <BillRecevier receiver={receiver} />
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
               <LabelRow className="gap-2 self-start">
                  <span>{t("calculation.simplifiedCalculation")}</span>
                  <Checkbox
                     isChecked={isSimplifiedForm}
                     onChange={() => {
                        setIsSimplifiedForm((isS) => !isS);
                     }}
                  />
               </LabelRow>
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
         </Row32>
      </ModalTemplate>
   );
}

function BillDivider() {
   return <p className="text-center">------------------------------------</p>;
}

function BillRecevier({ receiver }: { receiver: string }) {
   if (!receiver) return;
   return (
      <>
         <p>Отримувач: {receiver}</p>
         <BillDivider />
      </>
   );
}

function BillRow({ name, value }: { name: string; value: any }) {
   const currency = useSelector((store: RootState) => store.settings.currency);
   const [_, currencyName] = useMemo(() => parseCurrency(currency), [currency]);
   return (
      <div className="flex justify-between gap-1">
         <span>{name}</span>{" "}
         <span className="font-medium text-nowrap">{`${value} ${currencyName}`}</span>
      </div>
   );
}

function BillSubRow({
   name,
   value,
   noCurrency
}: {
   name: string;
   value: any;
   noCurrency?: boolean;
}) {
   const currency = useSelector((store: RootState) => store.settings.currency);
   const [_, currencyName] = useMemo(() => parseCurrency(currency), [currency]);
   value = noCurrency ? value : `${value} ${currencyName}`;
   return (
      <div className="flex justify-between gap-1 text-[12px] pl-2 -mt-2">
         <span> - {name}</span> <span className="text-nowrap">{value}</span>
      </div>
   );
}

function BillComplexRow({
   name,
   value,
   percentage,
   isSimplifiedForm
}: {
   name: string;
   value: number;
   percentage: number;
   isSimplifiedForm: boolean;
}) {
   const { t } = useTranslation();
   if (!value) return;
   if (isSimplifiedForm)
      return (
         <BillRow
            name={name}
            value={round2Digits((value * percentage) / 100)}
         />
      );
   else
      return (
         <div className="flex flex-col gap-1">
            <BillRow
               name={name}
               value={round2Digits((value * percentage) / 100)}
            />
            <BillSubRow name={`${t("bill.total")} ${name}`} value={`${value}`} />
         </div>
      );
}

export { BillModal };
