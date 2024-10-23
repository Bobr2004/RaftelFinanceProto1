type paymentType = {
   id: number;
   order: number;
   name: string;
   percentage: number;
   info?: string;

   // optional
   base?: boolean;
   secondary?: boolean;
};

type raftableType = {
   id: number;
   title: string;
   jobTitle: string;
   place: string;
   rate: number;
   percentage: string;

   payments: paymentType[];

   specialCode?: string;
};

const teremkyRaftable = {
   id: 1,
   title: "Mobdevice",
   jobTitle: "Продавець",
   place: "Київ, Лятошинського 14, Теремки 2",
   rate: 350,
   percentage: "6%, 50%",

   specialCode: "Strawhat",

   payments: [
      {
         id: 1231,
         order: 0,
         name: "Каса",
         percentage: 6,
         base: true,
         info: "Вся каса враховуючи послуги та різні типи товарів*"
      },
      { id: 1238, order: 1, name: "Товари", percentage: 6 },
      { id: 1232, order: 2, name: "Павербанки та годиннки", percentage: 5 },
      {
         id: 1234,
         order: 4,
         name: "Послуги",
         percentage: 50,
         secondary: true
      }
   ]
};

const artMallRaftable = {
   id: 2,
   title: "Mobdevice",
   jobTitle: "Продавець",
   place: "Київ, Заболотного 37, Артмолл",
   rate: 350,
   percentage: "6%, 50%",

   payments: [
      {
         id: 1231,
         order: 0,
         name: "Каса",
         percentage: 6,
         base: true,
         info: "Вся каса враховуючи послуги та різні типи товарів*"
      },
      { id: 1238, order: 1, name: "Товари", percentage: 6 },
      { id: 1232, order: 2, name: "Павербанки та годиннки", percentage: 5 },
      {
         id: 1234,
         order: 4,
         name: "Послуги",
         percentage: 50,
         secondary: true
      }
   ]
};

const KeysRaftable = {
   id: 8,
   title: "OS .9",
   jobTitle: "Продавець, майстер",
   place: "Київ, Лятошинського 14, Теремки 2",
   rate: 450,
   percentage: "10%, 100%",

   specialCode: "Akagami",

   payments: [
      {
         id: 1231,
         order: 0,
         name: "Каса",
         percentage: 10,
         base: true,
         info: "Вся каса враховуючи товари та аварійку*"
      },
      { id: 1238, order: 1, name: "Товари", percentage: 10 },
      {
         id: 1234,
         order: 4,
         name: "Аварійка",
         percentage: 100,
         secondary: true
      }
   ]
};

const raftables: raftableType[] = [
   teremkyRaftable, artMallRaftable, KeysRaftable
];


export {raftables};

export type {paymentType, raftableType};
