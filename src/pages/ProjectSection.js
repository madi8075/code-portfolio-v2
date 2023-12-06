import { motion } from "framer-motion";
import CodeBlock from "../components/CodeBlock";

const ProjectSection = () => {

    return (
        <div className='bg-neutral-900 text-white'>
            <motion.div
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                exit={{opacity: 0}}
                transition={{ duration: 1}}
            >
                <h className="flex justify-center text-5xl pt-64 pb-32">Projects</h>
                <CodeBlock />
            </motion.div>
        </div>
    );
};

export default ProjectSection;