type ButtonProps = {
   children: React.ReactNode;
   className?: string;
   onClick?: () => void;
};

function Button({ children, className, onClick }: ButtonProps) {
   className ??= "";
   return (
      <button
         className={`C-bgSpecialBox C-hoverSpecialBox C-borderBox C-hoverBorderBox rounded-xl border py-2 px-4 text-center ${className}`}
         onClick={onClick}
      >
         {children}
      </button>
   );
}

function ButtonIcon({ children, className, onClick }: ButtonProps) {
   className ??= "";
   return (
      <button
         className={`C-bgSpecialBox C-hoverSpecialBox C-borderBox C-hoverBorderBox rounded-xl border py-1 px-3 text-center ${className}`}
         onClick={onClick}
      >
         {children}
      </button>
   );
}

export { Button, ButtonIcon };
