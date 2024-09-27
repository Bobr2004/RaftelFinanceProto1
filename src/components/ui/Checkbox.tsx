import { faSquare, faSquareCheck } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type CheckBoxProps = {
   isChecked: boolean;
   onChange: () => void;
};

function Checkbox({ isChecked, onChange }: CheckBoxProps) {
   return (
      <label className="cursor-pointer">
         <span>
            {isChecked ? (
               <FontAwesomeIcon icon={faSquareCheck} />
            ) : (
               <FontAwesomeIcon icon={faSquare} />
            )}
         </span>
         <input
            className="hidden"
            type="checkbox"
            name=""
            id=""
            checked={isChecked}
            onChange={onChange}
         />
      </label>
   );
}

export { Checkbox };
