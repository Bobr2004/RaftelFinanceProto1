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

   description: string;

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

   description: `Заробітна плата в магазині мобільних аксесуарів MobDevice
                     складається з фіксованої ставки та процентів від продажів.
                     Базова ставка становить 350 грн за день. Крім того,
                     працівник отримує 6% від вартості проданих товарів та 50%
                     від вартості наданих послуг. Середня місячна заробітна
                     плата в MobDevice становить приблизно 19 000 грн.`,

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

   description: `Заробітна плата в магазині мобільних аксесуарів MobDevice
                     складається з фіксованої ставки та процентів від продажів.
                     Базова ставка становить 350 грн за день. Крім того,
                     працівник отримує 6% від вартості проданих товарів та 50%
                     від вартості наданих послуг. Середня місячна заробітна
                     плата в MobDevice становить приблизно 19 000 грн.`,

   specialCode: "Akagami",

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
   jobTitle: "Продавець, ключний майстер",
   place: "Київ, Лятошинського 14, Теремки 2",
   rate: 450,
   percentage: "10%, 100%",

   description: `Заробітна плата в магазині OS .9 складається з фіксованої ставки та процентів від виконаних робіт і продажу товарів. Базова ставка становить 450 грн за день. Крім того, працівник отримує 10% від вартості проданих товарів та 100% від вартості виконаних ремонтних робіт, таких як заміна елементів живлення або виготовлення ключів. Середня місячна заробітна плата в OS .9 становить приблизно 22 000 грн.`,

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
         secondary: true,
         info: "Всі послуги та гегере гегере*"
      }
   ]
};

const VapeShop = {
   id: 10,
   title: "Vape Shop",
   jobTitle: "Продавець, майстер похапать",
   place: "Київ, Лятошинського 14, Теремки 2",
   rate: 650,
   percentage: "5%, 10%",

   specialCode: "Portgas",

   description: `Заробітна плата в магазині OS .9 складається з фіксованої ставки та процентів від виконаних робіт і продажу товарів. Базова ставка становить 450 грн за день. Крім того, працівник отримує 10% від вартості проданих товарів та 100% від вартості виконаних ремонтних робіт, таких як заміна елементів живлення або виготовлення ключів. Середня місячна заробітна плата в OS .9 становить приблизно 22 000 грн.`,

   payments: [
      {
         id: 1231,
         order: 0,
         name: "Каса",
         percentage: 6,
         base: true,
         info: "Всі товари, приблизний відсоток 6%"
      },
      { id: 1238, order: 1, name: "Акцизні товари", percentage: 10 },
      {
         id: 1234,
         order: 4,
         name: "Неакцизні товари",
         percentage: 5
      }
   ]
};

const Yabluka = {
   id: 15,
   title: "Yabluka",
   jobTitle: "Продавець-консультант",
   place: "Київ, Антоновича 176, Ocean plaza",
   rate: 750,
   percentage: "4%, 15%, 50%",

   description: `Заробітна плата в магазині техніки та аксесуарів Apple "Yabluka" складається з фіксованої ставки та процентів від продажів. Базова ставка становить 500 грн за день. Крім того, працівник отримує 8% від вартості проданих товарів, таких як техніка Apple, та 35% від вартості наданих послуг, наприклад, налаштування пристроїв або встановлення програм. Середня місячна заробітна плата у "Yabluka" становить приблизно 24 000 грн.`,

   payments: [
      {
         id: 1231,
         order: 0,
         name: "Каса",
         percentage: 6,
         base: true,
         info: "Всі товари, приблизний відсоток 10%"
      },
      { id: 1238, order: 1, name: "Телефони", percentage: 4 },
      { id: 1238, order: 2, name: "Смарт годдинки", percentage: 10 },
      { id: 1238, order: 4, name: "Акційні товари", percentage: 4 },
      {
         id: 1234,
         order: 5,
         name: "Послуги",
         percentage: 50,
         secondary: true
      }
   ]
};

const Foxtrot = {
   id: 19,
   title: "Фокстрот 🦊",
   jobTitle: "Продавець-консультант",
   place: "Київ, Антоновича 176, Ocean plaza",
   rate: 500,
   percentage: "4%, 10%",

   specialCode: "TonyTony",

   description: `
Заробітна плата в магазині техніки Foxtrot складається з фіксованої ставки та процентів від продажів. Базова ставка становить 450 грн за день. Крім того, працівник отримує 5% від вартості проданих товарів та 40% від вартості додаткових послуг, таких як доставка або установка техніки. Середня місячна заробітна плата в Foxtrot становить приблизно 22 500 грн.`,

   payments: [
      {
         id: 1231,
         order: 0,
         name: "Каса",
         percentage: 5,
         base: true,
         info: "Всі товари, приблизний відсоток 6%"
      },
      { id: 1232, order: 1, name: "Телефони, годинники", percentage: 6 },
      { id: 1233, order: 10, name: "Ноутбуки", percentage: 4 },
      { id: 1234, order: 2, name: "Компʼютерні аксесуари", percentage: 10 },
      { id: 1235, order: 3, name: "Телевізори", percentage: 3 },
      { id: 1236, order: 4, name: "Побутова техніка", percentage: 5 }
   ]
};

const WhiteDry = {
   id: 28,
   title: "Біле Сухе",
   jobTitle: "Помічник продаця",
   place: "Київ, Антоновича 1, Донбас",
   rate: 0,
   percentage: "70 грн/год",

   specialCode: "TonyTony",

   description: `
Заробітна плата в магазині техніки Foxtrot складається з фіксованої ставки та процентів від продажів. Базова ставка становить 450 грн за день. Крім того, працівник отримує 5% від вартості проданих товарів та 40% від вартості додаткових послуг, таких як доставка або установка техніки. Середня місячна заробітна плата в Foxtrot становить приблизно 22 500 грн.`,

   payments: [
      {
         id: 1231,
         order: 0,
         name: "Кількість годин",
         percentage: 7000,
         base: true,
         info: "70 грн година"
      },
      {
         id: 1232,
         order: 1,
         name: "Кількість годин",
         percentage: 7000,
         info: "70 грн година"
      }
   ]
};

const Gigant = {
   id: 43,
   title: "Gigant",
   jobTitle: "Продавець в магазин одягу",
   place: "Лугандонія",
   rate: 1450,
   percentage: "0%",

   description: `
Заробітна плата в магазині техніки Foxtrot складається з фіксованої ставки та процентів від продажів. Базова ставка становить 450 грн за день. Крім того, працівник отримує 5% від вартості проданих товарів та 40% від вартості додаткових послуг, таких як доставка або установка техніки. Середня місячна заробітна плата в Foxtrot становить приблизно 22 500 грн.`,

   payments: []
};

const raftables: raftableType[] = [
   Yabluka,
   Foxtrot,
   artMallRaftable,
   teremkyRaftable,

   KeysRaftable,
   VapeShop,
   WhiteDry,
   Gigant
];

export { raftables };

export type { paymentType, raftableType };
