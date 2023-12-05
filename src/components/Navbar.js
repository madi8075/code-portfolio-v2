import { NavLink, useLocation } from 'react-router-dom';
import { motion, useScroll, useMotionValueEvent, useAnimation } from 'framer-motion';
import { useEffect, useState } from 'react';

const Navbar = () => {
    const { scrollY } = useScroll();
    const [navHide, setNavHidden] = useState(false);


    useMotionValueEvent(scrollY, "change", (latest) => {
        const prevScroll = scrollY.getPrevious();
        console.log(latest);
        if (latest > prevScroll) {
            setNavHidden(true);
        }
        else {
            setNavHidden(false);
        }
    });
    
    // Button location assigning
    let tabs = [
        { id: "home", label: "Home", path: "/code-portfolio-v2/"},
        { id: "projects", label: "Projects", path: "/code-portfolio-v2/projects" },
        { id: "timeline", label: "Timeline", path: "/code-portfolio-v2/timeline" },
        { id: "contact", label: "Contact", path: "/code-portfolio-v2/contact" },
    ];
    
    // Keep active page on refresh
    const location = useLocation();
    const [activeTab, setActiveTab] = useState(() =>  {
        const currentTab = tabs.find((tab) => tab.path === location.pathname);
        return currentTab ? currentTab.id : tabs[0].id;
    });


    
    return (
        <motion.div
            variants={{
                visible: { y: 0, opacity: 1 },
                hidden: { y: -25, opacity: 0 },
            }}
            animate= { navHide ? "hidden" : "visible" }
            transition={{ duration: 0.6, ease: "easeInOut" }}
        >
        <div className='flex justify-center'>
            <nav className="fixed flex space-x-3 rounded-full bg-white-600/40 justify-center mt-7 shadow-black backdrop-blur-[0.5rem] border z-20 p-1">
                {tabs.map((tab) =>
                    <NavLink
                        key = {tab.id}
                        to = {tab.path}
                        onClick= {() => setActiveTab(tab.id)}
                        className={`${
                            activeTab === tab.id ? "" : "hover:text-white/60"
                        } relative rounded-full px-2 py-0.5 text-lg font-medium text-white transition focus-visible:outline-2`}
                        style = {{
                            WebkitTapHighlightColor: "transparent", 
                        }}
                    >

                        { activeTab === tab.id && (
                            <motion.span 
                                layoutId='bubble'
                                className='absolute -inset-1 -z-10 bg-lime-600 mix-blend-normal rounded-full'
                                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                            />
                        )}
                        <span className='z-24'>{tab.label}</span>
                    </NavLink>
                )}
            </nav>
            </div>
        </motion.div>
    )
}

export default Navbar;