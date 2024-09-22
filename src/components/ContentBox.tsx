type ContentBoxProps = {
   children: React.ReactNode;
   className?: string;
}


function ContentBox({ children, className }: ContentBoxProps) {
   return (
      <div className={`rounded-xl border-stone-600 border bg-stone-900 p-4 ${className}`}>
         {children}
      </div>
   );
}

export { ContentBox };
