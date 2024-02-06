"use client";

import Image from "next/image";

// Components
import Container from "@/Components/UIKit/Container/Container";

// Data
import config from "@/data/config";

// Hooks
import useWindowSize from "@/Hooks/useWindowSize";

// Images
import bluredServicesHero from "@/Assets/images/bluredServicesHero.png";
import rightBluredImage from "@/Assets/images/rightBluredImage.png";

// Styles
import Style from "./HeroSection.module.css";

const HeroSection: React.FC = () => {
  const { width } = useWindowSize();
  return (
    <div className={Style.heroWrapper}>
      <Image src={bluredServicesHero} alt="blured image" />
      <Image src={rightBluredImage} alt="blured image" />
      <Container>
        <div className={Style.heroGrid}>
          <div className={Style.textWrapper}>
            <div className={Style.leftLine} />
            <div className={Style.leftLineBlur} />
            <h1>Unleash the Power of World-Class Services</h1>
            <h3>
              Transform your endeavors with our versatile and robust suite of
              services.
            </h3>
            <a
              href={config.LOGIN_URL}
              target="_blank"
              className={Style.exploreBtn}
            >
              Log In Now
            </a>
          </div>
          <div className={Style.imageWrapper} />
        </div>
      </Container>
    </div>
  );
};

export default HeroSection;
