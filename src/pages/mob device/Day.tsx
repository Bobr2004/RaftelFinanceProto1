import { useMemo, useState } from "react";
import { InputField } from "../../components/ui/InputField";
import { handleNumberInput } from "../../functions/inputHandlers";
import { parseCurrency, round2Digits } from "../../functions/helpers";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

function Day() {
   // Redux
   const currency = useSelector((store: RootState) => store.settings.currency);
   const [_, currencyName] = useMemo(() => parseCurrency(currency), [currency]);

   // States
   const [total, setTotal] = useState<number | "">("");
   const [services, setServices] = useState<number | "">("");

   // Derrived
   const totalRevenue = (Number(total) - Number(services)) * 0.06;
   const servicesRevenue = Number(services) / 2;

   const displayRevenue = (revenue: number) => {
      if (!round2Digits(revenue)) return "";
      return `${round2Digits(revenue)} ${currencyName}`;
   };

   return (
      <>
         <InputField
            name="Каса"
            value={total}
            onChange={handleNumberInput(setTotal)}
            display={displayRevenue(totalRevenue)}
            info="Вся каса, враховуючи послуги та різні типи товірів"
         />
         <InputField
            name="Послуги"
            value={services}
            onChange={handleNumberInput(setServices)}
            display={displayRevenue(servicesRevenue)}
         />
      </>
   );
}

export { Day };
