import { Outlet } from "react-router-dom";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { Main } from "./Main";
import { ModalProvider } from "../components/modals/ModalProvider";
import { Settings } from "../Settings";

function Layout() {
   return (
      <Settings>
         <ModalProvider />
         <Header />
         <Main>
            <Outlet />
         </Main>
         <Footer />
      </Settings>
   );
}

export { Layout };
