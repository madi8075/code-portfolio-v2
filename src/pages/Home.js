import MainTypewriter from '../components/MainTypewriter';
import Block from '../components/Block';
import MatrixBackground from '../components/MatrixRain';
import emblem from '../images/emblem.svg';
import photo from '../images/pic-circle.png';

const Home = () => {
    return (
    <>
        <div className='bg-neutral-900 text-white overflow-x-auto h-screen'>
            <img className='m-5 h-12 absolute'src={emblem} alt = 'emblem'/>
                <div className='w-48 h-48 rounded-full overflow-hidden bg-transparent mt-28 mx-auto mb-10 flex justify-center'>
                    <img src={photo} alt = "photo" className=' max-w-full object-cover filter brightness-105 ' />
                </div>
                <div className='text-center'>
                    <MainTypewriter content={'Hi!\n My name is Madison Manuel.'}/>
                    <div className='mt-12 text-xl w-9/12 mx-auto'>
                        In my sophomore year of high school, a friend asked me to take a Java programming course with her. I had no experience nor any plan to major in Computer Science, but after writing my first “hello, world!” program I was hooked. With a newly discovered aptitude for Java, my teacher soon started sending me to help fellow classmates. This semester was the spark of my passion in Computer Science.
                    </div>
                </div>

        </div>
        
        <Block color = 'blue-500'/>
    </>
    );
};

export default Home;