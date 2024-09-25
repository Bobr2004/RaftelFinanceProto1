const stringToNumberOrEmptyString = (value: string) => {
   if (value === "") {
      return "";
   } else if (isFinite(Number(value))) {
      return Number(value);
   }
   return "";
};

const round2Digits = (number: number) => Math.round(number * 100) / 100;

export { stringToNumberOrEmptyString, round2Digits };
