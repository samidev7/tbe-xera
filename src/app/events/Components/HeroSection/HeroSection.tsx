// Components
import Container from "@/Components/UIKit/Container/Container";

// Data
import config from "@/data/config";

// Styles
import Style from "./HeroSection.module.css";

const HeroSection: React.FC = () => {
  return (
    <div className={Style.heroWrapper}>
      <Container>
        <div className={Style.hero}>
          <h1>
            {" "}
            Unlock Limitless Potential: Experience the Game-Changing Impact of
            The Blockchain Era Events
          </h1>
          <h3>
            Engage, learn, and network with leading experts and innovators in
            the blockchain space. Elevate your skills, expand your connections,
            and be a part of the revolution.
          </h3>
          <a
            href={config.REGISTER_URL}
            target="_blank"
            className={Style.exploreBtn}
          >
            Register Now{" "}
          </a>
        </div>
      </Container>
    </div>
  );
};

export default HeroSection;
