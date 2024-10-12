import { Dispatch, SetStateAction } from "react";

type TabProps<T> = {
   children: React.ReactNode;
   className?: string;
   style?: React.CSSProperties;

   activeTab: T;
   setActiveTab: Dispatch<SetStateAction<T>>;
   tabTitle: T;
};

function Tab<T>({
   children,
   className,
   style,
   activeTab,
   setActiveTab,
   tabTitle
}: TabProps<T>) {
   className ??= "";
   const onClick = () => {
      setActiveTab(tabTitle);
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
