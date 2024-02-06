import Image, { StaticImageData } from "next/image";

// Components
import Container from "@/Components/UIKit/Container/Container";
import TextHead from "@/Components/UIKit/TextHead/TextHead";

// Icons
import startedIconOne from "@/Assets/icons/startedIconOne.svg";
import startedIconTwo from "@/Assets/icons/startedIconTwo.svg";
import startedIconThree from "@/Assets/icons/startedIconThree.svg";

// Style
import Style from "./GetStarted.module.css";

interface CardProps {
  key: number;
  text: string;
  icon: StaticImageData;
}

const data = [
  {
    icon: startedIconOne,
    text: " Our focus on quality ensures that you are always met with excellence, whether it's in products, services, or community engagement.    ",
  },
  {
    icon: startedIconTwo,
    text: "XERA's reliable platforms and tools are backed by cutting-edge technology and security features to give you peace of mind.",
  },
  {
    icon: startedIconThree,
    text: " Become part of a community that inspires innovation and collaborative success, pushing boundaries in XERA.",
  },
];

const GetStarted: React.FC = () => {
  return (
    <div className={Style.wrapper}>
      <div className={Style.blurGreen} />
      <Container>
        <div className={Style.startedGrid}>
          <div className={Style.textWrapper}>
            <h1>Why Us?</h1>
            <h5>Quality, Reliability, and a Community of Innovators</h5>
            {data.map((item, index) => {
              return <Card key={index} icon={item.icon} text={item.text} />;
            })}
          </div>
          <iframe
          className={Style.frame}
            src="https://www.youtube.com/embed/vZf0jIOkLMk"
            width="100%"
            height="400"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
          ></iframe>
        </div>
      </Container>
    </div>
  );
};

const Card: React.FC<CardProps> = ({ icon, text }) => {
  return (
    <div className={Style.card}>
      <Image src={icon} alt="Icon" />
      <h6>{text}</h6>
    </div>
  );
};

export default GetStarted;
