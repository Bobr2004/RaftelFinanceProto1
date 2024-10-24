import { useMemo } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { parseCurrency } from "../../functions/helpers";
import { ButtonIcon } from "./Button";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./BEInput.scss";

type BEInputProps = {
   type: string;
   name: string;
   value: number | "";
   onChange: (e: string) => void;
   display: number;
   handleDelete: () => void;
};

function BEInput({
   type,
   name,
   value,
   onChange,
   display,
   handleDelete
}: BEInputProps) {
   const currency = useSelector((store: RootState) => store.settings.currency);
   const [_, currencyName] = useMemo(() => parseCurrency(currency), [currency]);

   const renderDisplay = () => {
      if (type === "expense")
         return (
            <span className="overflow-x-scroll whitespace-nowrap ExpenseDisplay">
               {display ? `- ${display} ${currencyName}` : ""}
            </span>
         );
      if (type === "bonus")
         return (
            <span className="overflow-x-scroll whitespace-nowrap BonusDisplay">
               {display ? `+ ${display} ${currencyName}` : ""}
            </span>
         );
      return (
         <span className="overflow-x-scroll whitespace-nowrap">
            {display ? `+ ${display} ${currencyName}` : ""}
         </span>
      );
   };

   const boxStyles = (type: string) => {
      if (type === "expense") return "ExpenseBox";

      if (type === "bonus") return "BonusBox";
      return "";
   };

   return (
      <div className="InputField__Info flex flex-col gap-1">
         <div className={`InputField gap-4 w-full items-center`}>
            <div className="relative">
               {<DeleteCustomBEButton {...{ handleDelete }} />}
               <label
                  className={`C-bgSpecialBox C-borderBox rounded-xl border outline outline-0 C-outlineBox ${boxStyles(type)}`}
               >
                  <input
                     type="number"
                     placeholder=" "
                     value={value}
                     onChange={({ target }) => {
                        onChange(target.value);
                     }}
                  />
                  <span>{name}</span>
               </label>
            </div>
            {display !== undefined && renderDisplay()}
         </div>
      </div>
   );
}

function DeleteCustomBEButton({ handleDelete }: { handleDelete: () => void }) {
   return (
      <ButtonIcon
         className="-top-2 -right-2 absolute text-[0.6em] py-1 !px-2 leading-[0.8em] z-10"
         onClick={handleDelete}
      >
         <FontAwesomeIcon icon={faTrash} />
      </ButtonIcon>
   );
}

export { BEInput };
