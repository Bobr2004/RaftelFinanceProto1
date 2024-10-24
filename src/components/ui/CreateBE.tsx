import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { addCustomExpense, addCustomPayment } from "../../store/settingsSlice";
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

   const boxStyles = (type: string) => {
      if (type === "Expense") return "ExpenseBox";

      if (type === "Bonus") return "BonusBox";
      return "";
   };

   const submitCustomBE = () => {
      if (!customBE) {
         leaveAddMode();
         return;
      }
      if (customBE.length < 1 || customBE.length > 20) {
         setError(t("settings.currencyFormat"));
         return;
      }

      if (type === "Bonus") {
         dispatch(
            addCustomPayment({
               raftelId: raftableId,
               payment: {
                  id: generateId(),
                  name: customBE
               }
            })
         );
      }
      else if (type = "Expense") {
         dispatch(
            addCustomExpense({
               raftelId: raftableId,
               payment: {
                  id: generateId(),
                  name: customBE
               }
            })
         );
      }
      leaveAddMode();
   };

   const titleBE = () => {
      if (type === "Bonus") return "Назва доходу";
      if (type === "Expense") return "Назва витрати";
      return "Назва поля";
   };

   return (
      <>
         <Row className="items-start">
            <InputField
               boxStyle={boxStyles(type)}
               name={titleBE()}
               value={customBE}
               onChange={handleTextInput(setCustomBE)}
            />
            <Button className="py-3 w-12 text-center" onClick={submitCustomBE}>
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
