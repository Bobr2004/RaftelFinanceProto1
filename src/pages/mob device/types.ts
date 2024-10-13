type paymentType = {
   id: number;
   order: number;
   name: string;
   percentage: number;


   // optional
   base?: boolean;
   secondary?: boolean;
};

type BonusType = {
   name: string;
   value: number;
};

type RaftableType = {
   rate: number;
   days: number;

   payments?: paymentType[];

   bonuses: BonusType[];
   expanses: BonusType[];
};

type TradeMark = {
   id: number;
   name: string;
   description: string;
   raftables: RaftableType[];
};

const payments: paymentType[] = [
   { id: 1231, order: 0, name: "Каса", percentage: 6, base: true },
   { id: 1231, order: 1, name: "Товари", percentage: 6 },
   { id: 1232, order: 2, name: "Павербанки", percentage: 5 },
   { id: 1233, order: 3, name: "Годинники", percentage: 5 },
   { id: 1234, order: 4, name: "Послуги", percentage: 50, secondary: true }
];

