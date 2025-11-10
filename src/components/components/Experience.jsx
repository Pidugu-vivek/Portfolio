import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";

import { styles } from "../../styles";
import { experiences } from "../../constants";
import { SectionWrapper } from "../../hoc";
import { textVariant } from "../../utils/motion";
import { navLinks } from "../../constants";

/* 
ExperienceCard commented out per request (no experience to show)
const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
        boxShadow: "0px 0px 15px 0px rgba(186, 122, 255, 0.929)",
        borderRadius: "15px",
      }}
      contentArrowStyle={{ display: "none" }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg, overflow: "hidden" }}
      icon={
        <div className="flex justify-center w-full h-full items-center overflow-hidden">
          <img
            src={experience.icon}
            alt={experience.company_name}
            className="w-[90%] h-[90%] object-contain "
          />
        </div>
      }
    >
      <div>
        <h3 className="text-white text-[24px] font-bold">{experience.title}</h3>
        <p
          className="text-secondary text-[16px] font-semibold"
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>
      </div>

      {experience.points.map((point, index) => (
        <p
          key={`experience-point-${index}`}
          className="text-white-100 text-[10px] pl-1 tracking-wider"
        >
          {point}
        </p>
      ))}
    </VerticalTimelineElement>
  );
};
*/

const Experience = () => {
  return (
    <>
      {/* <motion.div className="xs:ml-0 ml-5" variants={textVariant()}>
        <p className={styles.sectionSubText}>What I have done so far</p>
        <h2 className={styles.sectionHeadText}>Work Experience</h2>
      </motion.div> */}

      <div className="mt-5 flex flex-col">
        {/* Experience timeline commented out - no experience to display */}
        {/* 
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} />
          ))}
        </VerticalTimeline>
        */}
      </div>
    </>
  );
};

export default SectionWrapper(Experience, navLinks[1].id);
