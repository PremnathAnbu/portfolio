import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { socials } from "../constants/socials";

const SocialSidebar = () => {
  const defaultDelay = 1.5; // Animate after the navlinks have finished animating in

  return (
    <motion.div
      className="fixed bottom-0 left-6 lg:left-10 z-40 hidden md:flex flex-col items-center gap-2"
      initial="hidden"
      animate="visible"
    >
      {socials.map((s, i) => (
        <motion.a
          key={s.label}
          href={s.href}
          target={s.href.startsWith("mailto") ? undefined : "_blank"}
          rel={s.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
          aria-label={s.label}
          className="text-secondary-text hover:text-accent transition-colors duration-200 p-2"
          initial={{ opacity: 0, x: -20 }}
          animate={{
            opacity: 1,
            x: 0,
            transition: { duration: 0.4, delay: defaultDelay + i * 0.1 },
          }}
          whileHover={{ y: -3, transition: { duration: 0.2, ease: "easeOut" } }}
          transition={{ duration: 0.2, ease: "easeOut" }}
        >
          <FontAwesomeIcon
            icon={s.icon}
            aria-hidden="true"
            style={{ width: 20, height: 20 }}
          />
        </motion.a>
      ))}
      {/* Vertical line */}
      <motion.div
        className="w-px bg-secondary-text mt-2"
        initial={{ height: 0 }}
        animate={{ height: 90 }}
        transition={{
          duration: 0.6,
          delay: defaultDelay + socials.length * 0.1,
        }}
      />
    </motion.div>
  );
};

export default SocialSidebar;
