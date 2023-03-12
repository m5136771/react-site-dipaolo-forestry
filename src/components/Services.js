import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import { SectionHeading, Subheading as SubheadingBase } from "components/misc/Headings.js";
import { SectionDescription } from "components/misc/Typography.js";
import { Container as ContainerBase, ContentWithPaddingXl as ContentPaddingBase } from "components/misc/Layouts.js";
import { ReactComponent as ArrowRightIcon } from "assets/arrow-right-icon.svg";
import AgreementIcon from "assets/agreement.svg";
import ForestIcon from "assets/forest.svg";
import EcologyIcon from "assets/ecology.svg";

const Container =tw(ContainerBase)``;
const ContentWithPaddingXl =tw(ContentPaddingBase)`bg-tertiary shadow-xl rounded-xl`
const Heading = tw(SectionHeading)`text-center text-primary-200`;
const Subheading = tw(SubheadingBase)`text-center mb-3 text-primary`;
const Description = tw(SectionDescription)`text-center mx-auto`;
const ThreeColumnContainer = styled.div`
  ${tw`mt-8 flex flex-col items-center lg:items-stretch lg:flex-row flex-wrap lg:justify-center max-w-screen-lg mx-auto`}
`;
const Column = styled.div`
  ${tw`lg:w-1/3 max-w-xs`}
`;

const Card = styled.a`
  ${tw`flex flex-col items-center text-center h-full mx-4 mt-4 px-4 rounded transition-transform duration-300 hover:cursor-pointer transform hover:scale-105 `}
  .imageContainer {
    ${tw`text-center rounded-full shadow p-4 bg-tertiary-800`}
    img {
      ${tw`w-20 h-20`}
    }
  }

  .title {
    ${tw`mt-4 font-bold text-xl text-primary-200 leading-none`}
  }

  .description {
    ${tw`mt-4 text-sm font-medium text-primary`}
  }

  .link {
    ${tw`mt-auto inline-flex items-center pt-5 text-sm font-bold text-secondary leading-none hocus:text-tertiary-900 transition duration-200`}
    .icon {
      ${tw`ml-2 w-4`}
    }
  }
`;

export default ({
  cards = [
    {
      imageSrc: ForestIcon,
      title: "Forest Management Plans",
      description: "We strictly only deal with vendors that provide top notch security.",
      url: "https://timerse.com"
    },
    {
      imageSrc: AgreementIcon,
      title: "Timber Sales",
      description: "Lorem ipsum donor amet siti ceali placeholder text",
      url: "https://google.com"
    },
    {
      imageSrc: EcologyIcon,
      title: "Sustainable Forestry Consultations",
      description: "Lorem ipsum donor amet siti ceali placeholder text",
      url: "https://reddit.com"
    }
  ],
  linkText = "Learn More",
  heading = "How Can I Help?",
  subheading = "Services",
  description = "",
  imageContainerCss = null,
  imageCss = null
}) => {

  return (
    <Container id='services'>
      <ContentWithPaddingXl>
        {subheading && <Subheading>{subheading}</Subheading>}
        {heading && <Heading>{heading}</Heading>}
        {description && <Description>{description}</Description>}
        <ThreeColumnContainer>
          {cards.map((card, i) => (
            <Column key={i}>
              <Card href={card.url}>
                <span className="imageContainer" css={imageContainerCss}>
                  <img src={card.imageSrc} alt="" css={imageCss} />
                </span>
                <span className="title">{card.title}</span>
                <p className="description">{card.description}</p>
                {linkText && (
                  <span className="link">
                    <span>{linkText}</span>
                    <ArrowRightIcon className="icon" />
                  </span>
                )}
              </Card>
            </Column>
          ))}
        </ThreeColumnContainer>
      </ContentWithPaddingXl>
    </Container>
  );
};
