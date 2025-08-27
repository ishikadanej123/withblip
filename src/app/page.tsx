"use client";
import { useEffect, useRef, useState, useCallback } from "react";
import { motion, useReducedMotion } from "framer-motion";
import styles from "./Landing.module.css";

import Intercom from "@intercom/messenger-js-sdk";
import Image from "next/image";
import { faqs, features } from "../../imports/constants/data";

// Intercom({
//   app_id: "zcgmjurf",
// });

// Updated asset paths for Next.js public folder
const roket = "/images/landing/uploadrocket2.webp";
const star = "/images/landing/star.webp";
const right = "/images/landing/check.svg";
const video = "/images/landing/Screenshot.webp";
const plus = "/images/landing/pauseCtaFrame.svg";
const rose = "/images/landing/rose.svg";
const swap = "/images/landing/Frame.svg";
const settings = "/images/landing/setting.svg";
const rocket = "/images/landing/rocket.svg";
const iconOrange = "/images/landing/iconOrange.svg";
const cardrocket = "/images/landing/tranparentRocket.svg";
const uprocket = "/images/landing/uploadrocket2.webp";
const thumb1 = "/images/landing/thumb1.webp";
const thumb2 = "/images/landing/thumb2.webp";
const thumb3 = "/images/landing/thumb3.webp";
const copy = "/images/landing/transparentCopy.svg";
const check = "/images/landing/checkmark.svg";
const cardsettings = "/images/landing/transparentSetting.svg";
const download = "/images/landing/transparentDoenload.svg";
const carousel = "/images/landing/carousel.svg";
const shop = "/images/landing/shop.svg";
const auto = "/images/landing/auto.svg";
const dynamic = "/images/landing/dynamic.svg";
const carouselImg = "/images/landing/carousel-img.webp";
const dynamicImg = "/images/landing/dynamic-img.webp";
const autoImg = "/images/landing/dynamicauto1.webp";
const shopImg = "/images/landing/shop-img.webp";
const sampleVideo = "/video/Demo.mp4";
const dwimg = "/images/landing/download.svg";
const copimg = "/images/landing/copy.svg";
const image = "/images/landing/pic.svg";
const driveIcon = "/images/landing/googledrive.webp";
const cardmobile1 = "/images/landing/mobilecard1.webp";
const cardmobile2 = "/images/landing/mobileCard2.webp";
const cardmobile3 = "/images/landing/mobilecard3.webp";
const cardmobile4 = "/images/landing/mobilecard4.webp";
const meta = "/images/landing/metanew.webp";
const light = "/images/landing/light.webp";
const earth = "/images/landing/earth.webp";
const cards = "/images/landing/cartgroup.webp";
const mobilecards = "/images/landing/cartmobile.webp";
const plusicon = "/images/landing/plus.svg";

export default function LandingPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const shouldReduceMotion = useReducedMotion();
  const landingRef = useRef<HTMLDivElement>(null);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [showButton1, setShowButton1] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const menuBtnRef = useRef<HTMLButtonElement>(null);
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const refs = useRef<(HTMLDivElement | null)[]>([]);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      Intercom({ app_id: "zcgmjurf" });
    }, 5000);

    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    const setVh = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--vh", `${vh}px`);
    };
    setVh();
    window.addEventListener("resize", setVh);
    return () => window.removeEventListener("resize", setVh);
  }, []);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 576);
    };

    checkMobile();

    window.addEventListener("resize", checkMobile);

    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

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

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const scrollHandler = () => {
      if (landingRef.current) {
        setIsScrolled(landingRef.current.scrollTop > 10);
      }
    };

    landingRef.current?.addEventListener("scroll", scrollHandler);
    return () =>
      landingRef.current?.removeEventListener("scroll", scrollHandler);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: Event) => {
      const target = event.target as Element;
      if (
        menuOpen &&
        target &&
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(target) &&
        menuBtnRef.current &&
        !menuBtnRef.current.contains(target)
      ) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [menuOpen]);

  const scrollToSection = useCallback(
    (e: React.MouseEvent, sectionId: string) => {
      e.preventDefault();
      const section = document.getElementById(sectionId);

      if (section) {
        section.scrollIntoView({ behavior: "smooth", block: "start" });
        setMenuOpen(false);
      }
    },
    []
  );
  return (
    <>
      <div className={styles.landing} ref={landingRef}>
        <div className={styles.container}>
          <div>
            <div className={styles.logoWrapper}>
              <Image
                src="/images/landing/logo.webp"
                alt="Logo"
                width={48}
                height={48}
                className={styles.blipLogo}
                priority
              />
              <span className={styles.brandText}>Blip</span>
            </div>
            <header className={styles.header}>
              <div className={styles.brand}>
                <Image
                  src="/images/landing/logo.webp"
                  alt="Logo"
                  width={32}
                  height={32}
                  className={styles.blipLogo}
                  priority
                />
                <span className={styles.brandText}>Blip</span>
              </div>
              <button
                className={styles.menuBtn}
                ref={menuBtnRef}
                onClick={() => setMenuOpen((open) => !open)}
              >
                <div className={styles.menuBtnText}>Menu</div>
              </button>

              <div
                ref={mobileMenuRef}
                className={`${styles.mobileMenu} ${
                  menuOpen ? styles.open : ""
                }`}
              >
                <a href="#about" onClick={(e) => scrollToSection(e, "about")}>
                  about
                </a>
                <a
                  href="#pricing"
                  onClick={(e) => scrollToSection(e, "pricing")}
                >
                  pricing
                </a>
                <a
                  href="#realfeatures"
                  onClick={(e) => scrollToSection(e, "realfeatures")}
                >
                  features
                </a>

                <a href="https://app.withblip.com" className={styles.startBtn}>
                  Log In
                </a>
              </div>
              <nav
                className={`${styles.navLinks} ${
                  isScrolled ? styles.scrolled : ""
                }`}
              >
                <a href="#about" onClick={(e) => scrollToSection(e, "about")}>
                  about
                </a>
                <a
                  href="#pricing"
                  onClick={(e) => scrollToSection(e, "pricing")}
                >
                  pricing
                </a>
                <a
                  href="#realfeatures"
                  onClick={(e) => scrollToSection(e, "realfeatures")}
                >
                  features
                </a>
                {/* <button className={styles.startBtn}>Start Now</button> */}
                <a href="https://app.withblip.com" className={styles.startBtn}>
                  Log In
                </a>
              </nav>
            </header>
          </div>

          <motion.section
            animate={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
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
                    priority
                    fetchPriority="high"
                    placeholder="blur"
                    sizes="(max-width: 480px) 96vw,
         (max-width: 768px) 92vw,
         (max-width: 1200px) 960px,
         1200px"
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
            animate={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
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
                      priority
                      fetchPriority="high"
                      placeholder="blur"
                      sizes="(max-width: 480px) 96vw,
         (max-width: 768px) 92vw,
         (max-width: 1200px) 960px,
         1200px"
                    />
                    <button
                      onClick={handlePlay}
                      className={styles.overlayButton}
                    >
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
              <a
                href="https://app.withblip.com"
                className={styles.buttoncontainer}
              >
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
                <div className={styles.metaTextStart}>
                  Meta Verified Partner
                </div>
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

          <motion.section
            animate={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
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
                End context-switching whiplash. No more selecting the same
                settings over and over, copy-pasting text dozens of times, or
                sluggish UI.
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

          <div className={styles.mainGrid} id="realfeatures">
            <div className={styles.grid}>
              <div className={styles.card}>
                <div className={styles.cardcontainer}>
                  <div className={styles.textwrap}>
                    <Image
                      src={cardrocket}
                      alt="rocket"
                      width={33}
                      height={31}
                    />
                    <div className={styles.tag}>Fast and Furious</div>
                  </div>
                  <div className={styles.title2}>
                    Upload multiple creatives at once
                  </div>
                  <div className={styles.cardDes}>
                    Automate your ad creation flow with lightning-fast bulk
                    uploads, saved settings, and ad previews — all in one clean
                    dashboard.
                  </div>
                </div>

                <div className={styles.uploadContainer}>
                  <div className={styles.contentWrap}>
                    <div className={styles.uploadHeader}>
                      <Image
                        src={uprocket}
                        alt="rocket"
                        width={45}
                        height={45}
                      />
                      <div className={styles.subheadspan}>
                        <strong>30 Files uploaded</strong>
                        <div className={styles.subhead}>to a new adset</div>
                      </div>
                    </div>
                    <div className={styles.progressBar}>
                      <div className={styles.progressBarFill}></div>
                    </div>
                  </div>

                  <div className={styles.thumbnailStack}>
                    <Image
                      src={thumb2}
                      width={85}
                      height={56}
                      alt="thumb1"
                      className={` ${styles.leftcard}`}
                    />
                    <Image
                      src={thumb3}
                      alt="thumb2"
                      width={85}
                      height={56}
                      className={`${styles.centercard}`}
                    />
                    <Image
                      src={thumb1}
                      alt="thumb3"
                      width={85}
                      height={56}
                      className={`${styles.rightcard}`}
                    />
                  </div>
                </div>
              </div>
              <div className={styles.card4}>
                <div>
                  <div className={styles.textwrap}>
                    <Image
                      src={cardsettings}
                      alt="copy"
                      width={24}
                      height={24}
                    />
                    <div className={styles.tag}>
                      Every setting everywhere at once
                    </div>
                  </div>
                  <div className={styles.title2}>
                    Persistent Settings Per Ad Account
                  </div>
                  <div className={styles.cardDes}>
                    UTMs, page selections, ad name formulas, all saved, per ad
                    account, so nothing resets on reload.
                  </div>
                </div>
                <div className={styles.gridwrap1}>
                  <div className={styles.gridcontainer}>
                    <div className={styles.stepbadge}>1</div>
                    <div className={styles.point}>
                      Toggle all Meta Creative Enhancements
                    </div>
                  </div>
                  <div className={styles.gridcontainer}>
                    <div className={styles.stepbadge}>2</div>
                    <div className={styles.point}>
                      Default CTA, Links and UTMs
                    </div>
                  </div>
                  <div className={styles.gridcontainer}>
                    <div className={styles.stepbadge}>3</div>
                    <div className={styles.point}>
                      Custom Ad Naming Conventions
                    </div>
                  </div>
                  <div className={styles.addbutton1}>
                    Auto Populate All Settings
                  </div>
                </div>
              </div>
              <div className={styles.mobilecard2}>
                <div>
                  <div className={styles.textwrap}>
                    <Image src={copy} alt="copy" width={24} height={24} />
                    <div className={styles.tag}>Saving private templates</div>
                  </div>
                  <div className={styles.title2}>
                    Apply saved templates for copy, CTA, and links
                  </div>
                  <div className={styles.cardDes}>
                    Stop wasting time in Meta Ads Manager&apos;s clunky
                    interface. Simply select your ideal settings once. We take
                    care of the rest.
                  </div>
                </div>

                <div className={styles.gridwrap}>
                  <div className={styles.gridcontainer}>
                    <Image src={dwimg} alt="rocket" width={18} height={18} />
                    <div className={styles.point}>
                      Import recently used copy from Meta
                    </div>
                  </div>
                  <div className={styles.gridcontainer}>
                    <Image src={copimg} alt="rocket" width={18} height={18} />
                    <div className={styles.point}>
                      Save Variations of Primary Text and Headlines
                    </div>
                  </div>
                  <div className={styles.gridcontainer}>
                    <Image src={image} alt="rocket" width={18} height={18} />
                    <div className={styles.point}>
                      Making ads using new template
                    </div>
                  </div>
                  <div className={styles.addbutton}>+ Add New Template</div>
                </div>
              </div>
            </div>
            <div className={styles.grid}>
              <div className={styles.mobilecard4}>
                <div>
                  <div className={styles.textwrap}>
                    <Image
                      src={cardsettings}
                      alt="copy"
                      width={24}
                      height={24}
                    />
                    <div className={styles.tag}>
                      Every setting everywhere at once
                    </div>
                  </div>
                  <div className={styles.title2}>
                    Persistent Settings Per Ad Account
                  </div>
                  <div className={styles.cardDes}>
                    UTMs, page selections, ad name formulas, all saved, per ad
                    account, so nothing resets on reload.
                  </div>
                </div>
                <div className={styles.gridwrap1}>
                  <div className={styles.gridcontainer}>
                    <div className={styles.stepbadge}>1</div>
                    <div className={styles.point}>
                      Toggle all Meta Creative Enhancements
                    </div>
                  </div>
                  <div className={styles.gridcontainer}>
                    <div className={styles.stepbadge}>2</div>
                    <div className={styles.point}>
                      Default CTA, Links and UTMs
                    </div>
                  </div>
                  <div className={styles.gridcontainer}>
                    <div className={styles.stepbadge}>3</div>
                    <div className={styles.point}>
                      Custom Ad Naming Conventions
                    </div>
                  </div>
                  <div className={styles.addbutton1}>Save Settings</div>
                </div>
              </div>
              <div className={styles.card2}>
                <div>
                  <div className={styles.textwrap}>
                    <Image src={copy} alt="copy" width={24} height={24} />
                    <div className={styles.tag}>Saving private templates</div>
                  </div>
                  <div className={styles.title2}>
                    Apply saved templates for copy, CTA, and links
                  </div>
                  <div className={styles.cardDes}>
                    Stop wasting time in Meta Ads Manager&apos;s clunky
                    interface. Simply select your ideal settings once. We take
                    care of the rest.
                  </div>
                </div>
                <div className={styles.gridwrap}>
                  <div className={styles.gridcontainer}>
                    <Image src={dwimg} alt="rocket" width={20} height={20} />
                    <div className={styles.point}>
                      Import recently used copy from Meta
                    </div>
                  </div>
                  <div className={styles.gridcontainer}>
                    <Image src={copimg} alt="rocket" width={20} height={20} />
                    <div className={styles.point}>
                      Save Variations of Primary Text and Headlines
                    </div>
                  </div>
                  <div className={styles.gridcontainer}>
                    <Image src={image} alt="rocket" width={20} height={20} />
                    <div className={styles.point}>
                      Making ads using new template
                    </div>
                  </div>
                  <div className={styles.addbutton}>+ Add New Template</div>
                </div>
              </div>
              <div className={styles.card3}>
                <div>
                  <div className={styles.textwrap}>
                    <Image src={download} alt="rocket" width={24} height={24} />
                    <div className={styles.tag}>Arrival</div>
                  </div>
                  <div className={styles.title2}>
                    No more upload, download hell.
                  </div>
                  <div className={styles.cardDes}>
                    No need to spend hours downloading hundreds of ad assets.
                    With Blip, you can one-click deploy media from your Drive to
                    Meta Ads Manager.
                  </div>
                </div>

                <div className={styles.uploadContainer1}>
                  <div className={styles.uploadIconWrap1}>
                    <Image
                      src={driveIcon}
                      alt="Drive"
                      className={styles.drive}
                      width={50}
                      height={50}
                    />
                  </div>
                  <div className={styles.contentWrap1}>
                    <div className={styles.progressBar1}>
                      <div className={styles.progressBarFill1}></div>
                    </div>
                  </div>
                  <div className={styles.uploadIconWrap1}>
                    <Image
                      src="/images/landing/logo.webp"
                      alt="Rocket"
                      width={92}
                      height={92}
                      className={styles.rocket}
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <motion.section
            animate={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
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
              <img
                src={light}
                alt="Lightning"
                className={styles.videoSectionIcon}
              />
              <div className={styles.videoSectionHeading}>
                Ad Account Set up faster than Facebook changes its algorithm
              </div>
              <div className={styles.videoSectionPara}>
                Watch a quick demo of how easy it is to configure all your
                existing preferences from ads manager to Blip!
              </div>
            </div>
            <div className={styles.videoWrapper}>
              <video
                className={`${styles.autoplayVideo} ${styles.desktopVideo}`}
                muted
                loop
                playsInline
                controls
                autoPlay
              >
                <source src="/video/setup-demo.mp4" type="video/mp4" />
              </video>

              <video
                className={`${styles.autoplayVideo} ${styles.mobileVideo}`}
                muted
                loop
                playsInline
                controls
                autoPlay
              >
                <source src="/video/setup-demo-mobile.mp4" type="video/mp4" />
              </video>
            </div>
          </motion.section>

          <div className={styles.cardsContainer}>
            <motion.section
              animate={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
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
                Through a combination of auto detection and user selection we
                help you make the right type of ad based on campaign and ad set
                selected.
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
                    Upload media of different aspect ratios to group together
                    for one ad
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
                    Easily rearrange cards, give unique text for each card or
                    apply the same to all
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
                    Auto detects when shop destination is needed and lets you
                    select
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
                    Provide multiple media and text options to test for the
                    adset
                  </div>
                </div>
                <div>
                  <img src={dynamicImg} className={styles.images} />
                  <img src={cardmobile4} className={styles.mobileimages} />
                </div>
              </div>
            </div>
          </div>

          <motion.section
            animate={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
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
              Blip has been built by people with over 10 years of experience
              launching ads
            </h2>
            <div className={`${styles.subtitle} ${styles.nosubtitle}`}>
              The team behind blip has managed over 10mil in ad spend. <br />
              The experience has been tailored to the absolute essentials which
              will improve your quality of life.
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

          <motion.section
            animate={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
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
                      <Image src={check} alt="check" width={14} height={14} />
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
                      <img src={check} alt="check" width={14} height={14} />
                    </span>
                    Meta Verified Partner
                  </li>
                </ul>

                <div className={styles.teamNoteStart}>
                  Additional Team Seats
                </div>
                <p className={styles.teamComingStart}>$20/month/user</p>
                <a
                  href="https://app.withblip.com"
                  className={styles.ctaBtnStart}
                >
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

          <motion.section
            animate={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
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
            className={styles.faqcontainer}
          >
            <div className={styles.headfaq}>Frequently Asked Questions</div>
            <div className={styles.faqBox}>
              {faqs.map((item, index) => (
                <div key={index} className={styles.faqline}>
                  <div
                    className={`${styles.qacontainer} ${
                      openIndex === index && index !== 0 ? styles.activefaq : ""
                    }`}
                  >
                    <div
                      className={`${styles.quediv} ${
                        openIndex !== index ? styles.closefaq : ""
                      } ${
                        openIndex !== index && index !== 0
                          ? styles.closeques
                          : ""
                      }`}
                      onClick={() => toggleFaq(index)}
                    >
                      <div
                        className={`${styles.question} ${
                          index === 0 && openIndex === index
                            ? styles.firstque
                            : ""
                        }`}
                      >
                        Q. {item.question}
                      </div>
                      <img
                        src={plusicon}
                        alt="toggle"
                        className={`${styles.plussvg} ${
                          openIndex === index ? styles.rotate : ""
                        }`}
                      />
                    </div>
                    <div
                      ref={(el) => {
                        refs.current[index] = el;
                      }}
                      className={`${styles.ansdiv} ${
                        openIndex === index && index === 0 ? styles.open : ""
                      }`}
                      style={{
                        maxHeight:
                          openIndex === index
                            ? refs.current[index]?.scrollHeight + "px"
                            : "0",
                      }}
                    >
                      {item.answer}
                    </div>
                  </div>
                  <div className={`${styles.line} `} />
                </div>
              ))}
            </div>
          </motion.section>
          <motion.section
            animate={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
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

              <a
                href="mailto:shree@withblip.com"
                className={styles.footerEmail}
              >
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
                Blip use and transfer of information received from Google APIs
                to any other app will adhere to{" "}
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
        </div>
      </div>
    </>
  );
}
