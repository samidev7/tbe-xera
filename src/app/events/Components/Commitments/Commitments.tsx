// Components
import Container from "@/Components/UIKit/Container/Container";
import NumberCounter from "@/Components/UIKit/CounterNumber/CounterNumber";

// Data
import config from "@/data/config";

// Icons
import { BiArrowBack } from "react-icons/bi";

// Styles
import Style from "./Commitments.module.css";

interface CardProps {
  number: number;
  tag: string;
  title: string;
}

const data = [
  {
    number: 5000,
    tag: "+",
    title:
      "Hours of actionable educational content provided by industry-leading experts.",
  },
  {
    number: 500,
    tag: "+",
    title:
      "Opportunity to network with like-minded professionals and future collaborators.",
  },
  {
    number: 200,
    tag: "+",
    title: "Hands-on workshops designed to equip you with practical skills.",
  },
  {
    number: 50,
    tag: "+",
    title:
      " Exclusive masterclasses covering the latest trends and technologies.",
  },
];

const Commitments: React.FC = () => {
  return (
    <Container>
      <div className={Style.commitGrid}>
        <div className={Style.cardsGrid}>
          {data.map((item, index) => {
            return (
              <Card
                key={index}
                number={item.number}
                title={item.title}
                tag={item.tag}
              />
            );
          })}
        </div>
        <div className={Style.rightSide}>
          <h1>What to Expect</h1>
          <h5>
            At XERA events, you{"'"}ll experience a harmonious
            blend of education, networking, and personal development, designed
            to set you on the path to blockchain mastery.
          </h5>
          {/* <div className={Style.learnMore}>
            <h5>Learn More</h5>
            <BiArrowBack />
          </div> */}
        </div>
      </div>
    </Container>
  );
};

const Card: React.FC<CardProps> = ({ number, tag, title }) => {
  return (
    <div className={Style.card}>
      <NumberCounter
        className={Style.numberClass}
        startNumber={0}
        targetNumber={number}
        duration={4500}
        rightText={tag}
      />
      <h5>{title}</h5>
    </div>
  );
};

export default Commitments;
