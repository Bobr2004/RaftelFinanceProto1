import "./InputField.scss";

type InputFieldProps = {
   className?: string;
   display?: any;
};

function InputField({ className, display }: InputFieldProps) {
   return (
      <div className={`InputField gap-4 w-96 ${className} items-center`}>
         <label className={`rounded-xl border border-stone-700 bg-stone-900`}>
            <input type="text" placeholder=" " />
            <span>Кількість послуг</span>
         </label>
         {display && <span>{display}</span>}
      </div>
   );
}

export { InputField };
