import React from "react";
import GlobalStyles from './styles/GlobalStyles';
import { css } from "styled-components/macro"; //eslint-disable-line
import AnimationRevealPage from "helpers/AnimationRevealPage.js";

import Hero from "./components/Hero";
import Services from "components/Services";
import Expertise from "./components/Expertise";
import FAQ from "./components/FAQ.js";
import ContactForm from "./components/ContactForm.js";
import Footer from "./components/constants/Footer";  

export default function App() {

  return (
    <AnimationRevealPage>
      <GlobalStyles />
      <Hero />
      <Expertise />
      <Services />
      <FAQ />
      <ContactForm />
      <Footer />
    </AnimationRevealPage>
  );
}
