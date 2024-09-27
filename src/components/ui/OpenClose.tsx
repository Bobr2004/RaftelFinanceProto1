import { useState } from "react";
import { Row } from "../positional/Rows";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faCaretUp } from "@fortawesome/free-solid-svg-icons";
import { Col } from "../positional/Cols";

type OpenCloseProps = {
   title?: string;
   children: React.ReactNode;
};

function OpenClose({ title, children }: OpenCloseProps) {
   const [isOpen, setIsOpen] = useState(false);
   return (
      <Col className="gap-2">
         <label className="flex gap-2 cursor-pointer">
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
         </label>
         {isOpen && <div>{children}</div>}
      </Col>
   );
}

export { OpenClose };
