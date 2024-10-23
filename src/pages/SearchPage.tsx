import { useCallback } from "react";
import { Raftable } from "../components/ui/Raftable";
import { SearchBar } from "../components/ui/SearchBar";

import "./SearchPage.scss";

import { raftables, raftableType } from "./mob device/dummyData";
import { useSearchParams } from "react-router-dom";

function SearchPage() {
   const [searchParams] = useSearchParams();

   const query = searchParams.get("query") || "";

   const satisfiesQueryRaftable = useCallback(
      (raf: raftableType) => {
         if (raf.title.toLocaleLowerCase().includes(query.toLocaleLowerCase())) return true;
         if (raf.place.toLocaleLowerCase().includes(query.toLocaleLowerCase())) return true;
         return false;
      },
      [query]
   );

   const displayRaftables = () => raftables.filter(satisfiesQueryRaftable);
   return (
      <>
         <h1 className="text-center my-10 font-bold">Raftable search</h1>
         <div className="my-8 max-w-[400px] mx-auto w-[315px] md:w-full">
            <SearchBar />
         </div>
         <div>
            <ul className="GridRaftables container mx-auto">
               {displayRaftables()?.map((raf) => (
                  <Raftable {...raf} />
               ))}
            </ul>
         </div>
      </>
   );
}

export { SearchPage };
