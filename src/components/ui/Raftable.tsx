import { Link } from "react-router-dom";
import { Row } from "../positional/Rows";
import { raftableType } from "../../pages/mob device/dummyData";

function Raftable({
   id,
   title,
   jobTitle,
   place,
   rate,
   percentage
}: raftableType) {
   return (
      <Link
         to={`raftable/${id}`}
         className="C-borderBox border rounded-lg p-4 w-full C-bgBox C-hoverBorderBox C-hoverSpecialBox cursor-pointer"
      >
         <h3 className="mb-2">{title}</h3>
         <p>{jobTitle}</p>
         <ul className="flex justify-between ">
            <li title="Ставка">Стака: {rate}</li>
            <li title="Процент від продажу">{percentage}</li>
         </ul>
         <Row className="justify-between C-textSofter">
            <span style={{ fontSize: "0.875em" }} className="-mb-2">
               {place}
            </span>{" "}
         </Row>
      </Link>
   );
}

export { Raftable };
