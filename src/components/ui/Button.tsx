type ButtonProps = {
   children: React.ReactNode;
   className?: string;
   onClick?: () => void;
};

function Button({ children, className, onClick }: ButtonProps) {
   className ??= "";
   return (
      <button
         className={`C-bgBox C-borderBox rounded-xl border py-2 px-4 text-center ${className}`}
         onClick={onClick}
      >
         {children}
      </button>
   );
}

export { Button };
