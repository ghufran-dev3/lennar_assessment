import { gql, useMutation } from "@apollo/client";
import MainLayout from "../MainLayout";
import CallToAction from "./CallToAction";
import CareersChip from "./CareersChip";
import HeroHeading from "./Heading";
import HeroContentWrapper from "./HeroContentWrapper";
import HeroIllustration from "./HeroIllustration";
import toast from "react-hot-toast";

const Hero = () => {
  const [createUser] = useMutation(gql`
    mutation CreateUser($input: CreateUserInput!) {
      createUser(input: $input) {
        name
        username
        email
      }
    }
  `);

  const handleCTAClick = (email: string) => {
    createUser({
      variables: {
        input: {
          email,
          name: email.split("@")[0],
          username: email.split("@")[0],
        },
      },
    })
      .then(() => toast.success("Thanks for signing up!"))
      .catch(() => toast.error("Could not sign up. Please Try again after some time."));
  };

  return (
    <MainLayout>
      <HeroContentWrapper>
        <CareersChip />
        <HeroHeading />
        <CallToAction handleCTAClick={handleCTAClick} />
      </HeroContentWrapper>

      <HeroIllustration />
    </MainLayout>
  );
};

export default Hero;
