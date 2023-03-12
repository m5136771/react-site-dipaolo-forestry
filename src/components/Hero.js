import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line

import Header, { NavLinks } from "components/constants/Header.js";
import ResponsiveVideoEmbed from "../helpers/ResponsiveVideoEmbed.js";
import HeroImgSrc from "../assets/daniel-sessler-_3DI_vx2ygg-unsplash.jpg";

const Container = styled.div`
  ${tw`relative -mx-8 -mt-8 bg-center bg-cover`}
  background-image: url(${HeroImgSrc});
`;

const OpacityOverlay = tw.div`z-10 absolute inset-0 bg-primary-500 opacity-50`;

const HeroContainer = tw.div`z-20 relative px-4 sm:px-8 max-w-screen-xl mx-auto`;
const TwoColumn = tw.div`pt-24 pb-32 px-4 flex justify-between items-center flex-col lg:flex-row`;
const LeftColumn = tw.div`flex flex-col items-center lg:block`;
const RightColumn = tw.div`w-full sm:w-5/6 lg:w-1/2 mt-16 lg:mt-0 lg:pl-8`;

const Heading = styled.h1`
  ${tw`font-special text-center lg:text-left text-6xl font-black text-accent-50 leading-none`}
  span {
    ${tw`inline-block mt-2`}
  }
`;

const SlantedBackground = styled.span`
  ${tw`text-6xl relative text-primary-600 px-4 -mx-4 py-2`}
  &::before {
    content: "";
    ${tw`absolute inset-0 bg-accent-50 transform -skew-x-12 -z-10`}
  }
`;

const PrimaryAction = tw.button`px-8 py-3 mt-10 text-sm sm:text-base sm:mt-16 sm:px-8 sm:py-4 bg-tertiary-800 text-accent font-bold rounded shadow transition duration-200 hocus:bg-accent hocus:text-tertiary-800 focus:shadow-outline`;

const StyledResponsiveVideoEmbed = styled(ResponsiveVideoEmbed)`
  padding-bottom: 56.25% !important;
  padding-top: 0px !important;
  ${tw`rounded`}
  iframe {
    ${tw`rounded bg-black shadow-xl`}
  }
`;

export default () => {

  return (
    <Container>
      <OpacityOverlay />
      <HeroContainer>
        <Header />
        <NavLinks />
        <TwoColumn>
          <LeftColumn>
            <Heading>
              <span>The Best Solutions</span>
              <br />
              <SlantedBackground>For Your Forest.</SlantedBackground>
            </Heading>
            <PrimaryAction>My Services</PrimaryAction>
          </LeftColumn>
          <RightColumn>
            <StyledResponsiveVideoEmbed
              url="https://www.youtube.com/embed/zwflaaZ6HNo?title=0&portrait=0&byline=0&autoplay=0&responsive=1"
              background="black"
            />
          </RightColumn>
        </TwoColumn>
      </HeroContainer>
    </Container>
  );
};
