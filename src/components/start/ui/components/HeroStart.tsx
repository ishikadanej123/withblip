"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import styles from "/src/app/Landing.module.css";
import Image from "next/image";

const HeroStart = () => {
  const shouldReduceMotion = useReducedMotion();
  const [isMobile, setIsMobile] = useState(false);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [showButton1, setShowButton1] = useState(true);
  const roket = "/images/landing/uploadrocket2.webp";
  const star = "/images/landing/star.webp";
  const right = "/images/landing/check.svg";
  const meta = "/images/landing/metanew.webp";
  const video = "/images/landing/Screenshot.webp";
  const plus = "/images/landing/pauseCtaFrame.svg";
  const rose = "/images/landing/rose.svg";
  const sampleVideo = "/video/Demo.mp4";

  const handlePlay = () => {
    setIsVideoPlaying(true);
    setTimeout(() => {
      videoRef.current?.play();
    }, 100);
  };
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handlePlay = () => {
      setShowButton1(false);
    };

    video.addEventListener("play", handlePlay);

    return () => {
      video.removeEventListener("play", handlePlay);
    };
  }, []);
  return (
    <div>
      <motion.section
        initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3, margin: "-100px" }}
        transition={{
          duration: shouldReduceMotion ? 0 : isMobile ? 0.2 : 0.7,
          ease: "easeOut",
        }}
        className={styles.textcontainer}
      >
        <div className={styles.heroText}>
          The simplest,{" "}
          <span
            className={styles.inlineIcon}
            style={{ display: "inline-block", overflow: "visible" }}
          >
            <motion.img
              src={roket}
              alt="rocket"
              className={styles.herorocket}
              style={{
                transformOrigin: "center center !important",
                verticalAlign: "top", // Add this line// More explicit
              }}
              initial={{
                y: 50,
                opacity: 0,
                scale: 0.8,
              }}
              animate={{
                y: 0,
                opacity: 1,
                scale: 1.9,
              }}
              transition={{
                type: "spring",
                stiffness: 700,
                damping: 25,
                delay: 0.5,
              }}
            />
            quickest <span style={{ marginRight: 5 }} />
          </span>
          <br />
          bulk ad uploader
          <span
            className={styles.inlineIcon}
            style={{ display: "inline-block", overflow: "visible" }}
          >
            <motion.img
              src={star}
              alt="sparkles"
              className={styles.sparkle}
              style={{ transformOrigin: "center" }}
              initial={{ y: 50, opacity: 0, scale: 0.8 }}
              animate={{ y: 0, opacity: 1, scale: 1.3 }}
              transition={{
                type: "spring",
                stiffness: 700,
                damping: 25,
                delay: 0.8,
              }}
            />
          </span>
          for Meta.
        </div>
        <div className={styles.subText}>
          <div className={styles.griditem}>
            <Image src={right} alt="right" width={21} height={21} />
            <div className={styles.text}> Launch 100s of ads together</div>
          </div>
          <div className={styles.griditem}>
            <Image src={right} alt="right" width={21} height={21} />
            <div className={styles.text}> Unlimited Ad Accounts</div>
          </div>
          <div className={styles.griditem}>
            <Image src={right} alt="right" width={21} height={21} />
            <div className={styles.text}>
              {" "}
              Save your settings and launch an ad in seconds
            </div>
          </div>
        </div>
        <div className={styles.buttoncontainer}>
          <a href="https://app.withblip.com" className={styles.button}>
            Sign Up
          </a>
          {/* <div className={styles.button1}>View Demo</div>
           */}
          <a href="https://app.withblip.com" className={styles.button1}>
            Log In
          </a>
        </div>
        <div className={styles.metacontainer}>
          <Image
            src={meta}
            alt="meta"
            width={20}
            height={20}
            className={styles.metaimage}
          />
          <div className={styles.metaText}>Meta Verified Partner</div>
        </div>
        <div className={styles.imageWrapper1}>
          {!isVideoPlaying ? (
            <>
              <Image
                src={video}
                alt="Video Thumbnail"
                width={1200}
                height={800}
                className={`${styles.image} ${styles.aspectImage}`}
                onClick={handlePlay}
              />
              <button onClick={handlePlay} className={styles.overlayButton}>
                <Image
                  src={plus}
                  alt="icon"
                  width={24}
                  height={24}
                  className={styles.icon2}
                />
                Watch Demo Video
              </button>
            </>
          ) : (
            <video
              ref={videoRef}
              className={`${styles.image} ${styles.aspectVideo} shadow-md border border-red-100/50 border-2`}
              width={1200}
              height={900}
              controls
              muted
              autoPlay
              loop
              style={{ opacity: 1, transition: "opacity 0.3s ease" }}
            >
              <source src={sampleVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          )}
        </div>
      </motion.section>

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
        className={styles.textcontainerstart}
      >
        <div className={styles.heroTextStart}>
          The simplest,
          <span className={styles.inlineIconStart}>
            <motion.img
              src={roket}
              alt="rocket"
              className={styles.herorocketStart}
              style={{ transformOrigin: "center" }}
              initial={{ y: 50, opacity: 0, scale: 0.8 }}
              animate={{ y: 0, opacity: 1, scale: 1.7 }}
              transition={{
                type: "spring",
                stiffness: 600,
                damping: 25,
                delay: 0.5,
              }}
            />
            <span style={{ marginRight: "5px" }} />
            <br />
            quickest bulk ad
          </span>
          <br />
          <span className={styles.inlineIconStart}>
            uploader
            <motion.img
              src={star}
              alt="sparkles"
              className={styles.sparkleStart}
              initial={{ y: 50, opacity: 0, scale: 0.8 }}
              animate={{ y: 0, opacity: 1, scale: 1.3 }}
              transition={{
                type: "spring",
                stiffness: 600,
                damping: 25,
                delay: 0.7,
              }}
            />
            for Meta.
          </span>
        </div>

        <div className={styles.imageWrapper}>
          <div className={styles.videoContainer}>
            {!isVideoPlaying ? (
              <>
                <Image
                  src={video}
                  alt="Video Thumbnail"
                  width={1200}
                  height={800}
                  className={`${styles.image} ${styles.aspectImage}`}
                  onClick={handlePlay}
                />
                <button onClick={handlePlay} className={styles.overlayButton}>
                  <Image
                    src={plus}
                    alt="icon"
                    width={24}
                    height={24}
                    className={styles.icon2}
                  />
                  Watch Demo Video
                </button>
              </>
            ) : (
              <video
                ref={videoRef}
                className={`${styles.image} ${styles.aspectVideo}`}
                controls
                muted
                autoPlay
                loop
                style={{ opacity: 1, transition: "opacity 0.3s ease" }}
              >
                <source src={sampleVideo} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            )}
          </div>
        </div>
        <div className={styles.buttonScontainer}>
          <a href="https://app.withblip.com" className={styles.buttoncontainer}>
            <div className={styles.button1Start}>Log In</div>
          </a>
          <div className={styles.metacontainerStart}>
            <Image
              src={meta}
              alt="meta"
              width={10}
              height={10}
              className={styles.metaimageStart}
            />
            <div className={styles.metaTextStart}>Meta Verified Partner</div>
          </div>
        </div>

        <div className={styles.subText}>
          <div className={styles.griditem}>
            <Image src={right} alt="right" width={21} height={21} />
            <div className={styles.text}> Launch 100s of ads together</div>
          </div>
          <div className={styles.griditem}>
            <Image src={right} alt="right" width={21} height={21} />
            <div className={styles.text}> Unlimited Ad Accounts</div>
          </div>
          <div className={styles.griditem}>
            <Image src={right} alt="right" width={21} height={21} />
            <div className={styles.text}>
              {" "}
              Save your settings and launch an ad in seconds
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default HeroStart;
