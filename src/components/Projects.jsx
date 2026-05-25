import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faArrowUpRightFromSquare,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";
import Button from "./common/Button";
import Title from "./common/Title";
import { allProjects } from "../constants/projects";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const INITIAL_VISIBLE = 6;

function useColumnCount(ref) {
  const [cols, setCols] = useState(1);
  useEffect(() => {
    if (!ref.current) return;
    const update = () => {
      const computed = getComputedStyle(ref.current);
      setCols(computed.gridTemplateColumns.split(" ").length);
    };
    update();
    const ro = new ResizeObserver(update);
    ro.observe(ref.current);
    return () => ro.disconnect();
  }, [ref]);
  return cols;
}

const ProjectCard = ({ project, index, columns }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{
      duration: 0.5,
      ease: "easeOut",
      delay: (index % columns) * 0.12,
    }}
    className="flex flex-col group"
  >
    <div className="w-full min-w-full md:min-w-[350px] overflow-hidden bg-[#2a2a2b] rounded-sm">
      <img
        src={"./images/projects/" + project.img}
        alt={project.title}
        className="w-full h-full object-cover"
      />
    </div>
    <div className="flex flex-col flex-1 mt-4">
      <h3 className="text-primary-text text-lg font-medium mb-3">
        {project.title}
      </h3>

      <p className="text-secondary-text text-sm leading-relaxed flex-1 mb-5">
        {project.description}
      </p>
      {project.tools && project.tools.length > 0 && (
        <div className="flex flex-wrap gap-[10px] mb-6">
          {project.tools.map((tool, idx) => (
            <span
              key={idx}
              className="text-xs bg-[rgba(255,255,255,0.16)] text-secondary-text px-2 py-[3px] rounded-sm cursor-default"
            >
              {tool}
            </span>
          ))}
        </div>
      )}

      <Button
        href={project.github}
        target="_blank"
        // variant="link"
        rel="noopener noreferrer"
        size="sm"
        className="font-normal w-max"
        aria-label={`View code for ${project.title} on GitHub`}
      >
        View Code
        <FontAwesomeIcon
          icon={faArrowUpRightFromSquare}
          aria-hidden="true"
          className="text-[14px] ml-1"
        />
      </Button>
    </div>
  </motion.div>
);

const Projects = () => {
  const [showAll, setShowAll] = useState(false);
  const initialProjects = allProjects.slice(0, INITIAL_VISIBLE);
  const extraProjects = allProjects.slice(INITIAL_VISIBLE);
  const gridRef = useRef(null);
  const extraGridRef = useRef(null);
  const cols = useColumnCount(gridRef);
  const extraCols = useColumnCount(extraGridRef);

  return (
    <section id="projects" className="bg-primary-bg py-20 lg:py-28">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12">
        {/* Section heading */}
        <Title>Some Things I've Built</Title>

        {/* Grid */}
        <div
          ref={gridRef}
          className="grid md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-x-12 gap-y-20"
        >
          {initialProjects.map((project, i) => (
            <ProjectCard key={i} project={project} index={i} columns={cols} />
          ))}
        </div>

        {/* Extra projects — animated expand/collapse */}
        <AnimatePresence initial={false}>
          {showAll && (
            <motion.div
              key="extra"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="overflow-hidden"
              id="extra-projects"
            >
              <div
                ref={extraGridRef}
                className="grid md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-12 mt-12"
              >
                {extraProjects.map((project, i) => (
                  <ProjectCard
                    key={i}
                    project={project}
                    index={i}
                    columns={extraCols}
                  />
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Show More / Show Less */}
        {allProjects.length > INITIAL_VISIBLE && (
          <div className="flex justify-end mt-10">
            <Button
              variant="secondary"
              onClick={() => setShowAll((prev) => !prev)}
              className="font-normal !px-0"
              aria-expanded={showAll}
              aria-controls="extra-projects"
            >
              {showAll ? (
                <>
                  Show Less{" "}
                  <FontAwesomeIcon
                    icon={faChevronDown}
                    aria-hidden="true"
                    className="ml-1 rotate-180"
                  />
                </>
              ) : (
                <>
                  Show More{" "}
                  <FontAwesomeIcon
                    icon={faChevronDown}
                    aria-hidden="true"
                    className="ml-1"
                  />
                </>
              )}
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
