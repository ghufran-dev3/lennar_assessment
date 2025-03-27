import { PropsWithChildren } from "react";

const HeroContentWrapper = (props: PropsWithChildren) => {
  return (
    <div className="py-4 md:pt-16 flex flex-col items-start justify-start space-y-4">
      {props.children}
    </div>
  );
};

export default HeroContentWrapper;
