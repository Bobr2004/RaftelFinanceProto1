import { adjustClassName } from "../../functions/helpers";

type RowProps = {
   children: React.ReactNode;
   className?: string;
};

function Row({ children, className }: RowProps) {
   return (
      <div className={`flex ${adjustClassName(className)}`}>{children}</div>
   );
}
function LabelRow({ children, className }: RowProps) {
   return (
      <label
         className={`inline-flex cursor-pointer ${adjustClassName(className)}`}
      >
         {children}
      </label>
   );
}

function Row32({ children, className }: RowProps) {
   return (
      <div className={`grid32 ${adjustClassName(className)}`}>{children}</div>
   );
}

export { Row, Row32, LabelRow };
