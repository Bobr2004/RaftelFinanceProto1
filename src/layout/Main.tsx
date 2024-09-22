type MainProps = {
   children: React.ReactNode;
};

function Main({ children }: MainProps) {
   return (
      <main className="bg-stone-950">
         <div className="container mx-auto p-4">{children}</div>
      </main>
   );
}

export { Main };
