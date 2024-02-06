import React from "react";
import { Metadata } from "next";

//Components
import HeroSection from "./Components/HeroSection/HeroSection";
import ClientReviews from "@/Components/UIKit/ClientReviews/ClientReviews";
import LoaderWrapper from "@/Components/Advanced/Loader/LoaderWrapper";
import Portfolio from "./Components/Portfolio/Portfolio";
import GetStarted from "./Components/GetStarted/GetStarted";

export const metadata: Metadata = {
  title: "Services",
};

const Advantage: React.FC = () => {
  return (
    <LoaderWrapper>
      <HeroSection />

      <section>
        <Portfolio />
      </section>
      <section>
        <GetStarted />
      </section>
      <ClientReviews />
    </LoaderWrapper>
  );
};

export default Advantage;
