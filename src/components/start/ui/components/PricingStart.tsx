"use client";
import React, { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import styles from "/src/app/Landing.module.css";
import Image from "next/image";

const PricingStart = () => {
  const shouldReduceMotion = useReducedMotion();
  const [isMobile, setIsMobile] = useState(false);
  const check = "/images/landing/checkmark.svg";
  const light = "/images/landing/light.webp";
  const earth = "/images/landing/earth.webp";
  const cards = "/images/landing/cartgroup.webp";
  const mobilecards = "/images/landing/cartmobile.webp";
  return (
    <motion.section
      id="pricing"
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
      className={styles.wrapperStart}
    >
      <div className={styles.container2Start}>
        <div className={styles.startcontent3}>
          <div className={styles.badgeStart}>
            1 Flat Price. Unlimited Ad Accounts
          </div>
          <div className={styles.price1Start}>The Price Is Right</div>
          <div className={styles.descriptionStart}>
            7 Day Free Trial. No CC required
          </div>
          <div className={styles.priceStart}>$500/month</div>
          <ul className={styles.featureStart}>
            <li className={styles.feature}>
              <span className={styles.icon}>
                <Image alt="check" src={check} width={14} height={14} />
              </span>
              Unlimited Ad Launches
            </li>
            <li className={styles.feature}>
              <span className={styles.icon}>
                <Image src={check} alt="check" width={14} height={14} />
              </span>
              Unlimited Ad Accounts
            </li>
            <li className={styles.feature}>
              <span className={styles.icon}>
                <Image src={check} alt="check" width={14} height={14} />
              </span>
              Unlimited Spend
            </li>
            <li className={styles.feature}>
              <span className={styles.icon}>
                <Image src={check} alt="check" width={14} height={14} />
              </span>
              Meta Verified Partner
            </li>
          </ul>

          <div className={styles.teamNoteStart}>Additional Team Seats</div>
          <p className={styles.teamComingStart}>$20/month/user</p>
          <a href="https://app.withblip.com" className={styles.ctaBtnStart}>
            Start Posting Ads
          </a>
        </div>
      </div>
      <div className={styles.container3Start}>
        <div className={styles.startcontent3}>
          <img src={light} alt="light" className={styles.startlight} />
          <div className={styles.subStartText}>
            “Minimal, Straightforward, Powerful. Save 10 Hours a week Bulk
            Uploading 100s of Ads in a click”
          </div>
          <div className={styles.startTextContainer}>
            <Image src={earth} alt="earth" width={32} height={32} />
            <div className={styles.userStart}>-Peter, Flighted Owner</div>
          </div>
          <div className={styles.adsStart}>
            <div className={styles.startTitle}>Launching Ads For</div>
            <img src={cards} alt="carts" className={styles.cartsimage} />
            <img
              src={mobilecards}
              alt="cartsmobile"
              className={styles.cartsmobile}
            />
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default PricingStart;
