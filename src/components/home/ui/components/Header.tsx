"use client";
import Image from "next/image";
import React, { useCallback, useEffect, useRef, useState } from "react";
import styles from "/src/app/Landing.module.css";

const Header = () => {
  const menuBtnRef = useRef<HTMLButtonElement>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const landingRef = useRef<HTMLDivElement>(null);

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
    <div>
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
            className={`${styles.mobileMenu} ${menuOpen ? styles.open : ""}`}
          >
            <a href="#about" onClick={(e) => scrollToSection(e, "about")}>
              about
            </a>
            <a href="#pricing" onClick={(e) => scrollToSection(e, "pricing")}>
              pricing
            </a>
            <a
              href="#realfeatures"
              onClick={(e) => scrollToSection(e, "realfeatures")}
            >
              features
            </a>

            <a href="https://app.withblip.com" className={styles.startBtn}>
              Start Free Trial
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
            <a href="#pricing" onClick={(e) => scrollToSection(e, "pricing")}>
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
            <a href="https://app.withblip.com" className={styles.FreeTrial}>
              Start Free Trial
            </a>
          </nav>
        </header>
      </div>
    </div>
  );
};

export default Header;
