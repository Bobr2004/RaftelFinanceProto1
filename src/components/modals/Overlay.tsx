import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeModals } from "../../store/modalsSlice";

type OverlayProps = {
   children?: React.ReactNode;
};

function Overlay({ children }: OverlayProps) {
   const dispatch = useDispatch();

   useEffect(() => {
      const body = document.querySelector("body");
      if (body) body.style.overflow = "hidden";
      return () => {
         if (body) body.style.overflow = "scroll";
      };
   }, []);

   const onOverlayClick = () => {
      dispatch(closeModals());
   };
   return (
      <div
         className="absolute z-20 inset-0 w-screen h-screen bg-black opacity-40 "
         onClick={onOverlayClick}
      >
         {children}
      </div>
   );
}

export { Overlay };
