"use client";
import React, { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import styles from "/src/app/Landing.module.css";
import Image from "next/image";

const CardContainer = () => {
  const [isMobile, setIsMobile] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  const auto = "/images/landing/auto.svg";
  const autoImg = "/images/landing/dynamicauto1.webp";
  const cardmobile3 = "/images/landing/mobilecard3.webp";
  const carousel = "/images/landing/carousel.svg";
  const carouselImg = "/images/landing/carousel-img.webp";
  const cardmobile1 = "/images/landing/mobilecard1.webp";
  const shop = "/images/landing/shop.svg";
  const shopImg = "/images/landing/shop-img.webp";
  const cardmobile2 = "/images/landing/mobileCard2.webp";
  const dynamic = "/images/landing/dynamic.svg";
  const dynamicImg = "/images/landing/dynamic-img.webp";
  const cardmobile4 = "/images/landing/mobilecard4.webp";
  return (
    <div className={styles.cardsContainer}>
      <motion.section
        initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{
          once: true,
          amount: 0.3,
          margin: isMobile ? "0px" : "-100px",
        }}
        transition={{
          duration: shouldReduceMotion ? 0 : isMobile ? 0.2 : 0.7,
          ease: "easeOut",
        }}
        className={styles.cardHeader}
      >
        {/* <div className={styles.cardHeader}> */}
        <div className={styles.cardHeading}>
          Wide Variety of Ad Types Supported
        </div>
        <div className={styles.cardPara}>
          Through a combination of auto detection and user selection we help you
          make the right type of ad based on campaign and ad set selected.
        </div>
        {/* </div> */}
      </motion.section>

      <div className={styles.Cards}>
        <div className={styles.cardCarouselAuto1}>
          <div className={styles.cardsTitle}>
            <div className={styles.cardsHeader}>
              <Image
                alt="auto"
                src={auto}
                width={18}
                height={18}
                className={styles.headSVG}
              />
              <div className={styles.cardsHeading}>Auto Grouped</div>
            </div>
            <div className={styles.cardsPara1}>
              Upload media of different aspect ratios to group together for one
              ad
            </div>
          </div>

          <div>
            <img src={autoImg} className={styles.images} />
            <img src={cardmobile3} className={styles.mobileimages} />
          </div>
        </div>

        <div className={styles.cardCarouselAuto}>
          <div className={styles.cardsTitle}>
            <div className={styles.cardsHeader}>
              <Image
                alt="carosual"
                src={carousel}
                width={18}
                height={18}
                className={styles.headSVG}
              />
              <div className={styles.cardsHeading}>Carousel</div>
            </div>
            <div className={styles.cardsPara}>
              Easily rearrange cards, give unique text for each card or apply
              the same to all
            </div>
          </div>
          <div>
            <img src={carouselImg} className={styles.images} />
            <img src={cardmobile1} className={styles.mobileimages} />
          </div>
        </div>

        <div className={styles.cardShopDynamic}>
          <div className={styles.cardsTitle}>
            <div className={styles.cardsHeader}>
              <Image
                alt="shop"
                src={shop}
                width={18}
                height={18}
                className={styles.headSVG}
              />
              <div className={styles.cardsHeading}>Shop Destination</div>
            </div>
            <div className={styles.cardsPara}>
              Auto detects when shop destination is needed and lets you select
            </div>
          </div>
          <div>
            <img src={shopImg} className={styles.images} />
            <img src={cardmobile2} className={styles.mobileimages} />
          </div>
        </div>

        <div className={styles.cardShopDynamic1}>
          <div className={styles.cardsTitle}>
            <div className={styles.cardsHeader}>
              <Image
                alt="dynamic"
                src={dynamic}
                width={18}
                height={18}
                className={styles.headSVG}
              />
              <div className={styles.cardsHeading}>Dynamic</div>
            </div>
            <div className={styles.cardsPara}>
              Provide multiple media and text options to test for the adset
            </div>
          </div>
          <div>
            <img src={dynamicImg} className={styles.images} />
            <img src={cardmobile4} className={styles.mobileimages} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardContainer;
