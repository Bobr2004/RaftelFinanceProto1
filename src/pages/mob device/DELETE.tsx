import { useState } from "react";

const initialState = [];

const reduser = (state, action) => {
   if (action.payload.type === "clear") return initialState;
   const {type} = action.payload;
   
};

function DELETE() {
   const [obj, setObj] = useState<PaymentInputComponentProps[]>([]);

   setObj((ob) => [
      ...obj.filter((e) => e.id !== 29),
      { id: 29, order: 1, name: "Oleg" }
   ]);

   return <div>DELETE</div>;
}

type PaymentInputComponentProps = {
   id: number;
   order: number;

   name: string;
   percentage: number;
   base?: boolean;
   secondary?: boolean;
};

function PaymentInputComponent(props: PaymentInputComponentProps) {
   return <input />;
}

export default DELETE;
