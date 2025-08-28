"use client";
import React, { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import styles from "/src/app/Landing.module.css";
import Image from "next/image";

const AboutStart = () => {
  const shouldReduceMotion = useReducedMotion();
  const [isMobile, setIsMobile] = useState(false);
  const swap = "/images/landing/Frame.svg";
  const rose = "/images/landing/rose.svg";
  const settings = "/images/landing/setting.svg";
  const rocket = "/images/landing/rocket.svg";
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{
        once: true,
        amount: 0.3,
        margin: isMobile ? "0px" : "-100px",
      }}
      transition={{
        duration: shouldReduceMotion ? 0 : 0.7,
        ease: "easeOut",
      }}
      className={`${styles.content} ${styles.nopadding}`}
    >
      <div className={styles.head}>
        <Image src={rose} width={24} height={24} alt="rose" />
        Escape from Button Clicking Hell
      </div>
      <div className={styles.groupText}>
        <div className={styles.title1}>
          The fastest way to manage multiple ad accounts
        </div>
        <div className={styles.subtitle1}>
          End context-switching whiplash. No more selecting the same settings
          over and over, copy-pasting text dozens of times, or sluggish UI.
        </div>
      </div>
      <div className={styles.buttonGroup}>
        <div className={styles.shadowButton}>
          <div className={styles.shadowWrapper}>
            <Image
              src={swap}
              alt="swap"
              width={30}
              height={30}
              className={styles.myImg}
            />
            <span>Easily Swap Ad Accounts</span>
          </div>
        </div>
        <div className={styles.shadowButton}>
          <div className={styles.shadowWrapper}>
            <Image
              src={settings}
              alt="settings"
              width={30}
              height={30}
              className={styles.myImg}
            />
            <span>Auto-Populate Settings</span>
          </div>
        </div>
        <div className={styles.shadowButton}>
          <div className={styles.shadowWrapper}>
            <Image
              src={rocket}
              alt="rocket"
              width={30}
              height={30}
              className={styles.rocketIcon}
            />
            <span>Fast launch all creatives</span>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default AboutStart;
