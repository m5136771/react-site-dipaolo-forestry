import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line

const Container = tw.div`relative`;
const Content = tw.div`max-w-screen-xl mx-auto py-20 lg:py-24`;

const FormContainer = styled.div`
  ${tw`p-10 sm:p-12 md:p-16 bg-accent shadow-xl rounded-xl text-primary-600 relative`}
  form {
    ${tw`mt-4`}
  }
  h2 {
    ${tw`text-3xl sm:text-4xl font-bold`}
  }
  input,textarea {
    ${tw`w-full font-medium tracking-wide border-b-2 py-2 text-primary hocus:border-primary-500 focus:outline-none transition duration-200`};

    ::placeholder {
      ${tw`text-primary-400`}
    }
  }
`;

const TwoColumn = tw.div`flex flex-col sm:flex-row justify-between`;
const Column = tw.div`sm:w-5/12 flex flex-col`;
const InputContainer = tw.div`relative py-5 mt-6`;
const Label = tw.label`absolute top-0 left-0 tracking-wide font-semibold text-sm`;
const Input = tw.input`bg-transparent `;
const TextArea = tw.textarea`bg-transparent h-24 sm:h-full resize-none`;
const SubmitButton = tw.button`bg-primary-600 sm:w-32 mt-4 py-3 text-accent rounded-xl font-bold tracking-wide shadow-lg text-sm transition duration-200 transform focus:outline-none focus:shadow-outline hover:bg-accent-50 hover:text-primary-500 hocus:-translate-y-px`;

export default () => {
  return (
    <Container id='contact'>
      <Content>
        <FormContainer>
          <div tw="mx-auto max-w-4xl">
            <h2>Request Information</h2>
            <form action="#">
              <TwoColumn>
                <Column>
                  <InputContainer>
                    <Label htmlFor="name-input">Your Name</Label>
                    <Input id="name-input" type="text" name="name" placeholder="E.g. John Doe" />
                  </InputContainer>
                  <InputContainer>
                    <Label htmlFor="email-input">Your Email Address</Label>
                    <Input id="email-input" type="email" name="email" placeholder="E.g. john@mail.com" />
                  </InputContainer>
                </Column>
                <Column>
                  <InputContainer tw="flex-1">
                    <Label htmlFor="name-input">Your Message</Label>
                    <TextArea id="message-input" name="message" placeholder="E.g. Details about your property"/>
                  </InputContainer>
                </Column>
              </TwoColumn>
              <SubmitButton type="submit" value="Submit">Submit</SubmitButton>
            </form>
          </div>
        </FormContainer>
      </Content>
    </Container>
  );
};
