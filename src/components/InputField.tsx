import "./InputField.scss";

type InputFieldProps = {
   name: string;
   value: number | "";
   onChange: (e: string) => void;
   className?: string;
   display?: any;
};

function InputField({
   name,
   value,
   onChange,
   className,
   display
}: InputFieldProps) {
   return (
      <div className={`InputField gap-4 w-full items-center ${className}`}>
         <div className="relative">
            <label
               className={`rounded-xl border border-stone-700 bg-stone-900`}
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
            <span className="overflow-x-scroll text-stone-400">
               {display && "+"}
               {display}
            </span>
         )}
      </div>
   );
}

function InputFieldWithInfo({
   name,
   value,
   onChange,
   className,
   display,
   info
}: InputFieldProps & { info: string }) {
   return (
      <div className="InputField__Info flex flex-col gap-1 -mb-3">
         <div className={`InputField gap-4 w-full items-center ${className}`}>
            <div className="relative">
               <InfoButton className="InputField__Info-hover" />
               <label
                  className={`rounded-xl border border-stone-700 bg-stone-900`}
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
               <span className="overflow-x-scroll text-stone-400">
                  {display && "+"}
                  {display}
               </span>
            )}
         </div>
         <div className="InputField__Info-display text-xs opacity-[0.03] text-stone-400 px-1">
            {info}
         </div>
      </div>
   );
}

function InfoButton({ className }: { className?: string }) {
   return (
      <button
         className={`rounded-lg border border-stone-700 h-5 w-5 absolute -right-1 -top-1 z-10 bg-stone-800 opacity-60 hover:opacity-95 text-stone-200 text-xs ${className}`}
      >
         i
      </button>
   );
}

export { InputField, InputFieldWithInfo };
