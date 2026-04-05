import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { fadeUp, viewport } from "./common/animations";
import Title from "./common/Title";
import { skills } from "../constants/skills";

const About = () => {
  return (
    <section id="about" className="bg-primary-bg py-20 lg:py-28">
      <div className="max-w-[1100px] mx-auto px-6 md:px-12">
        {/* Section heading */}
        <Title>About Me</Title>

        <motion.div
          className="max-w-[920px] text-[15px] md:text-base"
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={fadeUp}
          custom={0.1}
        >
          <p className="text-secondary-text leading-7 mb-3">
            I thrive at the intersection of technical engineering and high-level
            business analytics. My journey began in Mechanical Engineering,
            which instilled in me a disciplined approach to problem-solving.
            Today, I apply that same rigor to Data Science — using Python, SQL,
            and Power BI to uncover insights that drive operational efficiency.
          </p>
          <p className="text-secondary-text leading-7 mb-10">
            Whether it's architecting automated data scrapers, deploying
            cloud-based applications on AWS/GCP, or fine-tuning Machine Learning
            models, my goal is to build scalable solutions that make data work
            for the user.
          </p>

          <p className="text-secondary-text mb-5">
            Here are a few technologies I've been working with recently:
          </p>

          <ul className="space-y-3">
            {skills.map((skill) => (
              <li key={skill.label} className="flex gap-2">
                <FontAwesomeIcon
                  icon={faCaretRight}
                  className="text-accent mt-0.5 shrink-0"
                />
                <span>
                  <span className="text-primary-text font-medium">
                    {skill.label}:
                  </span>{" "}
                  <span className="text-secondary-text">{skill.value}</span>
                </span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
