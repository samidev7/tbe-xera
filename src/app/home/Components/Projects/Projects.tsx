// Libraries
import { StaticImageData } from "next/image";

// Components
import Container from "@/Components/UIKit/Container/Container";
import TextHead from "@/Components/UIKit/TextHead/TextHead";

// Data
import config from "@/data/config";

// Images
import firstProject from "@/Assets/images/firstProject.png";
import secondProject from "@/Assets/images/secondProject.png";
import thirdProject from "@/Assets/images/thirdProject.png";

// Icons
import { BiArrowBack } from "react-icons/bi";

// Styles
import Style from "./Projects.module.css";

interface CardProps {
  index: number;
  title: string;
  subTitle: string;
  image: StaticImageData;
}

const data = [
  {
    title: "A New Dawn in Tech & Economy: Welcome to The Blockchain Era",
    subTitle:
      "Join TBE and become part of a grassroots movement redefining the future. Our groundbreaking platform, state-of-the-art products, and vibrant community are laying the cornerstone of a revolutionary era. Engage with us today.",
    image: firstProject,
  },
  {
    title: "Ignite, Innovate, Ascend: Your Blockchain Journey Begins with TBE",
    subTitle:
      "TBE isn't just a service; it's a social revolution. We furnish you with the tools, the expertise, and the community you need to excel in this disruptive landscape. Step into your blockchain future with us and tap into limitless possibilities.",
    image: secondProject,
  },
  {
    title: "Forge Your Success: Pave Your Path with The Blockchain Era",
    subTitle:
      "TBE simplifies the complex, making blockchain accessible and fruitful for all. From pioneering products to comprehensive services, we’ve got your blockchain ambitions covered. Join TBE today and begin crafting your legacy.",
    image: thirdProject,
  },
];

const Projects: React.FC = () => {
  return (
    <Container>
      <TextHead
        value="01"
        title="Elevate Your Horizons: Be a Pioneer in The Blockchain Era"
      />
      <h2 className={Style.subTitle}>
        At TBE, we are not just about connections, we{"'"}re about empowering
        change. Dive into a universe of opportunities and regain control over
        your destiny. Your future is blockchain; your future is TBE.
      </h2>
      <div className={Style.projectGrid}>
        {data.map((item, index) => {
          return (
            <Card
              key={index}
              index={index}
              title={item.title}
              subTitle={item.subTitle}
              image={item.image}
            />
          );
        })}
      </div>
    </Container>
  );
};

const Card: React.FC<CardProps> = ({ index, title, subTitle, image }) => {
  return (
    <div>
      {index === 1 && (
        <div className={Style.projectLink}>
          <div>
            <h3>Transform Your Life</h3>
            <h5>
              Leap into The Blockchain Era and redefine what{"'"}s possible,
              both for yourself and the world.
            </h5>
          </div>
          <a
            href={config.REGISTER_URL}
            target="_blank"
            className={Style.linkBtn}
          >
            <BiArrowBack />
          </a>
        </div>
      )}
      <div className={Style.project}>
        <div
          className={Style.projectImage}
          style={{
            background: `url(${image.src}) top / cover no-repeat`,
          }}
        />
        <h3>{title}</h3>
        <h5>{subTitle}</h5>
      </div>
    </div>
  );
};

export default Projects;
