// Libraries
import Image from "next/image";

// Components
import Container from "@/Components/UIKit/Container/Container";

// Data
import config from "@/data/config";

// Icons
import { BiArrowBack } from "react-icons/bi";

// Images
import linkRightArrowWhite from "@/Assets/images/linkRightArrowWhite.png";

// Style
import Style from "./HeroSection.module.css";

const HeroSection: React.FC = () => {
  return (
    <div className={Style.heroWrapper}>
      <Container>
        <div className={Style.hero}>
          <div className={Style.linkWrapper}>
            <h6>Connect, Produce, Maximize: XERA Begins</h6>
            <a
              href={config.REGISTER_URL}
              target="_blank"
              className={Style.linkBtn}
            >
              <BiArrowBack />
            </a>
          </div>
          <h1>Explore the Future: XERA{"'"}s Innovative Products</h1>
          <h3>
            Unlock a world of possibilities with XERA{"'"}s innovative blockchain
            products and services tailored to elevate your digital experience.
          </h3>
          <a
            href={config.REGISTER_URL}
            target="_blank"
            className={Style.exploreBtn}
          >
            Register Now
          </a>
        </div>
      </Container>
    </div>
  );
};

export default HeroSection;
