import { InputField } from "../components/InputField";

function HomePage() {
   return (
      <div className="flex justify-center">
         <div className="mt-40 flex flex-col gap-4 bg-stone-900 p-4 border rounded-xl border-stone-600 w-max">
          <InputField display={"display"}/>
         </div>
      </div>
   );
}

export { HomePage };
