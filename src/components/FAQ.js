import React, { useState } from "react";
import { motion } from "framer-motion";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import { SectionHeading, Subheading as SubheadingBase } from "components/misc/Headings.js";
import { ReactComponent as PlusIcon } from "feather-icons/dist/icons/plus.svg";
import { ReactComponent as MinusIcon } from "feather-icons/dist/icons/minus.svg";
import ForestImage from 'assets/johny-goerend-N7MEKSdIbVg-unsplash.jpg';

const Container = tw.div`relative`;
const Content = tw.div`max-w-screen-xl mx-auto py-16 lg:py-20`;

const TwoColumn = tw.div`flex`;
const Column = tw.div``;

const ImageContainer = styled.div`
  ${tw`w-full`}
  img {
    ${tw`bg-contain bg-no-repeat border-4 border-accent-50 rounded shadow-xl`}
  }
`;

const FAQContent = tw.div`lg:mr-12`;
const Subheading = tw(SubheadingBase)`mb-4 text-center lg:text-left`;
const Heading = tw(SectionHeading)`text-center lg:text-left`;
const Description = tw.p`max-w-xl text-center mx-auto lg:mx-0 lg:text-left lg:max-w-none leading-relaxed text-sm sm:text-base lg:text-lg font-medium mt-4 text-accent-50`;

const FAQSContainer = tw.dl`mt-12`;
const FAQ = tw.div`cursor-pointer mt-8 select-none border lg:border-0 px-8 py-4 lg:p-0 rounded-lg lg:rounded-none`;
const Question = tw.dt`flex justify-between items-center`;
const QuestionText = tw.span`text-tertiary-800 hocus:text-accent text-lg lg:text-xl font-semibold`;
const QuestionToggleIcon = styled.span`
  ${tw`ml-2 bg-tertiary-800 text-accent p-1 rounded-full group-hover:bg-accent group-hover:text-tertiary-800 transition duration-300`}
  svg {
    ${tw`w-4 h-4`}
  }
`;
const Answer = motion(tw.dd`pointer-events-none text-tertiary-800 text-xl font-serif sm:text-base leading-relaxed`);

export default ({
  subheading = "",
  heading = "Questions",
  description = "",
  faqs = null
}) => {

  const defaultFaqs = [
    {
      question: "How much money can I make selling my trees?",
      answer:
        "The value of your trees depends on various factors such as species, volume, quality, and market demand. As a private consultant forester, I can assess your trees and give you an estimate of their value."
    },
    {
      question: "How long does it take to sell my trees?",
      answer:
        "The length of time it takes to sell your trees depends on various factors such as market demand, accessibility, and legal requirements. As a private consultant forester, I can help expedite the process and ensure that you get a fair price for your trees."
    },
    {
      question: "Will selling my trees harm the environment?",
      answer:
        "Sustainable forestry practices ensure that the environment is not harmed during the logging process. As a private consultant forester, I prioritize environmentally responsible logging and can provide you with information on how to sell your trees in an environmentally conscious manner."
    },
    {
      question: "Will harvesting timber damage my property?",
      answer:
        "Harvesting timber can be done in a way that minimizes damage to your property. We can work together to develop a harvesting plan that takes into account your goals for your land, the health of your remaining trees, and the potential impact on wildlife and the environment."
    },
    {
      question: "Do I need a permit to sell my trees?",
      answer:
        "It depends on the location and size of your timber sale. I can help you navigate the permitting process and ensure that all necessary permits are obtained."
    },
    {
      question: "How can I ensure that I'm getting a fair price for my trees?",
      answer:
        "Working with a private consultant forester ensures that you get a fair price for your trees. I can provide an unbiased assessment of the value of your trees, and as a licensed professional, I am obligated to work in your best interest."
    },
    {
      question: "What is the best time of year to harvest timber?",
      answer:
        "The best time to harvest timber depends on the species, the market demand, and your goals for your land. We can discuss your specific situation and determine the best timing for your harvest."
    },
    {
      question: "Can you help me develop a long-term forest management plan?",
      answer:
        "Yes, I can work with you to develop a forest management plan that takes into account your goals for your land, the health of your forest, and the unique features of your property. The plan can include recommendations for harvesting, reforestation, wildlife habitat improvement, and more."
    }
  ];

  if (!faqs || faqs.length === 0) faqs = defaultFaqs;

  const [activeQuestionIndex, setActiveQuestionIndex] = useState(null);

  const toggleQuestion = questionIndex => {
    if (activeQuestionIndex === questionIndex) setActiveQuestionIndex(null);
    else setActiveQuestionIndex(questionIndex);
  };

  return (
    <Container id='faq'>
      <Content>
        <TwoColumn>
          <Column>
            <FAQContent>
              {subheading ? <Subheading>{subheading}</Subheading> : null}
              <Heading>{heading}</Heading>
              <Description>{description}</Description>
              <FAQSContainer>
                {faqs.map((faq, index) => (
                  <FAQ
                    key={index}
                    onClick={() => {
                      toggleQuestion(index);
                    }}
                    className="group"
                  >
                    <Question>
                      <QuestionText>{faq.question}</QuestionText>
                      <QuestionToggleIcon>
                        {activeQuestionIndex === index ? <MinusIcon /> : <PlusIcon />}
                      </QuestionToggleIcon>
                    </Question>
                    <Answer
                      variants={{
                        open: { opacity: 1, height: "auto", marginTop: "16px" },
                        collapsed: { opacity: 0, height: 0, marginTop: "0px" }
                      }}
                      initial="collapsed"
                      animate={activeQuestionIndex === index ? "open" : "collapsed"}
                      transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
                    >
                      {faq.answer}
                    </Answer>
                  </FAQ>
                ))}
              </FAQSContainer>
            </FAQContent>
          </Column>
          <Column tw="hidden lg:block w-5/12 flex-shrink-0">
            <ImageContainer>
              <img src={ForestImage} alt='Dirt path through forest.'/>
            </ImageContainer>
          </Column>
        </TwoColumn>
      </Content>
    </Container>
  );
};
