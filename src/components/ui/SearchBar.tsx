import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./SearchBar.scss";
import { useSearchParams } from "react-router-dom";
import { useTranslation } from "react-i18next";

function SearchBar() {
   const {t} = useTranslation();

   const [searchParams, setSearchParams] = useSearchParams();

   const query = searchParams.get("query") || "";

   const setQuery = (query: string) => {
      setSearchParams({ query });
   };

   return (
      <label className="SearchBar flex items-center border C-borderBox p-1 rounded-lg C-bgBox">
         <input
            type="text"
            value={query}
            placeholder={t("search.search")}
            onChange={(e) => {
               setQuery(e.target.value);
            }}
            className="C-borderBox border-r bg-inherit outline-none p-2 flex-grow"
         />
         <div className="px-3 cursor-pointer">
            <FontAwesomeIcon icon={faSearch} />
         </div>
      </label>
   );
}

export { SearchBar };
