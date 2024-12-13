import { SectionWrapper } from "../hoc";

import Tilt from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { technologies } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const TechnologyCard = ({ index, title, icon, experience }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full xs:w-[250px] green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
          <p className="text-secondary text-[12px]">{experience} experience</p>
        </div>
      </motion.div>
    </Tilt>
  );
};

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My Skill</p>
        <h2 className={styles.sectionHeadText}>Tech Stack.</h2>
      </motion.div>

      <div className="mt-20 flex flex-wrap justify-center gap-10">
        {technologies.map((technology, index) => (
          <TechnologyCard
            key={technology.title}
            index={index}
            {...technology}
          />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "skill");

