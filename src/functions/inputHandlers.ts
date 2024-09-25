import { stringToNumberOrEmptyString } from "./helpers";

const handleNumberInput =
   (setter: React.Dispatch<React.SetStateAction<any>>) => (value: string) => {
      setter(stringToNumberOrEmptyString(value));
   };

const handleTextInput =
   (setter: React.Dispatch<React.SetStateAction<any>>) => (value: string) => {
      setter(value);
   };
export { handleNumberInput, handleTextInput };
