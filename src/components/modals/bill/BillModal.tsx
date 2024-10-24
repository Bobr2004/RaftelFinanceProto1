import { CSSProperties, useMemo, useRef, useState } from "react";
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
import { toPng } from "html-to-image";

import StrawHat from "/images/Strawhat.png";
import Akagami from "/images/Akagami.png";

type paymentType = {
   name: string;
   value: number | "";
   percentage: number;
   order: number;
};

type BEType = {
   name: string;
   value: number | "";
};

type megaNigger = {
   specialCode?: string;
   rate: number;
   days: number;
   payments: paymentType[];
   bonuses: BEType[];
   expenses: BEType[];
   result: number;
};

function BillModal({ data }: { data: megaNigger }) {
   const { t } = useTranslation();

   const paymentsList = useMemo(() => [...data.payments].sort(), []);

   const bonusesRevenue =
      data.bonuses.reduce((acc, el) => acc + Number(el.value), 0) || "";
   const expensesRevenue =
      data.expenses.reduce((acc, el) => acc + Number(el.value), 0) || "";

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

   const receiptRef = useRef<HTMLDivElement>(null);

   const [shareError, setShareError] = useState(false);

   const downloadReceiptAsImage = async () => {
      if (receiptRef.current === null) {
         return;
      }
      try {
         const dataUrl = await toPng(receiptRef.current);
         const link = document.createElement("a");
         link.href = dataUrl;
         link.download = `receipt${day}.${month}.png`;
         document.body.appendChild(link);
         link.click();
         document.body.removeChild(link);
      } catch (error) {
         console.error("Failed to generate image", error);
      }
   };

   const shareReceiptAsImage = async () => {
      if (receiptRef.current === null) {
         return;
      }

      try {
         const dataUrl = await toPng(receiptRef.current);
         if (
            navigator.canShare &&
            navigator.canShare({ files: [new File([], "receipt.png")] })
         ) {
            const response = await fetch(dataUrl);
            const blob = await response.blob();
            const file = new File([blob], `receipt${day}.${month}.png`, {
               type: "image/png"
            });

            console.log(file);

            await navigator.share({
               files: [file],
               title: "Receipt"
            });
         } else {
            setShareError(true);
         }
      } catch (error) {
         console.error("Failed to generate image", error);
      }
   };

   const customBackground = useMemo<CSSProperties>(() => {
      if (!data.specialCode) return {};
      switch (data.specialCode) {
         case "Strawhat":
            return {
               background: `url(${StrawHat}) 0% 100% / 50% no-repeat`
            };
         case "Akagami":
            return {
               background: `url(${Akagami}) 0% 100% / 50% no-repeat`
            };
      }
      return {};
   }, []);

   return (
      <ModalTemplate title={t("bill.billTitle")}>
         <Row32>
            {/* <div className="flex justify-center"> */}
            <div className="overflow-x-scroll border C-borderBox flex justify-center">
               <div
                  className="!bg-white !text-black text-[14px] flex flex-col gap-1 p-4 w-[300px] relative z-40"
                  ref={receiptRef}
               >
                  <div
                     className="absolute opacity-20 inset-0 z-10"
                     style={customBackground}
                  ></div>
                  <div className="text-center">
                     <h4>ТОВ ОТК "Raftel"</h4>
                     <div>м.Київ, вул.Максимовчиа, 28</div>
                     <div>{t("bill.phone")} 098337281</div>
                     <div>ПН 39571623222</div>
                  </div>
                  <BillDivider />
                  {/* {JSON.stringify(data)} */}
                  <ul className="billList">
                     {rateRevenue}
                     {paymentsList.map((el: any, i: any) => (
                        <li key={i}>
                           <BillComplexRow
                              name={el.name}
                              value={el.value}
                              percentage={el.percentage}
                              isSimplifiedForm={isSimplifiedForm}
                           />
                        </li>
                     ))}
                     {isSimplifiedForm ? (
                        <>
                           {bonusesRevenue && (
                              <BillRow
                                 name={"Додаткові доходи"}
                                 value={bonusesRevenue}
                              />
                           )}
                           {expensesRevenue && (
                              <BillRow
                                 name={"Додаткові витрати"}
                                 value={expensesRevenue}
                              />
                           )}
                        </>
                     ) : (
                        <>
                           {data?.bonuses.map((el: any, i: any) => (
                              <li key={i}>
                                 <BillRow name={el.name} value={el.value} />
                              </li>
                           ))}
                           {data?.expenses.map((el: any, i: any) => (
                              <li key={i}>
                                 <BillRow name={el.name} value={el.value} />
                              </li>
                           ))}
                        </>
                     )}
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
                        {t("bill.date")}: {day}.{month}.{year}
                     </span>{" "}
                     <span>
                        {t("bill.time")}: {time}
                     </span>
                  </p>
                  <p className="text-center">{t("bill.fiscalСheck")}</p>
               </div>
            </div>
            {/* </div> */}
            <Col>
               <LabelRow className="gap-2 self-start">
                  <span>{t("bill.simpleForm")}</span>
                  <Checkbox
                     isChecked={isSimplifiedForm}
                     onChange={() => {
                        setIsSimplifiedForm((isS) => !isS);
                     }}
                  />
               </LabelRow>
               <InputField
                  name={t("bill.recipient")}
                  info="Необовʼязково"
                  value={receiver}
                  onChange={handleTextInput(setReceiver)}
               />
               <Button onClick={shareReceiptAsImage}>
                  {t("bill.share")}{" "}
                  <FontAwesomeIcon icon={faShare} className="ml-3" />
               </Button>
               {shareError && (
                  <div
                     className="text-red-500 -my-2 ml-1 text-center"
                     style={{ fontSize: "0.8em" }}
                  >
                     {t("bill.notSupported")}
                  </div>
               )}
               <Button onClick={downloadReceiptAsImage}>
                  {t("bill.save")}{" "}
                  <FontAwesomeIcon icon={faSave} className="ml-3" />
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
   const { t } = useTranslation();
   if (!receiver) return;
   return (
      <>
         <p className="-mt-1 flex gap-1">
            <span>{t("bill.recipient")}:</span> <span>{receiver}</span>
         </p>
         <p className="-mt-1">
            <BillDivider />
         </p>
      </>
   );
}

function BillRow({ name, value }: { name: string; value: any }) {
   const currency = useSelector((store: RootState) => store.settings.currency);
   const [_, currencyName] = useMemo(() => parseCurrency(currency), [currency]);
   return (
      <div className="flex justify-between gap-1">
         <span>{name}:</span>{" "}
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
      <div className="flex justify-between gap-1 text-[12px] px-2 -mt-2">
         <span> - {name}:</span> <span className="text-nowrap">{value}</span>
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
            <BillSubRow name={t("bill.total")} value={`${value}`} />
            <BillSubRow
               name={t("bill.percentage")}
               value={`${percentage}%`}
               noCurrency
            />
         </div>
      );
}

export { BillModal };
