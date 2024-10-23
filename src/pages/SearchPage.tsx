import { Raftable } from "../components/ui/Raftable";
import { SearchBar } from "../components/ui/SearchBar";

import "./SearchPage.scss";

import { raftables } from "./mob device/dummyData";

function SearchPage() {
   return (
      <>
         <h1 className="text-center my-10 font-bold">Raftable search</h1>
         <div className="my-8 max-w-[400px] mx-auto">
            <SearchBar />
         </div>
         <div>
            <ul className="GridRaftables container mx-auto">
               {raftables?.map((raf) => (
                     <Raftable {...raf} />
               ))}
            </ul>
         </div>
      </>
   );
}

export { SearchPage };
