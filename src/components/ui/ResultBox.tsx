import { useDispatch } from "react-redux";
import { Button } from "./Button";
import { openBill } from "../../store/modalsSlice";

type ResultBoxProps = {
   children: React.ReactNode;
};

function ResultBox({ children }: ResultBoxProps) {
   const dispatch = useDispatch();
   return (
      <div className="C-borderBox border rounded-xl p-4 flex flex-col gap-2 relative">
         <div className="absolute -top-3 left-4 C-bgBox">Result:</div>
         <div className="C-bgTotal C-borderBox border py-1 px-3 text-right">
            {children}₴
         </div>
         <Button
            onClick={() => {
               dispatch(openBill());
            }}
         >
            Generate Bill
         </Button>
      </div>
   );
}

export { ResultBox };
