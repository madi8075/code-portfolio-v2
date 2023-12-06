import { animate, motion, useMotionValue } from 'framer-motion';
import { useEffect, useState } from 'react';
import  ReactSVG  from '../SVG/react.svg';

const SkillSection = () => {

    const [showBubble, setShow] = useState(false);
    const skills =[
        { label: "Java", icon: ReactSVG },
        { label: "JS", icon: ReactSVG },
        { label: "HTML", icon: ReactSVG },
        { label: "CSS", icon: ReactSVG },
        { label: "C", icon: ReactSVG },
        { label: "Linux", icon: ReactSVG },
        { label: "Bash", icon: ReactSVG },
    ];

    // tiltable card logic
    const cardVariants = {
        initial: { transform: 'translateZ(0)' },
        hover: { transform: 'translateZ(100px)' }
    };


    return (
        <div className='bg-neutral-900 text-white pb-12'>
        <motion.section
            initial ={{opacity: 0}}
            animate = {{opacity: 1}}
            exit={{opacity: 0}}
            transition={{ duration: 2 }}
        >
            <header className='text-center text-5xl p-20'>Skills</header>
            <ul style={{perspective: '1000px', transformStyle: 'preserve-3d'}} className='flex space-x-5 justify-center pt-12 overflow-x-hidden pb-12'>
                {skills.map((skill, index) => (
                    <motion.li
                        whileHover={{
                            scale: 1.2,
                            '#bubble': {opacity: 0},
                        }}
                        key= { index }
                    >
                        <div className='bg-gray-600 rounded-2xl w-32 h-32'>
                            <div className='justify-center flex'>
                                <img src={skill.icon} style={{ height: '120px'}}/>
                            </div>
                        </div>
                        <motion.div id='bubble' className='text-center mt-2 bg-slate-800 rounded-full justify-center w-fit px-4 mx-auto'>
                            {!showBubble && skill.label}
                        </motion.div>
                    </motion.li>
                ))}
            </ul>

        </motion.section>
        </div>
    );
};

export default SkillSection;