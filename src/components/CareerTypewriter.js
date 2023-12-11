import { type } from "@testing-library/user-event/dist/type";
import React, { useState, useEffect } from "react";
import Typewriter from 'typewriter-effect';

const CareerTypewriter = () => {
    const [typewriterStyle, setTypewriterStyle] = useState({
        fontFamily: 'Arial, sans-serif',
        fontSize: '2em',
        fontWeight: '600',
        zIndex: 2,
        color: 'white',
        whiteSpace: "pre-line",
        letterSpacing: "1.5px",
    });

    const updateFontSize = () => {
        const screenWidth = window.innerWidth;
        let fontSize = '2em';
    
        // Adjust font size based on screen width
        if (screenWidth <= 768) {
          fontSize = '1.35em';
        }

        setTypewriterStyle({
          ...typewriterStyle,
          fontSize,
        });
      };

    useEffect(() => {
        updateFontSize();
        window.addEventListener('resize', updateFontSize);

        return () => {
          window.removeEventListener('resize', updateFontSize);
        };
      }, []);

    let careers =[
        { label: '<span style="color: #AA46D6;">computer science student.</span>' },
        { label: '<span style="color: #AA46D6;">programmer.</span>' },
        { label: '<span style="color: #AA46D6;">full-stack developer.</span>' },
        { label: '<span style="color: #AA46D6;">problem solver.</span>' },
        { label: '<span style="color: #AA46D6;">leader.</span>' },
        { label: '<span style="color: #AA46D6;">hardware expert.</span>' },
        { label: '<span style="color: #AA46D6;">software expert.</span>' },
    ];

    const wrapperStyle = {
        height: '90px',
    }

    return (
        <div style={wrapperStyle}>
        <div style={typewriterStyle}>
            <Typewriter
                options={{
                    delay: 45,
                    autoStart: true,
                    loop: false,
                    deleteSpeed: 20,
                }}
                onInit={(typewriter) =>{
                    typewriter.pauseFor(300)
                    typewriter.typeString('Hi!')
                    .typeString(' My name is <span style="color: greenyellow;">Madison Manuel.</span>\n')
                    .pauseFor(750)
                    .typeString(' I am a ')
                    .start()

                    careers.forEach((tab, index) => {
                        typewriter
                            .typeString(tab.label)
                            .pauseFor(1500)
                            .deleteChars(careers[index].label.length-37)
                            .pauseFor(200)
                    });

                    typewriter.deleteChars(5)
                    .typeString('<span style="color: #AA46D6;">excited to join your team!</span>')
                    .pauseFor(2000)
                    .deleteChars(32)
                    .typeString('<span style="color: #AA46D6;">Let me show you what I can do</span>')
                    .changeDelay(375)
                    .typeString('<span style="color: #AA46D6;">...</span>')
                } }
            />
        </div>
        </div>
    );
};

export default CareerTypewriter;