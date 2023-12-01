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
    const typewriterStyle2 = {
        fontFamily: 'Arial, sans-serif',
        fontSize: '2em',
        fontWeight: '800',
        zIndex: 2,
        color: 'white',
        whiteSpace: "pre-line",
        letterSpacing: "2px",
    };

    let careers =[
        { id: 1, label: "Computer Science student." },
        { id: 2, label: "programmer." },
        { id: 3, label: "full-stack developer." },
        { id: 4, label: "leader." },
        { id: 5, label: "problem solver." },
        { id: 6, label: "hardware expert." },
        { id: 7, label: "software expert." },
    ];

    return (
        <div style={typewriterStyle}>
            <Typewriter
                onInit={(typewriter) =>{
                    typewriter.changeDeleteSpeed(15)
                    .typeString(`${content}\n`)
                    .pauseFor(600)
                    .typeString('I am a ')
                    .start()
                    .changeDelay(50)

                    careers.forEach((tab, index) => {
                        typewriter
                            .typeString(tab.label)
                            .pauseFor(1500)
                            .deleteChars(careers[index].label.length)
                            .pauseFor(250)
                    });

                    typewriter.deleteChars(2)
                    .changeDelay(100)
                    typewriter.typeString(' ready to join your team.')
                    .pauseFor(2000)
                } }
                options={{
                    delay: 50,
                    autoStart: true,
                    loop: true,
                    deleteSpeed: 15,
                }}
            />
        </div>
    );
};

export default CareerTypewriter;