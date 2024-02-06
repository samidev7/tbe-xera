"use client";

import React, { useRef } from "react";
// Components
import Container from "@/Components/UIKit/Container/Container";
// Librairies
import { Swiper, SwiperSlide } from "swiper/react";
import { type Swiper as SwiperRef } from "swiper";

// Icons
import { BiArrowBack } from "react-icons/bi";

// Styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import Style from "./Roadmap.module.css";
import TextHead from "@/Components/UIKit/TextHead/TextHead";

type roadMapType = {
  id?: number;
  year: number;
  title: string;
  content: string;
};
// Data
const roadMapData: roadMapType[] = [
  {
    id: 1,
    year: 2023,
    title: " Laying the Groundwork",
    content:
      "Research & Development: Dive into initial R&D to understand market needs and community expectations. Community Aggregation: Merge and solidify nine communities into a cohesive unit for better engagement. Forge Partnerships: Collaborate with key service providers to enhance offerings and increase value. Soft Launch: Roll out a pre-launch version for select users to gather feedback and fine-tune the platform. Global Launch: Officially release the platform to the public, targeting a global audience.",
  },
  {
    id: 2,
    year: 2024,
    title: "Expansion & Deepening Engagement",
    content:
      "User Base Growth: Aim to acquire 1 million active users by focusing on user experience, content, and community-driven initiatives. Event Promotion: Host 500 events worldwide to foster community engagement, brand awareness, and user retention. New Partnerships: Form strategic collaborations with additional service providers to expand the platforms capabilities and reach. Go International: Organize signature international events to build brand presence and forge connections with global audiences.",
  },
  {
    id: 3,
    year: 2025,
    title: "Scaling & Community Empowerment",
    content:
      "Expand User Base: Strive for 3 million active users, with an emphasis on new markets and diversified user segments. Boost Event Numbers: Organize 3,000 events worldwide, ensuring diversity in topics, regions, and formats. Broaden Partnership Spectrum: Onboard new service providers, focusing on those that can cater to the evolving needs of the growing community. Flagship International Events: Elevate the scale and quality of international events to position the platform as a major global player. Community Growth: Transition from 9 to 10 major community clusters, prioritizing inclusivity and representation.",
  },
];

const Roadmap: React.FC = () => {
  const swiperRef = useRef<SwiperRef>();

  return (
    <div className={Style.wrapper}>
      <div className={Style.topwrapper}>
        <div className={Style.titleWrapper}>
          <TextHead title="Roadmap" value="02" />
        </div>
        <div className={Style.swiperButton}>
          <div
            onClick={() => swiperRef.current?.slidePrev()}
            className={Style.btnLeft}
          >
            <BiArrowBack />
          </div>
          <div
            onClick={() => swiperRef.current?.slideNext()}
            className={Style.btnRight}
          >
            <BiArrowBack />
          </div>
        </div>
      </div>

      <div className={Style.slider}>
        <Swiper
          slidesPerView={2}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1050: {
              slidesPerView: 2,
            },
            1350: {
              slidesPerView: 2,
            },
          }}
          onBeforeInit={(swiper) => {
            swiperRef.current = swiper;
          }}
          className={Style.swiper}
        >
          {roadMapData.map((data) => {
            return (
              <SwiperSlide key={data.id}>
                <SingleCard
                  year={data.year}
                  title={data.title}
                  content={data.content}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

const SingleCard: React.FC<roadMapType> = ({ year, title, content }) => {
  return (
    <div className={Style.singleCard}>
      <p className={year ? Style.year : ""}>{year}</p>
      <div className={Style.divider} />
      <h3 className={Style.cardTitle}>{title}</h3>
      <p className={Style.cardContent}>{content}</p>
    </div>
  );
};
export default Roadmap;
