import MainLayout from "../MainLayout";
import CallToAction from "./CallToAction";
import CareersChip from "./CareersChip";
import HeroHeading from "./Heading";
import HeroContentWrapper from "./HeroContentWrapper";
import HeroIllustration from "./HeroIllustration";

const Hero = () => {
  return (
    <MainLayout>
      <HeroContentWrapper>
        <CareersChip />
        <HeroHeading />
        <CallToAction />
      </HeroContentWrapper>

      <HeroIllustration />
    </MainLayout>
  );
};

export default Hero;
