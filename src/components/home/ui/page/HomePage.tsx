"use client";
import React, { useEffect, useRef } from "react";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import About from "../components/About";
import RealFetures from "../components/RealFetures";
import VideoSection from "../components/VideoSection";
import CardContainer from "../components/CardContainer";
import FeturesSection from "../components/FeturesSection";
import PricingSection from "../components/PricingSection";
import FaqSection from "../components/FaqSection";
import Footer from "../../../footer/Footer";
import styles from "/src/app/Landing.module.css";
import Intercom from "@intercom/messenger-js-sdk";

// Intercom({
//   app_id: "zcgmjurf",
// });

const HomePage = () => {
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
        <Header />
        <HeroSection />
        <About />
        <RealFetures />
        <VideoSection />
        <CardContainer />
        <FeturesSection />
        <PricingSection />
        <FaqSection />
        <Footer />
      </div>
    </div>
  );
};

export default HomePage;
