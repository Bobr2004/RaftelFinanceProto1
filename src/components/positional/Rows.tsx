type RowProps = {
   children: React.ReactNode;
   className?: string;
};

function Row({ children, className }: RowProps) {
   let resultClassName = "gap-4";
   if (className?.includes("gap")) resultClassName = className;
   return <div className={`flex ${resultClassName}`}>{children}</div>;
}

function Row32({ children, className }: RowProps) {
   let resultClassName = "gap-4";
   if (className?.includes("gap")) resultClassName = className;
   return <div className={`grid32 ${resultClassName}`}>{children}</div>;
}

export { Row, Row32 };
