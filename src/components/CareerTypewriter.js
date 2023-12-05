import { type } from "@testing-library/user-event/dist/type";
import React, { useState, useEffect } from "react";
import Typewriter from 'typewriter-effect';

const CareerTypewriter = ( { content }) => {
    const [typewriterStyle, setTypewriterStyle] = useState({
        fontFamily: 'Arial, sans-serif',
        fontSize: '2em',
        fontWeight: '600',
        zIndex: 2,
        color: 'white',
        whiteSpace: "pre-line",
        letterSpacing: "1.5px",
    });

    let careers =[
        { label: "computer science student." },
        { label: "programmer." },
        { label: "full-stack developer." },
        { label: "leader." },
        { label: "problem solver." },
        { label: "hardware expert." },
        { label: "software expert." },
    ];

    const wrapperStyle = {
        height: '90px',
    }

    return (
        <div style={wrapperStyle}>
        <div className='' style={typewriterStyle}>
            <Typewriter
                options={{
                    delay: 45,
                    autoStart: true,
                    loop: false,
                    deleteSpeed: 20,
                }}
                onInit={(typewriter) =>{
                    typewriter.changeDeleteSpeed(15)
                    .typeString(`${content}\n`)
                    .pauseFor(600)
                    .typeString(' I am a ')
                    .start()

                    careers.forEach((tab, index) => {
                        typewriter
                            .typeString(tab.label)
                            .pauseFor(1500)
                            .deleteChars(careers[index].label.length)
                            .pauseFor(200)
                    });

                    typewriter.deleteChars(2)
                    .typeString('<span style="color: greenyellow;">excited to join your team!</span>')
                    .pauseFor(2000)
                    .deleteChars(32)
                    .typeString('<span style="color: greenyellow;">Let me show you what I can do</span>')
                    .changeDelay(400)
                    .typeString('<span style="color: greenyellow;">...</span>')
                    .pauseFor(1000)
                } }
            />
        </div>
        </div>
    );
};

export default CareerTypewriter;