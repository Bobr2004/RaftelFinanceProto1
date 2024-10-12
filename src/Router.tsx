import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "./layout/Layout";
import { MobdevicePage } from "./pages/mob device/MobdevicePage";

function Router() {
   return (
      <BrowserRouter>
         <Routes>
            <Route path="/"element={<Layout />}>
               <Route path="/mobdevice" index element={<MobdevicePage />} />
            </Route>
         </Routes>
      </BrowserRouter>
   );
}

export { Router };
