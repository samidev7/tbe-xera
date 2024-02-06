// Libraries
import Image, { StaticImageData } from "next/image";

// Components
import Container from "@/Components/UIKit/Container/Container";

// Icons
import portfolioIconOne from "@/Assets/icons/portfolioIconOne.svg";
import portfolioIconTwo from "@/Assets/icons/portfolioIconTwo.svg";
import portfolioIconThree from "@/Assets/icons/portfolioIconThree.svg";
import portfolioIconFour from "@/Assets/icons/portfolioIconFour.svg";

// Images
import iphoneProtfolio from "@/Assets/images/userinterfaceIMG.png";

// Styles
import Style from "./Portfolio.module.css";

interface CardProps {
  icon?: StaticImageData;
  image?: StaticImageData;
  title: string;
  text: string;
}

const data = [
  {
    icon: portfolioIconOne,
    title: "Marketing Tools",
    text: " Level up your marketing strategies with TBE's advanced marketing tools designed for optimum reach and engagement.",
  },
  {
    icon: portfolioIconTwo,
    title: "Rewards System",
    text: "Earn as you learn, with our unique rewards system that incentivizes your contributions and activity within the community.",
  },
  {
    image: iphoneProtfolio,
    title: "Exclusive User Interface",
    text: "Navigate through our exclusive, user-friendly interface designed to make your experience smooth and efficient.",
  },
  {
    icon: portfolioIconThree,
    title: "Performance Monitor",
    text: "Get real-time insights into your operations with our performance monitor, a comprehensive dashboard that simplifies analytics.",
  },
  {
    icon: portfolioIconFour,
    title: "Powerful Partner",
    text: "With TBE as your partner, unlock unparalleled support and resources to propel your business or personal ventures to new heights.",
  },
];

const Portfolio: React.FC = () => {
  return (
    <Container>
      <div className={Style.portfolio}>
        <h1>Features that Elevate Your Journey</h1>
        <h5>
          Our range of services are tailored to meet the diverse needs of modern
          users.
        </h5>
        <div className={Style.cardsGrid}>
          {data.map((item, index) => {
            return (
              <Card
                key={index}
                image={item.image}
                icon={item.icon}
                title={item.title}
                text={item.text}
              />
            );
          })}
        </div>
      </div>
    </Container>
  );
};

const Card: React.FC<CardProps> = ({ image, icon, title, text }) => {
  return (
    <>
      {icon ? (
        <div className={Style.card}>
          <Image src={icon} alt="Icon" />
          <h3>{title}</h3>
          <h6>{text}</h6>
        </div>
      ) : (
        <div className={Style.cardAlt}>
          <h3>{title}</h3>
          <h6>{text}</h6>
          <div
            className={Style.iphoneImage}
            style={{
              background: `url(${image?.src}) top / cover no-repeat`,
            }}
          />
        </div>
      )}
    </>
  );
};

export default Portfolio;
