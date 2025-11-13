import React from "react";
import { motion } from "framer-motion";
import { styles } from "../../styles";
import { navLinks, technologies, RESUME_LINK } from "../../constants";
import { fadeIn, textVariant } from "./../../utils/motion";
import { SectionWrapper } from "../../hoc";
import { download } from "../../assets";
import profile from "../../assets/profile.jpeg";

const ServiceCard = ({ index, name, icon }) => {
  return (
    <div className="w-auto">
      <motion.div
        variants={fadeIn("right", "spring", 0.2 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[10px] shadow-card"
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-tertiary rounded-[10px] xs:py-5 xs:px-6 py-2 px-4 min-h-[80px] flex justify-evenly items-center flex-col"
        >
          <img
            src={icon}
            alt={name}
            className="xs:w-16 xs:h-16 w-10 h-10 object-contain"
          />
          <h3 className="text-white xs:text-[20px] text-[12px] mt-1 font-bold text-center">
            {name}
          </h3>
        </div>
      </motion.div>
    </div>
  );
};

const About = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row items-start gap-6">
        <div className="flex-1">
          <motion.div variants={textVariant()}>
            <p className={styles.sectionSubText}>About me</p>
            <h2
              className={`${styles.sectionHeadText} flex items-center justify-between`}
            >
              Overview
              <button
                onClick={() => {
                  // dynamically load analytics (if installed) to avoid import errors during dev
                  import("react-ga4")
                    .then((mod) => {
                      const ga = mod.default ?? mod;
                      if (ga?.event) {
                        try {
                          ga.event({
                            category: "Resume",
                            action: "click",
                            label: "About Resume Download",
                          });
                        } catch {}
                      }
                    })
                    .catch(() => {});
                  // always navigate to resume
                  window.location.href = RESUME_LINK;
                }}
                className={`cursor-pointer xs:py-3 xs:px-4 py-2 px-2 xs:text-[12px] text-[10px] outline-none w-fit text-white rounded-xl font-bold send-btn bg-[#4215C5] d-flex justify-between items-center whitespace-nowrap`}
              >
                <img
                  src={download}
                  alt="Resume"
                  className="cursor-pointer inline xs:w-5 xs:h-5 h-4 w-4 object-contain  mr-2"
                />
                Download CV
              </button>
            </h2>
          </motion.div>

          <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
          >
            I am Pidugu Vivek, currently pursuing a B.Tech in Computer Science and Engineering at IIIT Sri City. I have hands-on experience with Java, Python, C, HTML, CSS, JavaScript, and databases such as SQL, MongoDB, and Redis. I’m proficient in tools and frameworks like Git, GitHub, Node.js, React.js, and Express.js, supported by a strong academic foundation in operating systems, database management, computer architecture, and data structures.
          </motion.p>

          <motion.p
            variants={fadeIn("", "", 0.15, 1)}
            className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
          >
            I have built a range of projects across full-stack development, machine learning, and AI, applying my skills to create efficient and scalable systems. I enjoy solving complex problems, exploring new technologies, and sharing my insights through my work and discussions.
          </motion.p>
        </div>

        <motion.div
          variants={fadeIn("right", "spring", 0.2, 0.75)}
          className="flex-shrink-0"
        >
          <img
            src={profile}
            alt="Vivek Pidugu"
            className="rounded-xl w-48 h-48 md:w-64 md:h-64 lg:w-72 lg:h-72 object-cover shadow-lg mt-28 md:mt-20 lg:mt-32"
          />
        </motion.div>
      </div>

      <motion.div variants={textVariant()}>
        <p className="sm:text-[18px] text-[14px] text-white uppercase tracking-wider mt-8 font-semibold">
          Tech Stack 💻
        </p>
        <div className="xs:mt-10 mt-6 flex flex-wrap justify-center align-center xs:gap-10 gap-4">
          {technologies.map((service, index) => (
            <ServiceCard key={service.name} index={index} {...service} />
          ))}
        </div>
      </motion.div>
    </>
  );
};

export default SectionWrapper(About, navLinks[0].id);
