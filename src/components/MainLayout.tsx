import { PropsWithChildren } from "react";

const MainLayout = (props: PropsWithChildren) => {
  return (
    <div className="container relative md:px-10 flex px-2 pt-24 md:flex-row flex-col items-start justify-start text-white space-y-12">
      {props.children}
    </div>
  );
};

export default MainLayout;
