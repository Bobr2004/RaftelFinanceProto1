type ColProps = {
   children: React.ReactNode;
   className?: string;
};

function Col({ children, className }: ColProps) {
   let resultClassName = "gap-4";
   if (className?.includes("gap")) resultClassName = className;
   return <div className={`flex flex-col ${resultClassName}`}>{children}</div>;
}

export { Col };
