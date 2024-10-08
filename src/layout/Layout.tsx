import { Outlet, useSearchParams } from "react-router-dom";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { Main } from "./Main";
import { ModalProvider } from "../components/modals/ModalProvider";

function Layout() {
   const [searchParams] = useSearchParams();
   const themeFromParams = searchParams.get("theme");
   let theme = "dark";
   if (themeFromParams && ["dark", "light"].includes(themeFromParams)) {
      theme = themeFromParams;
   }
   return (
      <div className={`${theme}Theme h-full`} id="App">
         <ModalProvider />
         <Header />
         <Main>
            <Outlet />
         </Main>
         <Footer />
      </div>
   );
}

export { Layout };
