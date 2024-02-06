"use client";

import React, { useRef } from "react";

// Librairies
import Image, { StaticImageData } from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { type Swiper as SwiperRef } from "swiper";
import { Autoplay } from "swiper/modules";
import useWindowSize from "@/Hooks/useWindowSize";

// Components
import Container from "@/Components/UIKit/Container/Container";

// Images
import sliderOne from "@/Assets/images/tbeSliderOne.png";
import sliderTwo from "@/Assets/images/tbeSliderTwo.png";
import sliderThree from "@/Assets/images/tbeSliderThree.png";

// Icons
import { BiArrowBack } from "react-icons/bi";

// Styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import Style from "./AboutSlider.module.css";

interface SingleCardActiveProps {
  firsttext: string;
  secondtext?: string;
  thirdtext: string;
  image: StaticImageData;
}

const cards = [
  {
    firsttext:
      " XERA takes blockchain technology's inherent virtues of security and transparency to the next level. Our premium products stand as paragons of innovation and quality, encapsulating the freshest breakthroughs in the blockchain sphere. Rest easy knowing you're equipped with trustworthy and state-of-the-art solutions.",
    thirdtext:
      "Experience the full scope of blockchain's potential with XERA. Achieve your aspirations in the digital frontier—click to explore our product range now.",
    image: sliderOne,
  },
  {
    firsttext:
      "Community drives the blockchain, and at XERA, it's no different. Our products are not just tools but bridges to a larger community of innovators, strategists, and pioneers. XERA’s community collaboration features amplify collective wisdom and create a support network that turns aspirations into achievements.",
    thirdtext:
      "Ready to be part of something bigger? Explore XERA's community-centric products and amplify your impact today.",
    image: sliderTwo,
  },
  {
    firsttext:
      "User experience is at the heart of XERA's product philosophy. Our platforms are carefully designed to be as intuitive as they are powerful. Navigating through complex blockchain systems has never been easier or more straightforward. With XERA, you get a simple user interface without compromising on capability.",
    thirdtext:
      "Why settle for complexity when simplicity can be so powerful? Experience XERA's user-friendly platforms by clicking here.",
    image: sliderThree,
  },
];

const AboutSlider: React.FC = () => {
  const swiperRef = useRef<SwiperRef>();
  const width = useWindowSize();

  return (
    <Container>
      <div className={Style.aboutWrapper}>
        <h1>Your Blockchain Destiny is One Click Away: Dive In!</h1>
        <div className={Style.sliderWrapper}>
          <div className={Style.buttons}>
            <div
              onClick={() => swiperRef.current?.slidePrev()}
              className={Style.btnPrev}
            >
              <BiArrowBack />
            </div>
            <div
              onClick={() => swiperRef.current?.slideNext()}
              className={Style.btnNext}
            >
              <BiArrowBack />
            </div>
          </div>
          <div
          // onMouseEnter={() =>
          //   swiperRef.current !== undefined &&
          //   swiperRef.current.autoplay.stop()
          // }
          // onMouseLeave={() =>
          //   swiperRef.current !== undefined &&
          //   swiperRef.current.autoplay.start()
          // }
          >
            <Swiper
              slidesPerView={1}
              // modules={[Autoplay]}
              autoplay={{
                delay: 3500,
                disableOnInteraction: false,
              }}
              // spaceBetween={25}
              // initialSlide={2}
              breakpoints={{
                0: {
                  slidesPerView: 1,
                },
              }}
              onBeforeInit={(swiper) => {
                swiperRef.current = swiper;
              }}
              className={Style.swiper}
            >
              {cards.map((item, index) => {
                return (
                  <SwiperSlide {...item} key={index}>
                    <SingleCardActive
                      image={item.image}
                      firsttext={item.firsttext}
                      thirdtext={item.thirdtext}
                    />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
      </div>
    </Container>
  );
};

const SingleCardActive: React.FC<SingleCardActiveProps> = ({
  image,
  firsttext,
  secondtext,
  thirdtext,
}) => {
  return (
    <div className={Style.card}>
      <div className={Style.textWrapper}>
        <h5>{firsttext}</h5>
        <h4>{thirdtext}</h4>
      </div>
      <Image src={image} alt="slide Image" />
    </div>
  );
};

export default AboutSlider;
