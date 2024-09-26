const stringToNumberOrEmptyString = (value: string) => {
   if (value === "") {
      return "";
   } else if (isFinite(Number(value))) {
      return Number(value);
   }
   return "";
};

const round2Digits = (number: number) => Math.round(number * 100) / 100;

const adjustClassName = (className?: string) => {
   if (!className) return "gap-4";
   if (className.includes("gap")) {
      return className;
   }
   return `${className} gap-4`;
};

export { stringToNumberOrEmptyString, round2Digits, adjustClassName };
