import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "./common/Button";
import { socials } from "../constants/socials";

const navLinks = [
  { label: "Home", id: "hero" },
  { label: "About", id: "about" },
  { label: "Experience", id: "experience" },
  { label: "Work", id: "projects" },
];

/* Animated hamburger — 3 bars morph into X */
const HamburgerButton = ({ open, onClick }) => (
  <button
    onClick={onClick}
    aria-label={open ? "Close menu" : "Open menu"}
    className="relative z-[110] flex flex-col justify-center items-center w-8 h-8 gap-[5px] md:hidden"
  >
    <motion.span
      className="block h-[2px] bg-primary-text origin-center rounded-full"
      animate={
        open ? { rotate: 45, y: 7, width: 24 } : { rotate: 0, y: 0, width: 24 }
      }
      transition={{ duration: 0.3, ease: "easeInOut" }}
    />
    <motion.span
      className="block h-[2px] bg-primary-text rounded-full"
      animate={open ? { opacity: 0, width: 0 } : { opacity: 1, width: 20 }}
      transition={{ duration: 0.2, ease: "easeInOut" }}
    />
    <motion.span
      className="block h-[2px] bg-primary-text origin-center rounded-full"
      animate={
        open
          ? { rotate: -45, y: -7, width: 24 }
          : { rotate: 0, y: 0, width: 16 }
      }
      transition={{ duration: 0.3, ease: "easeInOut" }}
    />
  </button>
);

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const lastY = React.useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      setScrolled(currentY > 50);
      if (!menuOpen) {
        setHidden(currentY > lastY.current && currentY > 100);
      }
      lastY.current = currentY;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [menuOpen]);

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const scrollToSection = (id) => {
    setMenuOpen(false);
    setTimeout(() => {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }, 400);
  };

  return (
    <>
      <motion.nav
        initial={{ y: 0, opacity: 1 }}
        animate={{ y: hidden ? -100 : 0, opacity: hidden ? 0 : 1 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className={`fixed top-0 left-0 right-0 z-[101] transition-colors duration-300 ${
          scrolled && !menuOpen
            ? "bg-primary-bg/95 backdrop-blur-md shadow-[0_10px_15px_-3px_rgba(8,253,216,0.08)]"
            : "bg-transparent"
        }`}
      >
        <div className="px-6 md:px-16 flex items-center justify-between h-[80px]">
          {/* Logo */}
          <motion.button
            onClick={() => scrollToSection("hero")}
            className="text-accent font-bold text-2xl lg:text-3xl tracking-wider hover:opacity-80 transition-opacity"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.1, ease: "easeOut" }}
          >
            P_
          </motion.button>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-8">
            <ul className="flex items-center gap-8 list-none">
              {navLinks.map((item, i) => (
                <motion.li
                  key={item.id}
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    duration: 0.4,
                    delay: 0.2 + i * 0.1,
                    ease: "easeOut",
                  }}
                >
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className="text-sm font-medium hover:text-accent transition-colors duration-200"
                  >
                    {item.label}
                  </button>
                </motion.li>
              ))}
            </ul>
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 0.4,
                delay: 0.2 + navLinks.length * 0.1,
                ease: "easeOut",
              }}
            >
              <Button onClick={() => scrollToSection("contact")} size="sm">
                Say Hi!
              </Button>
            </motion.div>
          </div>

          {/* Hamburger */}
          <HamburgerButton
            open={menuOpen}
            onClick={() => setMenuOpen((p) => !p)}
          />
        </div>
      </motion.nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.4, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-[100] bg-primary-bg flex flex-col pt-[100px] md:hidden"
          >
            {/* Nav links */}
            <nav className="flex flex-col gap-12 flex-1 mt-[100px] px-10">
              {navLinks.map((item, i) => (
                <motion.button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-left text-primary-text text-4xl font-semibold hover:text-accent transition-colors duration-200"
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 40 }}
                  transition={{
                    duration: 0.35,
                    delay: 0.4 + i * 0.2,
                    ease: "easeOut",
                  }}
                >
                  {item.label}
                </motion.button>
              ))}

              {/* Say Hi button */}
              {/* <motion.div
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 40 }}
                transition={{
                  duration: 0.35,
                  delay: 0.15 + navLinks.length * 0.07,
                  ease: "easeOut",
                }}
              >
                <Button onClick={() => scrollToSection("contact")} size="sm">
                  Say Hi!
                </Button>
              </motion.div> */}
            </nav>

            {/* Social icons */}
            <motion.div
              className="flex items-center gap-6 p-5"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.35, delay: 0.45, ease: "easeOut" }}
            >
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith("mailto") ? undefined : "_blank"}
                  rel={
                    s.href.startsWith("mailto")
                      ? undefined
                      : "noopener noreferrer"
                  }
                  aria-label={s.label}
                  className="text-secondary-text hover:text-accent transition-colors duration-200"
                >
                  <FontAwesomeIcon
                    icon={s.icon}
                    style={{ width: 22, height: 22 }}
                  />
                </a>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
