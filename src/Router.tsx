import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "./layout/Layout";
import { RaftablePage } from "./pages/mob device/RaftablePage";
import { NotFound } from "./pages/NotFound";
import { SearchPage } from "./pages/SearchPage";

function Router() {
   return (
      <BrowserRouter>
         <Routes>
            <Route path="/" element={<Layout />}>
               <Route path="" index element={<SearchPage/>} />
               <Route path="raftable/:id" element={<RaftablePage />} />
               <Route path="*" element={<NotFound />} />
            </Route>
         </Routes>
      </BrowserRouter>
   );
}

export { Router };
