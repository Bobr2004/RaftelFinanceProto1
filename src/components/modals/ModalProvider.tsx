import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { Overlay } from "./Overlay";
import { SettingsModal } from "./settings/SettingsModal";
import { DescriptionModal } from "./description/DescriptionModal";
import { BillModal } from "./bill/BillModal";

function ModalProvider() {
   const { isOpen, type, data } = useSelector((store: RootState) => store.modals);

   if (!isOpen) return;
   switch (type) {
      case "settings":
         return (
            <>
               <Overlay />
               <SettingsModal />
            </>
         );
      case "bill":
         return (
            <>
               <Overlay />
               <BillModal {...{data}}/>
            </>
         );
      case "description":
         return (
            <>
               <Overlay />
               <DescriptionModal {...{data}}/>
            </>
         );
   }
}

export { ModalProvider };
