import CallToAction from "./CallToAction";
import CareersChip from "./CareersChip";
import HeroHeading from "./Heading";

const Hero = () => {
  return (
    <div className="container relative md:px-10 flex px-2 pt-24 md:flex-row flex-col items-start justify-start text-white space-y-12">
      <div className="py-4 md:pt-16 flex flex-col items-start justify-start space-y-4">
        <CareersChip />
        <HeroHeading />
        <CallToAction />
      </div>

      <div className="w-full md:absolute md:top-[14%] md:left-[433px] lg:left-[556px] xl:left-[665px] max-w-[625px] max-h-[100vh]">
        <img
          className="object-contain object-center rounded w-full"
          alt="hero"
          src="/hero/illustration.png"
        />
      </div>
    </div>
  );
};

export default Hero;
