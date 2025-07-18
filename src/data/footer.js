import { FaLinkedin, FaFacebookSquare } from "react-icons/fa";
import { FaXTwitter, FaInstagram, FaYoutube } from "react-icons/fa6";
import { FaGlobe } from "react-icons/fa";
import { CiBasketball } from "react-icons/ci";
import { FaChevronDown } from "react-icons/fa6";

export const footer = {
  // logoText: "lexend",
  description:
    "Connect Instantly, Communicate Seamlessly, Stay connected with friends, family, and colleagues anywhere in the world.",

  language: {
    icon: FaGlobe,
    label: "English",
    dropdown: FaChevronDown,
  },

  links: [
    {
      title: "",
      items: [
        { label: "About", href: "#" },
        { label: "Pricing", href: "#" },
        { label: "Features", href: "#" },
        { label: "Integrations", href: "#" },
        { label: "Career", href: "#" },
        { label: "Contact", href: "#" },
        { label: "Contact v2", href: "#" },
      ],
    },
    {
      title: "",
      items: [
        { label: "Shop", href: "#" },
        { label: "With sidebar", href: "#" },
        { label: "Product detail", href: "#" },
        { label: "Product detail v2", href: "#" },
        { label: "Cart", href: "#" },
        { label: "Checkout", href: "#" },
        { label: "Order confirmation", href: "#" },
      ],
    },
    {
      title: "",
      items: [
        { label: "Request a demo", href: "#" },
        { label: "Sign in", href: "#" },
        { label: "Sign in v2", href: "#" },
        { label: "Sign up", href: "#" },
        { label: "Sign up v2", href: "#" },
        { label: "Reset password", href: "#" },
        { label: "Reset password v2", href: "#" },
      ],
    },
    {
      title: "",
      items: [
        { label: "Blog", href: "#" },
        { label: "Blog detail", href: "#" },
        { label: "FAQ", href: "#" },
        { label: "404", href: "#" },
        { label: "Coming Soon", href: "#" },
        { label: "Terms of service", href: "#" },
        { label: "Privacy policy", href: "#" },
      ],
    },
  ],

  socials: [
    { Icon: FaLinkedin },
    { Icon: FaFacebookSquare },
    { Icon: FaXTwitter },
    { Icon: FaInstagram },
    { Icon: FaYoutube },
    { Icon: CiBasketball },
  ],

  copyright: "Lexend © 2025, All rights reserved.",
};
