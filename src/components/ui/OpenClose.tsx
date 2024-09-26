import { useState } from "react";
import { Row } from "../positional/Rows";

type OpenCloseProps = {
   title?: string;
   children: React.ReactNode;
};

function OpenClose({ title, children }: OpenCloseProps) {
   const [isOpen, setIsOpen] = useState(false);
   return (
      <div className="flex flex-col gap-2">
         <Row>
            <span>{title} </span>
            <button
               className="C-bgBox C-borderBox border rounded-xl px-4"
               onClick={() => setIsOpen((isO) => !isO)}
            >
               {isOpen ? "-" : "+"}
            </button>
         </Row>
         {isOpen && <div>{children}</div>}
      </div>
   );
}

export { OpenClose };
