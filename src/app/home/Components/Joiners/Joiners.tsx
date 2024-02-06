// Libraries
import Image from "next/image";

// Components
import TextHead from "@/Components/UIKit/TextHead/TextHead";
import Container from "@/Components/UIKit/Container/Container";

// Images
import people from "@/Assets/images/people.png";
import joinersEclipseGreen from "@/Assets/images/joinersEclipseGreen.png";

// Styles
import Style from "./Joiners.module.css";

const Joiners: React.FC = () => {
  return (
    <Container>
      <TextHead
        value="03"
        title="Scale New Heights: Today's Pioneers, Tomorrow's Leaders"
      />
      <div className={Style.joinersContainer}>
        <Image src={people} alt="people" />
        <h2>
          {" "}
          Join
          <span> 3.1K+ </span>New Members Today and Start Building Your Digital
          Empire{" "}
        </h2>
      </div>
      <div className={Style.joinersGrid}>
        <div>
          <div className={Style.ranks}>
            <div className={Style.textWrapper}>
              <h3> Climb the Ranks: Your Digital Career Awaits</h3>
              <h6>
                TBE offers you the unique opportunity to climb the ranks in a
                dynamic, fast-paced digital career. With various ranks and
                milestones, your potential for growth and development is
                limitless. Turn your passion for blockchain into a rewarding
                career today.
              </h6>
            </div>
            <div className={Style.ranksRightImage} />
            <Image src={joinersEclipseGreen} alt="GreenBG" />{" "}
          </div>
          <div className={Style.chart}>
            <div className={Style.textWrapper}>
              <h3> Reap the Rewards: The Freedom to Excel</h3>
              <h6>
                At TBE, we believe in recognizing and rewarding your hard work.
                Our comprehensive rewards program ensures that your
                contributions don{"'"}t just benefit the community, they pave
                the way for your personal freedom.
              </h6>
            </div>
            <div className={Style.chartRightImage} />
            <Image src={joinersEclipseGreen} alt="GreenBG" />{" "}
          </div>
        </div>

        <div className={Style.flow}>
          <div className={Style.textWrapper}>
            <h3>Spread the Word: Invite the Best to Build the Best</h3>
            <h6>
              Don{"'"}t just keep this revolutionary opportunity to yourself;
              share it with the people who matter most. When you invite top-tier
              talent into our community, you{"'"}re not just extending an
              invitation to them; you{"'"}re laying the groundwork for
              collective success.
            </h6>
          </div>
          <div className={Style.flowBottomImage} />
          <Image src={joinersEclipseGreen} alt="GreenBG" />{" "}
        </div>
      </div>
    </Container>
  );
};

export default Joiners;
