import { adjustClassName } from "../../functions/helpers";

type ColProps = {
   children: React.ReactNode;
   className?: string;
};

function Col({ children, className }: ColProps) {
   return <div className={`flex flex-col ${adjustClassName(className)}`}>{children}</div>;
}

export { Col };
