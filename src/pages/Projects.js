import MainTypewriter from '../components/MainTypewriter';
import Block from '../components/Block';
import MatrixRain from '../components/MatrixRain';
import emblem from '../images/emblem.svg';
import './icons.svg'

const Projects = () => {
    return (
    <>
        <div className='bg-neutral-900 text-white overflow-x-auto h-screen'>
            <img className='m-5 h-12 absolute'src={emblem} alt = 'emblem'/>
                <div className='w-48 h-48 rounded-full overflow-hidden bg-transparent mt-28 mx-auto mb-10 flex justify-center'>
                </div>
                <div className='text-center'>
                    <MainTypewriter content={'Projects coming soon.'}/>
                    <use href='./icons.svg#react'/>
                </div>
        </div>

    </>
    );
};

export default Projects;