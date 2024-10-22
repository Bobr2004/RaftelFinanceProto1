import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./SearchBar.scss";

function SearchBar() {
   return (
      <label className="SearchBar flex items-center border C-borderBox p-1 rounded-lg C-bgBox">
         <input
            type="text"
            placeholder="Search"
            className="C-borderBox border-r bg-inherit outline-none p-2 flex-grow"
         />
         <div className="px-3 cursor-pointer">
            <FontAwesomeIcon icon={faSearch} />
         </div>
      </label>
   );
}

export { SearchBar };
