import React from "react";
import { Metadata } from "next";

//Components
import ClientReviews from "@/Components/UIKit/ClientReviews/ClientReviews";
import Commitments from "./Components/Commitments/Commitments";
import HeroSection from "./Components/HeroSection/HeroSection";
// import KnowMore from "./Components/KnowMore/KnowMore";
import LoaderWrapper from "@/Components/Advanced/Loader/LoaderWrapper";

export const metadata: Metadata = {
  title: "Events",
};

const Advantage: React.FC = () => {
  return (
    <LoaderWrapper>
      <HeroSection />
      {/* <section>
        <KnowMore />
      </section> */}
      <section>
        <Commitments />
      </section>
      <section>
        <ClientReviews />
      </section>
    </LoaderWrapper>
  );
};

export default Advantage;
