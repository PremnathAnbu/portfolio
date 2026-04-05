import { motion } from "framer-motion";
import { fadeUp, viewport } from "./common/animations";
import Button from "./common/Button";
import { socials } from "../constants/socials";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Contact = () => {
  return (
    <section id="contact" className="bg-primary-bg py-20 lg:py-28">
      <motion.div
        className="max-w-[900px] mx-auto px-6 md:px-12 text-center flex flex-col items-center justify-center"
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        variants={fadeUp}
        custom={0}
      >
        <motion.h2
          className="text-primary-text text-4xl font-bold mb-6"
          variants={fadeUp}
          custom={0.1}
        >
          Get In Touch
        </motion.h2>

        <motion.p
          className="text-secondary-text leading-relaxed mb-10 text-[15px] md:text-base"
          variants={fadeUp}
          custom={0.2}
        >
          Although I'm not currently looking for any new opportunities, my inbox
          is always open. Whether you have a question or just want to say hi,
          I'll try my best to get back to you!
        </motion.p>

        <motion.a
          href="mailto:premnath@example.com"
          variants={fadeUp}
          custom={0.35}
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
        >
          <Button>Say Hi!</Button>
        </motion.a>
        {/* Socials — mobile only (sidebar is hidden on mobile) */}
        <motion.div
          className="flex md:hidden items-center gap-6 mt-8"
          variants={fadeUp}
          custom={0.45}
        >
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target={s.href.startsWith("mailto") ? undefined : "_blank"}
              rel={
                s.href.startsWith("mailto") ? undefined : "noopener noreferrer"
              }
              aria-label={s.label}
              className="text-secondary-text hover:text-accent transition-colors duration-200"
            >
              <FontAwesomeIcon
                icon={s.icon}
                style={{ width: 20, height: 20 }}
              />
            </a>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

const Footer = () => (
  <footer className="py-6">
    <p className="text-center text-secondary-text text-sm">
      ©2025. All Rights Reserved.
    </p>
  </footer>
);

export { Contact, Footer };
