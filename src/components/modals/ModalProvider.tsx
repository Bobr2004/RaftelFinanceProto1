import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { Overlay } from "./Overlay";
import { SettingsModal } from "./settings/SettingsModal";

function ModalProvider() {
   const { isOpen, type } = useSelector((store: RootState) => store.modals);
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
            </>
         );
   }
}

export { ModalProvider };
