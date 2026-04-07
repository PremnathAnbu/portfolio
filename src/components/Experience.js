import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { staggerContainer, staggerItem, viewport } from "./common/animations";
import { faCaretRight, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import Title from "./common/Title";
import { jobs } from "../constants/experiences";

const Experience = () => {
  const [openSet, setOpenSet] = useState(new Set([0]));

  const toggle = (i) =>
    setOpenSet((prev) => {
      const next = new Set(prev);
      next.has(i) ? next.delete(i) : next.add(i);
      return next;
    });

  return (
    <section id="experience" className="bg-primary-bg py-20 lg:py-28">
      <div className="max-w-[1100px] mx-auto px-6 md:px-12">
        {/* Section heading */}
        <Title>Where I've Worked</Title>

        <motion.div
          className="space-y-0"
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={staggerContainer}
        >
          {jobs.map((job, i) => (
            <motion.div
              key={i}
              variants={staggerItem}
              className="border-b border-border last:border-b-0"
            >
              {/* Accordion header */}
              <button
                onClick={() => toggle(i)}
                aria-expanded={openSet.has(i)}
                aria-controls={`experience-panel-${i}`}
                className="w-full flex items-center justify-between py-5 text-left group"
              >
                <div>
                  <span className="text-primary-text font-medium">
                    {job.title}{" "}
                  </span>
                  <a
                    href={job.companyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="text-accent font-medium hover:underline"
                  >
                    @ {job.company}
                  </a>
                  <p className="text-secondary-text text-sm mt-1">
                    {job.period}
                  </p>
                </div>
                <motion.span
                  className="text-secondary-text group-hover:text-primary-text text-lg select-none transition-colors duration-200"
                  animate={{ rotate: openSet.has(i) ? 180 : 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  aria-hidden="true"
                >
                  <FontAwesomeIcon icon={faChevronDown} className="text-sm" />
                </motion.span>
              </button>

              {/* Accordion body */}
              <AnimatePresence initial={false}>
                {openSet.has(i) && (
                  <motion.div
                    key="content"
                    id={`experience-panel-${i}`}
                    role="region"
                    aria-label={`${jobs[i].title} at ${jobs[i].company}`}
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.35, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <ul className="space-y-3 pl-1 pb-6 max-w-[800px]">
                      {job.bullets.map((b, bi) => (
                        <li key={bi} className="flex gap-2 text-[15px]">
                          <FontAwesomeIcon
                            icon={faCaretRight}
                            aria-hidden="true"
                            className="text-accent mt-0.5 shrink-0"
                          />
                          <span className="text-secondary-text leading-relaxed">
                            {b}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
