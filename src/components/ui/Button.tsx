type ButtonProps = {
   children: React.ReactNode;
   className?: string;
};

function Button({ children, className }: ButtonProps) {
   className ??= "";
   return <button className={`C-bgBox C-borderBox rounded-xl border py-2 px-4 text-center ${className}`}>{children}</button>;
}

export { Button };
