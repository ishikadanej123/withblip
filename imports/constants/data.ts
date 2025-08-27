const iconPink = "/images/landing/iconPink.svg";
const iconPurple = "/images/landing/iconPurple.svg";
const iconOrange = "/images/landing/iconOrange.svg";
const iconBlue = "/images/landing/iconBlue.svg";
const iconGreen = "/images/landing/iconGreen.svg";
const iconRed = "/images/landing/iconRed.svg";
import styles from "../../src/app/Landing.module.css";

export const features = [
  {
    title: "Turn on/off All Creative Enhancement",
    icon: iconPink,
    iconClass: styles.iconPink,
  },
  {
    title: "Custom Naming Convention",
    icon: iconPurple,
    iconClass: styles.iconPurple,
  },
  {
    title: "Launch Ads Turned off",
    icon: iconOrange,
    iconClass: styles.iconOrange,
  },
  {
    title: "Bulk Launch Ads 10X faster",
    icon: iconBlue,
    iconClass: styles.iconBlue,
  },
  {
    title: "Enterprise Settings",
    icon: iconGreen,
    iconClass: styles.iconGreen,
  },
  {
    title: "UTM Management",
    icon: iconRed,
    iconClass: styles.iconRed,
  },
];

export const faqs = [
  {
    question: "Which ad formats and creative types does Blip support?",
    answer:
      "A. Blip accommodates a wide range: single-image, single-video, carousels, dynamic ads, and shop destination formats. It auto‑groups media by aspect ratio, lets you rearrange carousel cards, and supports variants per card.Note: Blip does not currently support [insert campaign types], although we can build these features upon request.",
  },
  {
    question: "Does Blip save my unique preferences across each ad account?",
    answer:
      "A. Yes we do! Simply update your preferences once for each ad account in your Business Manager, and every time you load that account in Blip, all of your settings will pre-load, from your naming conventions to your default ad copy to your Advantage+ Creative Enhancements.",
  },
  {
    question: "How many ad accounts can I use, and what’s the pricing model?",
    answer:
      "A. You can use unlimited ad accounts under one plan. Pricing is simple—a flat $500/month rate, plus $20/month per user seat, with no hidden fees depending on ad volume or accounts.",
  },
  {
    question: "Does Blip support placement customization?",
    answer:
      "A. Yes! Simply upload both aspect ratios of your placement-specific creative (feed and story). Blip will handle this by auto-grouping your aspect ratios together into a single ad unit.",
  },
  {
    question: "Can I set up my own naming conventions in Blip?",
    answer:
      "A. Yes you can. We offer both dynamic and custom text fields that you can string together on your Preferences page to automatically generate the naming conventions that are most important to you. ",
  },
  {
    question: "Is there any ad account suspension risk to using Blip?",
    answer:
      "A. Absolutely not. Blip is an approved Meta app and has been tested thousands of times with different ad accounts, with zero reported issues.",
  },
];
