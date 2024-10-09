import { faGear } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch } from "react-redux";
import { openSettings } from "../store/modalsSlice";
import { ButtonIcon } from "../components/ui/Button";

function Header() {
   const dispatch = useDispatch();

   const settingsClick = () => {
      dispatch(openSettings());
   };

   return (
      <header className="C-bgBox C-borderBox border-b py-4 px-8 text-center md:text-start flex justify-between items-center">
         <span>Raftel Proto 0.1</span>
         <ButtonIcon onClick={settingsClick}>
            <FontAwesomeIcon icon={faGear} />
         </ButtonIcon>
      </header>
   );
}

export { Header };
