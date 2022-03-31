import FAQ from "components/faqs/SimpleWithSideImage.js";
import Features from "components/features/ThreeColSimple.js";
import MainFeature from "components/features/TwoColSingleFeatureWithStats.js";
import Footer from "components/footers/MiniCenteredFooter.js";
import Hero from "components/hero/FullWidthWithImage.js";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import React from "react";

export default () => (
  <AnimationRevealPage>
    <Hero />
    <Features />
    <MainFeature />
    <FAQ />
    <Footer />
  </AnimationRevealPage>
);
