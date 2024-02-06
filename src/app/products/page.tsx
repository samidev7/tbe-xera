import React from "react";
import { Metadata } from "next";

//Components
import HeroSection from "./Components/HeroSection/HeroSection";
import Features from "./Components/Features/Features";
import AboutSlider from "./Components/AboutSlider/AboutSlider";
import ClientReviews from "@/Components/UIKit/ClientReviews/ClientReviews";
import LoaderWrapper from "@/Components/Advanced/Loader/LoaderWrapper";

export const metadata: Metadata = {
  title: "Products",
};

const Advantage: React.FC = () => {
  return (
    <LoaderWrapper>
      <HeroSection />
      <section>
        <Features />
      </section>
      <section>
        <AboutSlider />
      </section>
      <section>
        <ClientReviews />
      </section>
    </LoaderWrapper>
  );
};

export default Advantage;
