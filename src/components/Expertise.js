import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import { SectionHeading } from "components/misc/Headings.js";
import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons.js";
import TonyImage from "assets/2021MFA3511.jpg";

const Container = tw.div`relative`;
const TwoColumn = tw.div`flex flex-col md:flex-row justify-between max-w-screen-xl mx-auto py-10 md:py-12`;
const Column = tw.div`w-full max-w-md mx-auto md:max-w-none md:mx-0`;
const ImageColumn = tw(Column)`md:w-5/12 flex-shrink-0 h-80 md:h-auto relative`;
const TextColumn = styled(Column)(props => [
  tw`md:w-7/12 mt-16 md:mt-0`,
  props.textOnLeft ? tw`md:mr-12 lg:mr-16 md:order-first` : tw`md:ml-12 lg:ml-16 md:order-last`
]);

const ImageContainer = styled.div`
  ${tw`w-auto py-10`}
  img {
    ${tw`border-4 border-accent-50 rounded shadow-xl`}
  }
`;

const TextContent = tw.div`lg:py-8 md:text-left`;

const Heading = tw(SectionHeading)`font-black text-left text-3xl sm:text-4xl lg:text-5xl text-center md:text-left leading-tight`;
const Description = tw.p`font-serif mt-4 text-center md:text-left text-base md:text-base lg:text-lg font-medium leading-relaxed text-accent-50`;

const Statistics = tw.div`flex flex-col items-center sm:block text-center md:text-left mt-4`;
const Statistic = tw.div`text-left sm:inline-block sm:mr-12 last:mr-0 mt-4`;
const Value = tw.div`font-bold text-lg sm:text-xl lg:text-2xl text-secondary-900 tracking-wide`;
const Key = tw.div`font-medium text-tertiary-800`;

const PrimaryButton = tw(PrimaryButtonBase)`mt-8 md:mt-10 text-sm inline-block mx-auto md:mx-0`;

export default ({
  heading = (
    <>
      A Maryland Licensed Forester <wbr /> <span tw="text-secondary-900"> since 1987.</span>
    </>
  ),
  description = "As a Maryland resident and licensed professional forester with 30+ years of experience, I have managed public and private forests across the state. I am a member of various forestry organizations and have received awards for my work.",
  primaryButtonText = "See Accomplishments",
  primaryButtonUrl = "https://google.com",
  imageContainerCss = null,
  imageInsideDiv = true,
  statistics = null,
  textOnLeft = false
}) => {

  const defaultStatistics = [
    {
      key: "Clients",
      value: "2282+"
    },
    {
      key: "Projects",
      value: "3891+"
    },
    {
      key: "Awards",
      value: "1000+"
    }
  ];

  if (!statistics) statistics = defaultStatistics;

  return (
    <Container id='about'>
      <TwoColumn css={!imageInsideDiv && tw`md:items-center`}>
        <ImageColumn css={imageContainerCss}>
          <ImageContainer>
            <img src={TonyImage} alt='Tony DiPaolo at work in woods.'/>
          </ImageContainer>
        </ImageColumn>
        <TextColumn textOnLeft={textOnLeft}>
          <TextContent>
            <Heading>{heading}</Heading>
            <Description>{description}</Description>
            <Statistics>
              {statistics.map((statistic, index) => (
                <Statistic key={index}>
                  <Value>{statistic.value}</Value>
                  <Key>{statistic.key}</Key>
                </Statistic>
              ))}
            </Statistics>
            <PrimaryButton as="a" href={primaryButtonUrl}>
              {primaryButtonText}
            </PrimaryButton>
          </TextContent>
        </TextColumn>
      </TwoColumn>
    </Container>
  );
};
