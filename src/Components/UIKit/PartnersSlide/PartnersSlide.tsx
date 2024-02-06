"use client";

import React, { useRef } from "react";
import Image, { StaticImageData } from "next/image";

// Libraries
import { Swiper, SwiperSlide } from "swiper/react";
import { type Swiper as SwiperRef } from "swiper";
import { Autoplay } from "swiper/modules";

// Hooks
import useWindowSize from "@/Hooks/useWindowSize";

// Components
import Container from "../Container/Container";
import TextHead from "../TextHead/TextHead";

// Icons
import { BiArrowBack } from "react-icons/bi";

// Images
import freedom from "@/Assets/images/freedomNationLogo.png";
import block from "@/Assets/images/bidLogo.png";
// import bolt from "@/Assets/images/lyoTradeLogo.png";
// import lyoTech from "@/Assets/images/lyoTechLogo.png";
// import sLogo from "@/Assets/icons/sLogoIcon.svg";
// import ethereum from "@/Assets/images/ethereum-logo.png";
import lfi from "@/Assets/images/lFi-logo.png";

// Styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import Style from "./PartnersSlide.module.css";

interface SingleCardActiveProps {
  isActive: boolean;
  logo: StaticImageData;
  href: string;
}

interface TitleProps {
  value: string;
}

const cars = [
  // {
  //   logo: lyoTech,
  //   href: "https://lyotechlabs.com/",
  // },
  // {
  //   logo: bolt,
  //   href: "https://m.lyotrade.com/",
  // },
  {
    logo: block,
    href: "https://myblockchainid.io/",
  },
  // {
  //   logo: freedom,
  //   href: "https://thefreedomnation.io/",
  // },
  {
    logo: lfi,
    href: "https://lfi.io/",
  },
];

const PartnersSlide: React.FC<TitleProps> = ({ value }) => {
  const swiperRef = useRef<SwiperRef>();
  return (
    <>
      <Container>
        <TextHead value={value} title="Our Partners" />
      </Container>

      <div
        onMouseEnter={() =>
          swiperRef.current !== undefined && swiperRef.current.autoplay.stop()
        }
        onMouseLeave={() =>
          swiperRef.current !== undefined && swiperRef.current.autoplay.start()
        }
        className={Style.slider}
      >
        <div
          onClick={() => swiperRef.current?.slidePrev()}
          className={Style.btnLeft}
        >
          <BiArrowBack />
        </div>
        <Swiper
          slidesPerView={2}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          spaceBetween={25}
          initialSlide={2}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
          }}
          onBeforeInit={(swiper) => {
            swiperRef.current = swiper;
          }}
          className={Style.swiper}
        >
          {cars.map((item, index) => {
            return (
              <SwiperSlide {...item} key={index}>
                {({ isActive }) => (
                  <SingleCardActive
                    logo={item.logo}
                    href={item.href}
                    isActive={isActive}
                  />
                )}
              </SwiperSlide>
            );
          })}
        </Swiper>
        <div
          onClick={() => swiperRef.current?.slideNext()}
          className={Style.btnRight}
        >
          <BiArrowBack />
        </div>
      </div>
    </>
  );
};

const SingleCardActive: React.FC<SingleCardActiveProps> = ({
  isActive,
  logo,
  href,
}) => {
  const { width } = useWindowSize();
  return (
    <div
      className={
        isActive
          ? width && width < 768
            ? Style.cardActive
            : Style.card
          : Style.card
      }
    >
      <Image src={logo} alt="Logo" />
      <a target="_blank" href={href} className={Style.link}>
        <BiArrowBack />
      </a>
    </div>
  );
};

export default PartnersSlide;
