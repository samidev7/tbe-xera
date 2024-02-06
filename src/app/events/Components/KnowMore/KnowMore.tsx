import { StaticImageData } from "next/image";

// Components
import Container from "@/Components/UIKit/Container/Container";

// Images
import ethEventBG from "@/Assets/images/ethEventBG.png";

// Styles
import Style from "./KnowMore.module.css";

interface CardProps {
  index: number;
  image: StaticImageData;
  category: string;
  date: string;
  title: string;
  subTitle: string;
}

const cards = [
  {
    image: ethEventBG,
    category: "Crypto Worlds",
    date: "June 20, 2022",
    title: "Blockchain and Crypto",
    subTitle:
      "By information about design the world to the best instructors, heatc helping By information about design the world to the best instructors, heatc helping",
  },
  {
    image: ethEventBG,
    category: "Crypto Worlds",
    date: "June 20, 2022",
    title: "Blockchain and Crypto",
    subTitle:
      "By information about design the world to the best instructors, heatc helping By information about design the world to the best instructors, heatc helping",
  },
  {
    image: ethEventBG,
    category: "Crypto Worlds",
    date: "June 20, 2022",
    title: "Blockchain and Crypto",
    subTitle:
      "By information about design the world to the best instructors, heatc helping By information about design the world to the best instructors, heatc helping",
  },
  {
    image: ethEventBG,
    category: "Crypto Worlds",
    date: "June 20, 2022",
    title: "Blockchain and Crypto",
    subTitle:
      "By information about design the world to the best instructors, heatc helping By information about design the world to the best instructors, heatc helping",
  },
  {
    image: ethEventBG,
    category: "Crypto Worlds",
    date: "June 20, 2022",
    title: "Blockchain and Crypto",
    subTitle:
      "By information about design the world to the best instructors, heatc helping By information about design the world to the best instructors, heatc helping",
  },
];

const KnowMore: React.FC = () => {
  return (
    <Container>
      <div className={Style.textWrapper}>
        <h1>Why Attend Our Events?</h1>
        <h5>
          Because here, every interaction is a step towards reshaping the
          future.
        </h5>
      </div>
      <div className={Style.cardsGrid}>
        {cards.map((item, index) => {
          return (
            <Card
              key={index}
              index={index}
              image={item.image}
              category={item.category}
              date={item.date}
              title={item.title}
              subTitle={item.subTitle}
            />
          );
        })}
      </div>
    </Container>
  );
};

const Card: React.FC<CardProps> = ({
  index,
  image,
  category,
  date,
  title,
  subTitle,
}) => {
  return (
    <div className={Style.card}>
      <div
        className={Style.cardHead}
        style={{
          background: `url(${image.src}) center / cover no-repeat`,
        }}
      >
        <button className={Style.joinBtn}>Join</button>
      </div>
      <div className={Style.cardBody}>
        <div className={Style.cardTop}>
          <p>{category}</p>
          {"-"}
          <p>{date}</p>
        </div>
        <h3>{title}</h3>

        {index === 0 && <p>{subTitle}</p>}
      </div>
    </div>
  );
};

export default KnowMore;
