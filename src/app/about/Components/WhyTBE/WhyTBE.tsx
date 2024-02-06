import React from "react";

// Component
import Container from "@/Components/UIKit/Container/Container";
import TextHead from "@/Components/UIKit/TextHead/TextHead";

// Style
import Style from "./WhyTBE.module.css";

const WhyTBE = () => {
  return (
    <Container>
      <div className={Style.wrapper}>
        <TextHead value="01" title="Why Choose XERA?" />
        <div className={Style.flexWrapper}>
          <div className={Style.textWrapper}>
            <h4 className={Style.title}> A Truly International Community</h4>
            <p className={Style.content}>
              When you join XERA, you become part of a global
              network of innovators, experts, and enthusiasts. We span multiple
              countries and continents, coming together to create a promising
              future for all. Connect with industry professionals, participate
              in exclusive events, and establish relationships that can elevate
              your career to the next level. We provide products and services
              that represent the pinnacle of blockchain technology. Our
              commitment extends beyond technology
            </p>
          </div>
          <GridCard />
        </div>
      </div>
    </Container>
  );
};

const GridCard: React.FC = () => {
  return (
    <div className={Style.gridWrapper}>
      <div className={Style.top}>
        <p className={Style.cardContent}>
          Unlocking Success Through Networking, our platform offers unparalleled
          networking opportunities.
        </p>
      </div>
      <div className={Style.bottom}>
        <div className={Style.left}>
          <p className={Style.cardContentLeft}>
            Cutting-Edge Products in a Winning Ecosystem.
          </p>
        </div>
        <div className={Style.right}>
          <p className={Style.cardContentRight}>
            Experience the Best Personal Growth in the World.
          </p>
        </div>
      </div>
    </div>
  );
};
export default WhyTBE;
