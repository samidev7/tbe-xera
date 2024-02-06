// Components
import Container from "@/Components/UIKit/Container/Container";

// Icons
import featureOneIcon from "@/Assets/icons/featureOneIcon.svg";
import featureTwoIcon from "@/Assets/icons/tech-suite-product-feature.svg";
import featureThreeIcon from "@/Assets/icons/ecosystem-product-feature.svg";
import featureFourIcon from "@/Assets/icons/empowerment-feature-icon.svg";
import featureFiveIcon from "@/Assets/icons/rewards-feature-icon.svg";
import featureSixIcon from "@/Assets/icons/users-feature-icon.svg";

// Images
import conicShape from "@/Assets/images/conicalFeeatureShape.png";

// Styles
import Style from "./Features.module.css";
import Image from "next/image";

interface CardProps {
  image: string;
  title: string;
  subTitle: string;
}

const data = [
  {
    image: featureOneIcon,
    title: "Blockchain Solutions",
    subTitle:
      "Leverage TBE's avant-garde blockchain technology for secure, transparent, and hyper-efficient digital interactions.",
  },
  {
    image: featureTwoIcon,
    title: "Cutting-Edge Tech Suite ",
    subTitle:
      "Dive into TBE's premier tech offerings, architected to catapult both your personal and business ventures into a future of efficiency, security, and innovation.",
  },
  {
    image: featureThreeIcon,
    title: "Collaborative Ecosystem",
    subTitle:
      "Immerse yourself in TBE's robust community of blockchain aficionados, experts, and visionaries, collectively striving for innovation and success.",
  },
  {
    image: featureFourIcon,
    title: "Financial Empowerment",
    subTitle:
      "Gain true financial autonomy with TBE’s invaluable educational resources, pragmatic tools, and ongoing support, guiding you to take the reins of your fiscal future.",
  },
  {
    image: featureFiveIcon,
    title: "Incentive-Driven Rewards",
    subTitle:
      "Thrive within TBE's dynamic rewards ecosystem, designed to commend your contributions, foster excellence, and amplify your impact.",
  },
  {
    image: featureSixIcon,
    title: "Intuitive User Experience",
    subTitle:
      "Navigate TBE’s seamlessly designed platform, optimizing your interaction with, and adoption of, blockchain technologies and services.",
  },
];

const Features: React.FC = () => {
  return (
    <Container>
      <div className={Style.head}>
        <h1>Key Features of TBE{"'"}s Revolutionary Offerings</h1>
        <h5>
          Bridging your ambitions with groundbreaking blockchain technology, TBE
          equips you with all the tools you need for a transformative journey.
        </h5>
      </div>
      <div className={Style.cardsGrid}>
        <Image src={conicShape} alt="Coninc Shape" />
        <Image src={conicShape} alt="Coninc Shape" />
        {data.map((item, index) => {
          return (
            <Card
              key={index}
              image={item.image}
              title={item.title}
              subTitle={item.subTitle}
            />
          );
        })}
      </div>
    </Container>
  );
};

const Card: React.FC<CardProps> = ({ image, title, subTitle }) => {
  return (
    <div className={Style.card}>
      <Image src={image} alt="Icon" />
      <h3>{title}</h3>
      <h6>{subTitle}</h6>
    </div>
  );
};

export default Features;
