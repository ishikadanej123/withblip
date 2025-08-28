"use client";
import React, { useEffect, useRef } from "react";
import Footer from "../../../footer/Footer";
import styles from "/src/app/Landing.module.css";
import HeroStart from "../components/HeroStart";
import AboutStart from "../components/AboutStart";
import RealFetureStart from "../components/RealFetureStart";
import VideoSectionStart from "../components/VideoSectionStart";
import CardStart from "../components/CardStart";
import FeatureStart from "../components/FeatureStart";
import PricingStart from "../components/PricingStart";
import FaqStart from "../components/FaqStart";
import Intercom from "@intercom/messenger-js-sdk";
import HeaderStart from "../components/HeaderStart";

const StartPage = () => {
  const landingRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const timeout = setTimeout(() => {
      Intercom({ app_id: "zcgmjurf" });
    }, 5000);

    return () => clearTimeout(timeout);
  }, []);
  return (
    <div className={styles.landing} ref={landingRef}>
      <div className={styles.container}>
        <HeaderStart />
        <HeroStart />
        <AboutStart />
        <RealFetureStart />
        <VideoSectionStart />
        <CardStart />
        <FeatureStart />
        <PricingStart />
        <FaqStart />
        <Footer />
      </div>
    </div>
  );
};

export default StartPage;
