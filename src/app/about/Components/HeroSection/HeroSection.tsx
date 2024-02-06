import React from "react";
// Components
import Container from "@/Components/UIKit/Container/Container";
import Image from "next/image";

// Data
import config from "@/data/config";

// Images
import Hero from "@/Assets/images/aboutHero.png";
// Style
import Style from "./HeroSection.module.css";
const HeroSection = () => {
  return (
    <div className={Style.heroBg}>
      <Container>
        <div className={Style.wrapper}>
          <h3 className={Style.title}>
            Join The Blockchain Era and Be a Pioneer in Shaping a Fair,
            Empowering Future Through Technology
          </h3>
          <p className={Style.content}>
            Embark on an extraordinary journey in the realm of blockchain, where
            innovation meets impact, and the future is in your hands.
          </p>
          <a
            href={config.REGISTER_URL}
            target="_blank"
            className={Style.button}
          >
            Become a Member Today
          </a>
          <Image src={Hero} alt="" className={Style.heroImage} />
        </div>
      </Container>
    </div>
  );
};

export default HeroSection;
