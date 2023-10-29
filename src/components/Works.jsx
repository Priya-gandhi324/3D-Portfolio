import { Tilt } from "react-tilt";
import {motion} from 'framer-motion';

import {styles} from '../styles';
import {github} from '../assets';
import {SectionWrapper} from '../hoc';
import {projects} from '../constants';
import { fadeIn, textVariant } from "../utils/motion";


const ProjectCard = ({index, name, description, tags, image, source_code_link}) => {
  return(
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450
        }}

        className="bg-tertiary p-5 rounded-2xl sm:w-[500px] w-full"
      >
        
        <div className="relative w-full h-[230px]">
          <img 
            src={image}
            alt={name}
            className="w-full h-full object-cover rounded-2xl"
          />
            <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
              {/* duplicate it for live demo */}
              <div
                onClick={() => window.open(source_code_link, "_blank")}
                className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
              >
                <img src={github} alt="github" className="w-3/4 h-3/4 object-contain"/>

              </div>
            </div>

        </div>

        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p key={tag.name} className={`text-[14px]`}>{tag.name}</p>
          ))}
        </div>

      </Tilt>
    </motion.div>
  )
}

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My work</p>
        <h2 className={styles.sectionHeadText}>Projects</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("","", 0.1, 1)}
          className="mt-3 text-secondary text-[20px] max-w-4xl leading-[30px]"
        >
          Highlighting my skills and expertise with real-world examples. Each project demonstrates my problem-solving abilities, technology proficiency, and project management skills. It includes brief descriptions and code repositories.
        </motion.p>
      </div>

      <div className="mt-14 flex flex-wrap gap-10">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project}/>
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(Works, "");