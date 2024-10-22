import { NavLink } from "react-router-dom";

function NotFound() {
   return (
      <>
         <h1 className="font-bold text-center mb-8 mt-8 md:mt-24 flex flex-col gap-4">
            <span>404</span> <span>Page not found</span>
         </h1>
         <p className="text-center">
            <NavLink to={"/"} className=" underline ">
               Home page
            </NavLink>
         </p>
      </>
   );
}

export { NotFound };
