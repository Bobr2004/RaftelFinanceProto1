import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ButtonIcon } from "../ui/Button";
import { ContentBox } from "../ui/ContentBox";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { closeModals } from "../../store/modalsSlice";

type ModalTemplate = {
   children?: React.ReactNode;
   title: string;
};

function ModalTemplate({ children, title }: ModalTemplate) {
   return (
      <div className="C-textBase absoluteCenter p-6 z-30 w-full max-w-[600px]">
         <ContentBox className="w-full relative min-h-40 max-h-[calc(100vh-4rem)] overflow-y-scroll">
            <CloseButton />
            <h2 className="text-center mb-8">{title}</h2>
            {children}
         </ContentBox>
      </div>
   );
}

function CloseButton() {
   const dispatch = useDispatch();

   const onCloseButtonClick = () => {
      dispatch(closeModals());
   };

   return (
      <ButtonIcon
         className="absolute top-2 right-2"
         onClick={onCloseButtonClick}
      >
         <FontAwesomeIcon icon={faClose} />
      </ButtonIcon>
   );
}

export { ModalTemplate };
