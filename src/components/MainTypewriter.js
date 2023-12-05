import { type } from "@testing-library/user-event/dist/type";
import React, { useState, useEffect } from "react";
import Typewriter from 'typewriter-effect';
import CareerTypewriter from "./CareerTypewriter";

const MainTypewriter = ( { content, flag,  content1 }) => {
    const typewriterStyle = {
        fontFamily: 'Arial, sans-serif',
        fontSize: '2em',
        fontWeight: '600',
        zIndex: 2,
        color: 'white',
        whiteSpace: "pre-line",
        cursor: ' '
    };

    return (
        <div style={ typewriterStyle }>
            <Typewriter
                options={{
                    delay: 30,
                    autoStart: true,
                    loop: false,
                    deleteSpeed: 30,
                }}
                onInit={(typewriter) =>{
                    typewriter.start()
                    typewriter.typeString(`${content}`)
                    if(flag) {
                        typewriter.pauseFor(500)
                        .typeString(`${content1}`)
                    }
                } }
            />
        </div>
    );
};

export default MainTypewriter;