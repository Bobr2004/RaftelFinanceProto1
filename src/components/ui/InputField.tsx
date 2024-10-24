import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./InputField.scss";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";

type InputFieldProps = {
   name: string;
   value: number | "" | string;
   onChange: (e: string) => void;
   className?: string;
   display?: any;
   info?: string;
   boxStyle?: string;
};

function InputField({
   name,
   value,
   onChange,
   className,
   display,
   info,
   boxStyle
}: InputFieldProps) {
   className ??= "";
   return (
      <div className="InputField__Info flex flex-col gap-1 -mb-2">
         <div className={`InputField gap-4 w-full items-center ${className}`}>
            <div className="relative">
               {info && <InfoButton className="InputField__Info-hover" />}
               <label
                  className={`C-bgSpecialBox C-borderBox rounded-xl border outline outline-0 C-outlineBox ${boxStyle}`}
               >
                  <input
                     type="text"
                     placeholder=" "
                     value={value}
                     onChange={({ target }) => {
                        onChange(target.value);
                     }}
                  />
                  <span>{name}</span>
               </label>
            </div>
            {display !== undefined && (
               <span className="C-textSofter overflow-x-scroll whitespace-nowrap">
                  {display && "+"}
                  {display}
               </span>
            )}
         </div>
         <div className="InputField__Info-display C-textSoft text-xs px-1">
            {info}
         </div>
      </div>
   );
}

function InfoButton({ className }: { className?: string }) {
   return (
      <button
         className={`C-textSoft  rounded-lg h-5 w-5 absolute -right-1 -top-2 z-10 opacity-85 hover:opacity-100 text-lg ${className}`}
      >
         <FontAwesomeIcon icon={faCircleInfo} />
      </button>
   );
}

export { InputField };
