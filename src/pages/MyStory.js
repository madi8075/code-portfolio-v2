import { AnimatePresence, motion } from 'framer-motion';

const MyStory = () => {
    return (
        <div className='bg-neutral-900 text-white pb-12'>
            <motion.section>
                <motion.header
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{once: true}}
                    exit={{opacity: 0}}
                    transition={{ duration: .7}}
                    className='text-center text-7xl lg:text-9xl lg:p-20 neon'
                >
                    My Story
                </motion.header>
                <div className='mt-6 text-md lg:text-xl w-9/12 mx-auto pb-8 text-center'>
                In my sophomore year of high school, a friend asked me to take a Java programming course with her. I had no experience nor any plan to major in Computer Science, but after writing my first “hello, world!” program I was hooked. With a newly discovered aptitude for Java, my teacher soon started sending me to help fellow classmates. This semester was the spark of my passion in Computer Science.
                    </div>
            </motion.section>
        </div>
    );
};

export default MyStory;