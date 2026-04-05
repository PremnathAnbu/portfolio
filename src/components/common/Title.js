import { motion } from "framer-motion";
import { fadeUp, viewport } from "./animations";

function Title({ children, ...props }) {
  return (
    <motion.div
      className="mb-8 w-fit"
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      variants={fadeUp}
      custom={0}
      {...props}
    >
      <h2 className="text-primary-text text-2xl md:text-4xl font-bold mb-2">
        {children}
      </h2>
      <motion.div
        className="h-[3px] bg-accent origin-left"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={viewport}
        transition={{ duration: 0.5, ease: "easeOut", delay: 0.5 }}
        style={{ width: "55%" }}
      />
    </motion.div>
  );
}

export default Title;
