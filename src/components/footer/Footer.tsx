"use client";
import React, { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import styles from "/src/app/Landing.module.css";
import Image from "next/image";

const Footer = () => {
  const shouldReduceMotion = useReducedMotion();
  const [isMobile, setIsMobile] = useState(false);
  return (
    <motion.section
      className={styles.footer}
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
      <div className={styles.footerLeft}>
        <div className={styles.leftTop}>
          <Image
            src="/images/landing/logo.webp"
            alt="Rocket"
            width={32}
            height={32}
            className={styles.blipLogo}
            priority
          />
          <span className={styles.brandTextFooter}>Blip</span>
        </div>

        <a href="mailto:shree@withblip.com" className={styles.footerEmail}>
          shree@withblip.com
        </a>
      </div>
      <div className={styles.footerRight}>
        <a
          href="https://app.withblip.com/privacy-policy"
          className={styles.footerPolicies}
          target="_blank"
        >
          Privacy Policy
        </a>
        <a
          href="https://app.withblip.com/terms-of-service"
          className={styles.footerPolicies}
          target="_blank"
        >
          Terms of Service
        </a>
        <div className={styles.footerPoliciesNew}>
          Blip use and transfer of information received from Google APIs to any
          other app will adhere to{" "}
          <a href="https://developers.google.com/workspace/workspace-api-user-data-developer-policy">
            Workspace API User Data and Developer Policy
          </a>
          , including the{" "}
          <a href="https://developers.google.com/workspace/workspace-api-user-data-developer-policy#limited-use">
            Limited use of user data.
          </a>
        </div>
      </div>
    </motion.section>
  );
};

export default Footer;
