import MainTypewriter from '../components/MainTypewriter';
import { motion } from 'framer-motion';
import emblem from '../images/emblem.svg';
import SocialButton from '../components/socialButton';


const Contact = () => {
    return (
    <>
        <div className='bg-neutral-900 text-white overflow-x-auto h-screen'>
            <motion.div
            initial={{ opacity: 0}}
            whileInView={{ opacity: 1}}
            viewport={{once: true}}
            exit={{opacity: 0}}
            transition={{ duration: 2}}
            >
                <motion.header
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{once: true}}
                    exit={{opacity: 0}}
                    transition={{ duration: .7}}
                    className='text-center text-7xl lg:text-9xl lg:pt-36 neon'
                >
                    Contact
                </motion.header>
                <div className='text-center mt-40 h-20'>
                        <MainTypewriter content={'You just found what you\'ve been looking for.'} flag={true} content1={'<span style="color: greenyellow;">\nLet\'s talk.</span>'}/>
                </div>
                <SocialButton />
                
            </motion.div>
        </div>
    </>
    );
};

export default Contact;