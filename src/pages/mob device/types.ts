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


type RaftableType = {
   id: string;
   place: string;

   rate: number;

   payments: paymentType[];

   specialCode?: string;
};

type TradeMarkType = {
   id: string;
   name: string;
   description: string;
   raftables: RaftableType[];
};

const payments: paymentType[] = [
   { id: 1231, order: 0, name: "Каса", percentage: 6, base: true },
   { id: 1231, order: 1, name: "Товари", percentage: 6 },
   { id: 1232, order: 2, name: "Павербанки та годиннки", percentage: 5 },
   { id: 1234, order: 4, name: "Послуги", percentage: 50, secondary: true }
];
export { payments };

export type { TradeMark };

const TeremkyPayments: paymentType[] = [
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
   { id: 1234, order: 4, name: "Послуги", percentage: 50, secondary: true }
];

// export { TeremkyPayments };

const TeremkyRaftable: RaftableType = {
   id: "da937b90-c9ce-4573-a006-c2c05252e369",
   place: "Київ, Лятошинського, 14",
   rate: 350,

   payments: TeremkyPayments,

   specialCode: "Strawhat"
};

export { TeremkyRaftable };

// Example data
const TradeMark: TradeMarkType = {
   id: "da937b90-c9ce-4573-a006-c2c05752e369",
   name: "Mob Device",
   description: `Заробітна плата в магазині мобільних аксесуарів MobDevice
                     складається з фіксованої ставки та процентів від продажів.
                     Базова ставка становить 350 грн за день. Крім того,
                     працівник отримує 6% від вартості проданих товарів та 50%
                     від вартості наданих послуг. Середня місячна заробітна
                     плата в MobDevice становить приблизно 19 000 грн.`,
   raftables: [TeremkyRaftable]
};
