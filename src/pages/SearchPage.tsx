import { Raftable } from "../components/ui/Raftable";
import { SearchBar } from "../components/ui/SearchBar";

import "./SearchPage.scss";

function SearchPage() {
   return (
      <>
        <h1 className="text-center my-10 font-bold">Raftable proto 0.1</h1>
         <div className="my-8 max-w-[400px] mx-auto">
            <SearchBar />
         </div>
         <div className="GridRaftables container mx-auto">
            <Raftable>
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
               voluptas labore aperiam facere, velit quibusdam quia, aspernatur
               commodi nam dolorum dolorem vero harum. Recusandae facere autem
               totam praesentium odio ad nulla nisi ipsa. Quaerat voluptatum
               impedit, corporis aspernatur tempora excepturi!
            </Raftable>
            <Raftable />
            <Raftable />
            <Raftable />
            <Raftable />
            <Raftable />
            <Raftable />
         </div>
      </>
   );
}

export { SearchPage };
