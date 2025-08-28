"use client";
import React, { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import styles from "/src/app/Landing.module.css";

const VideoSectionStart = () => {
  const shouldReduceMotion = useReducedMotion();
  const [isMobile, setIsMobile] = useState(false);
  const light = "/images/landing/light.webp";
  return (
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
      className={styles.videoSectionContainer}
    >
      <div className={styles.videoSectionHeader}>
        <img src={light} alt="Lightning" className={styles.videoSectionIcon} />
        <div className={styles.videoSectionHeading}>
          Ad Account Set up faster than Facebook changes its algorithm
        </div>
        <div className={styles.videoSectionPara}>
          Watch a quick demo of how easy it is to configure all your existing
          preferences from ads manager to Blip!
        </div>
      </div>
      <div className={styles.videoWrapper}>
        <video
          className={styles.autoplayVideo}
          autoPlay
          muted
          loop
          playsInline
          controls
        >
          <source src="/video/setup-demo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </motion.section>
  );
};

export default VideoSectionStart;
