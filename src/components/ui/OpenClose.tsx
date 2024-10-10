import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faCaretUp } from "@fortawesome/free-solid-svg-icons";
import { Col } from "../positional/Cols";
import { LabelRow } from "../positional/Rows";
import { adjustClassName } from "../../functions/helpers";

type OpenCloseProps = {
   title?: string;
   children: React.ReactNode;
   className: string;
};

function OpenClose({ title, children, className }: OpenCloseProps) {
   const [isOpen, setIsOpen] = useState(false);
   return (
      <Col className={`${adjustClassName(className)}`}>
         <LabelRow className={`${adjustClassName(className)} w-max`}>
            <span>{title} </span>
            <button
               className="rounded-xl"
               onClick={() => setIsOpen((isO) => !isO)}
            >
               {isOpen ? (
                  <FontAwesomeIcon icon={faCaretUp} />
               ) : (
                  <FontAwesomeIcon icon={faCaretDown} />
               )}
            </button>
         </LabelRow>
         {isOpen && <div>{children}</div>}
      </Col>
   );
}

export { OpenClose };
