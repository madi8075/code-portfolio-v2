import MainTypewriter from '../components/MainTypewriter';
import Block from '../components/Block';
import MatrixBackground from '../components/MatrixRain';
import emblem from '../images/emblem.svg';
import SocialButton from '../components/socialButton';


const Contact = () => {
    return (
    <>
        <div className='bg-neutral-900 text-white overflow-x-auto h-screen'>
            <img className='m-5 h-12 absolute'src={emblem} alt = 'emblem'/>
            <div className='text-center mt-60 h-20'>
                    <MainTypewriter content={'You found what you\'ve been looking for.'} flag={true} content1={'\nLet\'s talk.'}/>
            </div>
            <SocialButton />
                

        </div>
    </>
    );
};

export default Contact;