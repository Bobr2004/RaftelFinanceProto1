import { Outlet } from "react-router-dom";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { Main } from "./Main";

function Layout() {
   return (
      <div className="lightTheme h-full" id="App"> 
         <Header />
         <Main>
            <Outlet />
         </Main>
         <Footer />
      </div>
   );
}

export { Layout };
