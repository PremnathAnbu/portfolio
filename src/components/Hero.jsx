import { motion } from "framer-motion";
import Button from "./common/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { fadeUp } from "./common/animations";

const Hero = () => {
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const defaultDelay = 0.7; // Animate after the navlinks have finished animating in

  return (
    <section
      id="hero"
      className="w-full min-h-screen flex items-center bg-primary-bg"
    >
      <div className="min-[1700px]:ml-[20%] max-[1700px]:flex max-[1700px]:justify-center mx-auto px-6 md:px-12 w-full pt-16">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.15 },
            },
          }}
        >
          {/* Greeting */}
          <motion.p
            variants={fadeUp}
            custom={defaultDelay}
            className="text-accent mb-6 tracking-wide"
          >
            Hi, my name is
          </motion.p>

          {/* Name */}
          <motion.h1
            variants={fadeUp}
            custom={defaultDelay + 0.1}
            className="text-primary-text font-semibold leading-tight md:whitespace-nowrap text-[clamp(40px,7vw,80px)]"
          >
            Premnath Anbu.
          </motion.h1>

          {/* Tagline */}
          <motion.h2
            variants={fadeUp}
            custom={defaultDelay + 0.2}
            className="text-secondary-text font-bold leading-tight md:whitespace-nowrap mb-5 text-[clamp(36px,6.5vw,74px)]"
          >
            I turn data into decisions.
          </motion.h2>

          {/* Description */}
          <motion.p
            variants={fadeUp}
            custom={defaultDelay + 0.3}
            className="text-secondary-text text-base leading-relaxed max-w-[720px] mb-12"
          >
            I’m a software engineer who turns data into intelligent systems
            using machine learning and generative AI—building scalable solutions
            that power smarter decisions and real-world results.
          </motion.p>

          {/* CTA Button */}
          <motion.div variants={fadeUp} custom={defaultDelay + 0.4}>
            <Button onClick={() => scrollToSection("about")}>
              Learn more
              <FontAwesomeIcon
                icon={faArrowRight}
                aria-hidden="true"
                className="group-hover:translate-x-1 transition-transform duration-200"
              />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
