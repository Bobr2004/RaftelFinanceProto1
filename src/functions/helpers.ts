import { currencyType } from "../store/settingsSlice";

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

const parseCurrency = (currency: currencyType) => currency.split("-");

type paymentInputType = {
   id: number;
   order: number;
   name: string;
   percentage: number;
   base?: boolean;
   secondary?: boolean;
   value: "" | number;
};

const getRevenue = (el: paymentInputType) => {
   if (!el.value) return 0;
   return Math.round(Number(el.value) * el.percentage) / 100;
};

function getCurrentDateTime() {
   const now = new Date();

   const year = now.getFullYear();
   const month = String(now.getMonth() + 1).padStart(2, "0"); // Months are zero-based
   const day = String(now.getDate()).padStart(2, "0");

   const hours = String(now.getHours()).padStart(2, "0");
   const minutes = String(now.getMinutes()).padStart(2, "0");
   const seconds = String(now.getSeconds()).padStart(2, "0");
   const time = `${hours}:${minutes}:${seconds}`;

   return [year, month, day, time];
}

export {
   stringToNumberOrEmptyString,
   round2Digits,
   adjustClassName,
   parseCurrency,
   getRevenue,
   getCurrentDateTime
};
