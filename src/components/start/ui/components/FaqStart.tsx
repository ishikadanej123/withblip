"use client";
import React, { useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import styles from "/src/app/Landing.module.css";
import { faqs } from "../../../../constants/data";

const FaqStart = () => {
  const shouldReduceMotion = useReducedMotion();
  const [isMobile, setIsMobile] = useState(false);
  const refs = useRef<(HTMLDivElement | null)[]>([]);
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  const plusicon = "/images/landing/plus.svg";

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
                  openIndex !== index && index !== 0 ? styles.closeques : ""
                }`}
                onClick={() => toggleFaq(index)}
              >
                <div
                  className={`${styles.question} ${
                    index === 0 && openIndex === index ? styles.firstque : ""
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
  );
};

export default FaqStart;
