import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { addCustomPayment } from "../../store/settingsSlice";
import { Row } from "../positional/Rows";
import { InputField } from "./InputField";
import { handleTextInput } from "../../functions/inputHandlers";
import { Button } from "./Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faXmark } from "@fortawesome/free-solid-svg-icons";

import { v4 as generateId } from "uuid";


type CreateBEProps = {
   raftableId: number;
   type: "Bonus" | "Expense";
   leaveAddMode: () => void;
};

function CreateBE({ type, leaveAddMode, raftableId }: CreateBEProps) {
   const { t } = useTranslation();

   const [customBE, setCustomBE] = useState("");
   const [error, setError] = useState("");

   const dispatch = useDispatch();

   const submitCustomCurrency = () => {
      if (!customBE) {
         leaveAddMode();
         return;
      }
      if (customBE.length < 1 || customBE.length > 15) {
         setError(t("settings.currencyFormat"));
         return;
      }

      // dispatch(
      //    type === "Bonus"
      //       ? addCustomPayment({
      //            raftelId: raftableId,
      //            payment: {
      //               id: generateId(),
      //               name: customBE
      //            }
      //         })
      //       : addCustomPayment({})
      // );

      dispatch(addCustomPayment({
         raftelId: raftableId,
         payment: {
            id: generateId(),
            name: customBE
         }
      }))
      leaveAddMode();
   };

   return (
      <>
         <Row className="items-start">
            <InputField
               name={t("settings.currency")}
               value={customBE}
               onChange={handleTextInput(setCustomBE)}
            />
            <Button
               className="py-3 w-12 text-center"
               onClick={submitCustomCurrency}
            >
               <FontAwesomeIcon icon={customBE ? faCheck : faXmark} />
            </Button>
         </Row>
         <div className="text-red-500 -my-2 ml-1" style={{ fontSize: "0.8em" }}>
            {error}
         </div>
      </>
   );
}

export { CreateBE };
