type MainProps = {
   children: JSX.Element;
};

function Main({ children }: MainProps) {
   return <main className="container mx-auto">{children}</main>;
}

export { Main };
