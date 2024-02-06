"use client";

// Libraries
import React, { useRef } from "react";
import Image, { StaticImageData } from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { type Swiper as SwiperRef } from "swiper";
import { Autoplay } from "swiper/modules";

// Components
import Container from "../Container/Container";

// Images
import One from "@/Assets/images/One.png";
import Two from "@/Assets/images/Two.png";
import Three from "@/Assets/images/Three.png";
import Four from "@/Assets/images/Four.png";
import Five from "@/Assets/images/Five.png";
import Six from "@/Assets/images/Six.png";
import Seven from "@/Assets/images/Seven.png";
import Eight from "@/Assets/images/Eight.png";
import Nine from "@/Assets/images/Nine.png";
import Ten from "@/Assets/images/Ten.png";
import Eleven from "@/Assets/images/Eleven.png";
import Twelve from "@/Assets/images/Twelve.png";
import Thirteen from "@/Assets/images/Thirteenn.png";
import Fourteen from "@/Assets/images/Fourteen.png";
import doubleQuoteGreen from "@/Assets/images/doubleQuoteGreen.png";
import blurReviewImage from "@/Assets/images/blurReviewImage.png";

// Icons
import { BiArrowBack } from "react-icons/bi";

// Styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import Style from "./ClientReviews.module.css";

interface CardProps {
  clientimage: StaticImageData;
  name: string;
  position: string;
  review: string;
}

const cards = [
  {
    clientimage: One,
    name: "Emily De Luca",
    position: "Graphic Designer",
    review:
      "Blockchain Era has opened new doors for my design work. The platform is user-friendly and incredibly secure.",
  },
  {
    clientimage: Three,
    name: "Oliver Kowalski",
    position: "Photographer",
    review:
      "The community is engaging, but the mobile app needs work. Still, a very useful platform.",
  },
  {
    clientimage: Four,
    name: "Sofia Müller",
    position: "Software Engineer",
    review:
      "Initially, I was skeptical, but TBE truly delivers. The educational content alone is worth it.",
  },
  {
    clientimage: Six,
    name: "Maria Smith",
    position: "Digital Marketer",
    review:
      "The community collaboration is good but could be improved. Still, a great initiative for blockchain enthusiasts like me.",
  },
  {
    clientimage: Seven,
    name: "Clara Dupont",
    position: "Financial Analyst",
    review:
      "The economic independence that TBE offers is empowering. I wish I'd found it sooner.",
  },
  {
    clientimage: Nine,
    name: "Benjamin Odogu",
    position: "Legal Advisor",
    review:
      "The platform offers good insights into blockchain technology, but the community aspect needs some fine-tuning.",
  },
  {
    clientimage: Twelve,
    name: "Kim Tae-yeong",
    position: "Freelance Writer",
    review:
      "It's a useful platform, but the interface can be confusing at times. The benefits outweigh the negatives.",
  },

  {
    clientimage: Fourteen,
    name: "Christine O'Malley",
    position: "Veterinarian",
    review:
      "The economic tools have given me great financial insights. Highly recommended.",
  },

  {
    clientimage: Two,
    name: "Samuel Martínez",
    position: "Physiotherapist",
    review:
      "A fantastic resource for anyone interested in blockchain technology. Top-notch products and educational content.",
  },
  {
    clientimage: Five,
    name: "Ryan Patel",
    position: "Research Scientist",
    review:
      "I like the decentralized approach. It's refreshing to see a company putting power in the hands of its users.",
  },

  {
    clientimage: Thirteen,
    name: "Sarah van Dijk",
    position: "Nutritionist",
    review:
      "The platform is intuitive, which is a plus. I've learned a lot from the educational modules.",
  },
  {
    clientimage: Eight,
    name: "Thomas Johansson",
    position: "IT Consultant",
    review:
      "Blockchain Era is a game-changer. The educational modules have vastly expanded my understanding.",
  },
  {
    clientimage: Ten,
    name: "Hassan Al-Sayyid",
    position: "Entrepreneur",
    review:
      "TBE’s reward system has kept me engaged. The products are top-notch.",
  },
  {
    clientimage: Eleven,
    name: "Lee Hye-jin",
    position: "Data Scientist",
    review:
      "I value the emphasis on security and transparency. However, the platform's speed could be improved.",
  },
];

const ClientReviews: React.FC = () => {
  // Variables
  const swiperRef = useRef<SwiperRef>();

  return (
    <Container>
      <div className={Style.reviewsWrapper}>
        <h1>What our clients say</h1>
        <h6>
          What our clients say matters to us, and we invite you to explore their
          testimonials to understand why TBE is the preferred choice for
          blockchain solutions.
        </h6>
      </div>
      <div
        onMouseEnter={() =>
          swiperRef.current !== undefined && swiperRef.current.autoplay.stop()
        }
        onMouseLeave={() =>
          swiperRef.current !== undefined && swiperRef.current.autoplay.start()
        }
      >
        <Swiper
          onMouseEnter={() =>
            swiperRef.current !== undefined && swiperRef.current.autoplay.stop()
          }
          onMouseLeave={() =>
            swiperRef.current !== undefined &&
            swiperRef.current.autoplay.start()
          }
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          spaceBetween={25}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            991: {
              slidesPerView: 3,
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
                <Card
                  clientimage={item.clientimage}
                  name={item.name}
                  position={item.position}
                  review={item.review}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>

      <div className={Style.buttons}>
        <div
          onClick={() => {
            swiperRef.current?.slidePrev();
          }}
          className={Style.btnPrev}
        >
          <BiArrowBack />
        </div>
        <div
          onClick={() => {
            swiperRef.current?.slideNext();
          }}
          className={Style.btnNext}
        >
          <BiArrowBack />
        </div>
      </div>
    </Container>
  );
};

const Card: React.FC<CardProps> = ({ clientimage, name, position, review }) => {
  return (
    <div>
      <div className={Style.card}>
        <div className={Style.cardHead}>
          <Image src={clientimage} alt="" />
          <div className={Style.clientDetails}>
            <h6>{name}</h6>
            <p>{position}</p>
          </div>
          <Image src={doubleQuoteGreen} alt="doulbe Quote" />
        </div>
        <h6>{review}</h6>
      </div>
      <div className={Style.cardBottom}>
        <Image
          className={Style.bluredImage}
          src={blurReviewImage}
          alt="blured Image"
        />
      </div>
    </div>
  );
};

export default ClientReviews;
