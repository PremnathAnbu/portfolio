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
            I build intelligent systems end-to-end — from raw data to deployed, production-ready solutions. 
            My core is machine learning and generative AI, backed by solid software engineering to make sure what I build actually ships and scales.
          </p>
          <p className="text-secondary-text leading-7 mb-10">
            On the ML and data side, I design and deploy full pipelines — experiment tracking with MLflow, model versioning, and cloud deployments on AWS EC2 with CI/CD via GitHub Actions and Jenkins. 
            I've built NLP systems for intelligent job-matching with an integrated AI agent layer, and I turn complex, messy datasets into clear business signals — using Python, SQL, and Power BI to build dashboards and analytics that drive real decisions. 
            I've delivered global manufacturing dashboards tracking sales, revenue, and product performance across markets.
          </p>
            <p className="text-secondary-text leading-7 mb-10">
            Right now I'm going deep on LLM workflows, AI agents, and n8n automation — building systems where data doesn't just get analyzed, it gets acted on. Explore my work on GitHub ↗
            </p>
            

          <p className="text-secondary-text mb-5">
            Here are a few technologies I've been working with recently:
          </p>

          <ul className="space-y-3">
            {skills.map((skill) => (
              <li key={skill.label} className="flex gap-2">
                <FontAwesomeIcon
                  icon={faCaretRight}
                  aria-hidden="true"
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
