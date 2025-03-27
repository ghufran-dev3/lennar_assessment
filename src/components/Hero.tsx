import CallToAction from "./CallToAction";
import CareersChip from "./CareersChip";
import HeroHeading from "./Heading";

const Hero = () => {
  return (
    <div className="container md:px-10 flex px-2 pt-24 md:flex-row flex-col items-start justify-start text-white space-y-12">
      <div className="py-4 flex flex-col items-start justify-start space-y-4">
        <CareersChip />
        <HeroHeading />
        <CallToAction />
      </div>

      <div className="lg:max-w-lg w-full md:w-1/2">
        <img
          className="object-contain object-center rounded w-full"
          alt="hero"
          src="/hero/hero-illustration.png"
        />
      </div>
    </div>
  );
};

export default Hero;
