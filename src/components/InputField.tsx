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
      <div className={`InputField gap-4 w-full ${className} items-center`}>
         <label className={`rounded-xl border border-stone-700 bg-stone-900`}>
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
         {(display !== undefined) && <span className="overflow-x-scroll text-stone-400">{display && "+"}{display}</span>}
      </div>
   );
}

export { InputField };
