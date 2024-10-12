import { Dispatch, SetStateAction } from "react";

type TabProps<T> = {
   children: React.ReactNode;
   className?: string;
   style?: React.CSSProperties;

   activeTab: T;
   setActiveTab: Dispatch<SetStateAction<T>>;
   tabTitle: T;

   setTriggerAnimnation: Dispatch<SetStateAction<boolean>>;
};

function Tab<T>({
   children,
   className,
   style,
   activeTab,
   setActiveTab,
   tabTitle,

   setTriggerAnimnation
}: TabProps<T>) {
   className ??= "";
   const onClick = () => {
      setTriggerAnimnation((s) => !s);
      setTimeout(() => {
         setActiveTab(tabTitle);
      }, 250);
   };
   return (
      <button
         {...{ style, onClick }}
         className={` C-hoverSpecialBox rounded-xl py-2 px-4 text-center  min-w-28 text-center${className} ${
            activeTab === tabTitle ? "underline underline-offset-4" : ""
         }`}
      >
         {children}
      </button>
   );
}

export { Tab };
