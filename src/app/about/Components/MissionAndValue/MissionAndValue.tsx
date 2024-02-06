import React from "react";
// Component
import Container from "@/Components/UIKit/Container/Container";
import Image from "next/image";
// Images
import WorldImage from "@/Assets/images/planet.png";
// Style
import Style from "./MissionAndValue.module.css";
import TextHead from "@/Components/UIKit/TextHead/TextHead";
const MissionAndValue: React.FC = () => {
  return (
    <Container>
      <div className={Style.wrapper}>
        <TextHead title=" Our Mission and Values" value="03" />
        <div className={Style.flexWrapper}>
          <div>
            <Image className={Style.image} src={WorldImage} alt="" />
          </div>
          <div className={Style.textWrapper}>
            <div className={Style.cardWrapper}>
              <h4 className={Style.title}> Our Mission</h4>
              <p className={Style.content}>
                XERA exists to catalyze transformation at the
                intersection of technology, community, and individual
                empowerment. Our mission is to harness the game-changing
                capabilities of blockchain technology, coupled with AI and other
                high-tech advances, to create a more transparent, equitable, and
                thriving society for all. We are committed to the
                democratization of technology and decision-making processes,
                positioning our community members to be pioneers in this digital
                revolution.
              </p>
            </div>
            <div className={Style.cardWrapper}>
              <h4 className={Style.title}>Our Values</h4>
              <p className={Style.content}>
                At the core of XERA are values that steer us
                towards our vision: Integrity, Transparency, and Community. We
                believe in doing business openly, honestly, and accountability.
                We invest in creating a supportive and inclusive environment
                where all community members can thrive. Our collective efforts
                are directed toward achieving a shared vision, elevating each
                individual while strengthening the whole.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default MissionAndValue;
