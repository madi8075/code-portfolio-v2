import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useState } from 'react';

const Navbar = () => {
    let tabs = [
        { id: "home", label: "Home", path: "/code-portfolio-v2/"},
        { id: "projects", label: "Projects", path: "/code-portfolio-v2/projects" },
        { id: "timeline", label: "Timeline", path: "/code-portfolio-v2/timeline" },
        { id: "contact", label: "Contact", path: "/code-portfolio-v2/contact" },
    ];

    let [activeTab, setActiveTab] = useState(tabs[0].id);
    return (
        <div className='flex justify-center '>
            <nav className="fixed flex space-x-3 rounded-full bg-white-600/40 justify-center mt-6 shadow-black backdrop-blur-[0.5rem] border z-20 p-1">
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
                                className='absolute inset-0 z-0 bg-white mix-blend-difference text-white rounded-full'
                                transition={{ type: "spring", bounce: 0.4, duration: 0.6 }}
                            />
                        )}
                        <span className='z-24'>{tab.label}</span>
                    </NavLink>
                )}
            </nav>
        </div>
    )
}

export default Navbar;