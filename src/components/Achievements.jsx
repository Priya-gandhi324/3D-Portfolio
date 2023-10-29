import {motion} from 'framer-motion';

import {styles} from '../styles';
import { SectionWrapper } from '../hoc';
import { fadeIn, textVariant } from '../utils/motion';
import { achievements } from '../constants';

const AchievementCard = ({index, achievement, name, issued_date, company, image}) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className="bg-black-200 p-10 rounded-3xl w-full"
  >

    <div className="xl:flex-row flex-col flex gap-3 overflow-hidden">
      <div className="flex-[0.75] p-4">
        <img src={image} alt={name} className="w-full h-full object-cover rounded-2xl"/>
      </div>

      <div className="xl:flex-1 xl:h-auto p-4">
        <p className='text-white font-black text-[24px]'>{name}</p>
        <div className="mt-3 flex justify-between items-center gap-1">
          <div className="flex-1 flex flex-col">
            <p className="text-white font-medium text-[16px]">{company}</p>
            <p className="mt-1 text-secondary text-[12px]">{issued_date}</p>
          </div>
        </div>
        <p className='mt-3 text-white tracking-wider text-[18px]'>{achievement}</p>
      </div>

    </div>
  </motion.div>
)


const Achievements = () => {
  return (
    <div className='mt-12 bg-black-100 rounded-[20px]'>
      <div className={`${styles.padding} bg-tertiary rounded-2xl min-h-[400px]`}>
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>Known for</p>
          <h2 className={styles.sectionHeadText}>Achievements</h2>
        </motion.div>
      </div>

      <div className={`${styles.paddingX} md:-mt-40 xs:-mt-60 pb-14 flex flex-wrap gap-7`}>
        {achievements.map((achievement, index) => (
          <AchievementCard
            key={achievement.name}
            index={index}
            {...achievement}
          />
        ))}
      </div>
    </div>
  )
}

export default SectionWrapper(Achievements, "achievements");