type ContentBoxProps = {
   children: React.ReactNode;
   className?: string;
};

function ContentBox({ children, className }: ContentBoxProps) {
   return (
      <div className={`C-bgBox C-borderBox rounded-xl border p-4 ${className}`}>
         {children}
      </div>
   );
}

export { ContentBox };
