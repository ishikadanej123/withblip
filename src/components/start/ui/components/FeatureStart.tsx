"use client";
import React, { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import styles from "/src/app/Landing.module.css";
import { features } from "../../../../constants/data";

const FeatureStart = () => {
  const shouldReduceMotion = useReducedMotion();
  const [isMobile, setIsMobile] = useState(false);
  const iconOrange = "/images/landing/iconOrange.svg";
  return (
    <motion.section
      className={styles.wrapperIcon}
      id="features"
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
    >
      <div className={styles.badgeTitle}>Built by the best</div>
      <h2 className={`${styles.title} ${styles.titleupdate}`}>
        Blip has been built by people with over 10 years of experience launching
        ads
      </h2>
      <div className={`${styles.subtitle} ${styles.nosubtitle}`}>
        The team behind blip has managed over 10mil in ad spend. <br />
        The experience has been tailored to the absolute essentials which will
        improve your quality of life.
      </div>
      <div className={styles.featuresGrid}>
        {features.map((feature, index) => (
          <div key={index} className={styles.featureItem}>
            {feature.title === "Launch Ads Turned off" ? (
              <div
                className={`${styles.iconBox} ${styles.activeToggle} ${feature.iconClass}`}
              >
                <img src={iconOrange} alt="toggle" />
              </div>
            ) : (
              <div className={`${styles.iconBox} ${feature.iconClass}`}>
                <img src={feature.icon} alt={feature.title} />
              </div>
            )}
            <p className={styles.featureText}>{feature.title}</p>
          </div>
        ))}
      </div>
    </motion.section>
  );
};

export default FeatureStart;
