const stringToNumberOrEmptyString = (value: string) => {
   if (value === "") {
      return "";
   } else if (isFinite(Number(value))) {
      return Number(value);
   }
   return ""
};


export {stringToNumberOrEmptyString}

