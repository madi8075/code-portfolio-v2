import emblem from '../images/emblem.svg';
import photo from '../images/green-hs-center.jpg';
import CareerTypewriter from '../components/CareerTypewriter';
import SkillSection from './Skills';
import { AnimatePresence, motion } from 'framer-motion';
import Projects from './Projects';
import ProjectSection from './ProjectSection';


const Home = () => {
    return (
    <>
        <AnimatePresence>
        <div className='bg-neutral-900 text-white overflow-x-auto h-screen'>
            <motion.span
                initial ={{opacity: 0}}
                animate = {{opacity: 1}}
                exit={{opacity: 0}}
                transition={{ duration: .7 }}
            >
                <img className='m-5 h-12 absolute'src={emblem} alt = 'emblem'/>
                <div className='w-52 h-52 rounded-full overflow-hidden bg-transparent mt-32 mx-auto mb-10 flex justify-center z-20'>
                    <img src={photo} alt = "photo" className=' max-w-full object-cover filter' />
                </div>
                <div style={{boxShadow:'0 0 80px greenyellow'}} className='z-20 text-center pt-6 mt-24 h-76 justify-center bg-gradient-to-r from-stone-950 via-zinc-900 to-stone-950'>
                    <div>
                        <CareerTypewriter />
                    </div>
                    <div className='mt-6 text-xl w-9/12 mx-auto pb-8'>
                        In my sophomore year of high school, a friend asked me to take a Java programming course with her. I had no experience nor any plan to major in Computer Science, but after writing my first “hello, world!” program I was hooked. With a newly discovered aptitude for Java, my teacher soon started sending me to help fellow classmates. This semester was the spark of my passion in Computer Science.
                    </div>
                </div>
            </motion.span>
        </div>
        </AnimatePresence>

        <AnimatePresence>
            <SkillSection />
        </AnimatePresence>

        <AnimatePresence>
            <ProjectSection />
        </AnimatePresence>

        
    </>
    );
};

export default Home;