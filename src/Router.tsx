import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "./layout/layout";
import { HomePage } from "./pages/HomePage";

function Router() {
   return (
      <BrowserRouter>
         <Routes>
            <Route path="/" element={<Layout />}>
               <Route path="" index element={<HomePage />} />
            </Route>
         </Routes>
      </BrowserRouter>
   );
}

export { Router };
