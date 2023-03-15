import React from "react";
import tw from "twin.macro";
import {Container as ContainerBase } from "../misc/Layouts"
import logo from "assets/logo-badge.svg";


const Container = tw(ContainerBase)`bg-primary-200 text-white -mx-8 -mb-8`
const Content = tw.div`max-w-screen-xl mx-auto py-20 lg:py-24`;

const Row = tw.div`flex items-center justify-center flex-col px-8`

const LogoContainer = tw.div`flex items-center justify-center md:justify-start`;
const LogoImg = tw.img`w-full`;

const LinksContainer = tw.div`mt-8 font-medium flex flex-wrap justify-center items-center flex-col sm:flex-row`
const Link = tw.a`border-b-2 border-transparent hocus:text-primary-light hocus:border-primary-light pb-1 transition duration-300 mt-2 mx-4`;

const CopyrightText = tw.p`text-center mt-10 font-medium tracking-wide text-sm text-white`
export default () => {
  return (
    <Container>
      <Content>
        <Row>
          <LogoContainer>
            <LogoImg src={logo} />
          </LogoContainer>
          <LinksContainer>
            <Link href="#services">Services</Link>
            <Link href="#locations">Locations</Link>
            <Link href="#press">Press</Link>
            <Link href="#about">About</Link>
            <Link href="#faq">FAQ</Link>
            <Link href="#contact">Contact</Link>
          </LinksContainer>
          <CopyrightText>
            &copy; Copyright 2023, DiPaolo Forestry, All Rights Reserved.
          </CopyrightText>
        </Row>
      </Content>
    </Container>
  );
};
