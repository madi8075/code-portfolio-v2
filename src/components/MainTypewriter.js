import { type } from "@testing-library/user-event/dist/type";
import React, { useState, useEffect } from "react";
import Typewriter from 'typewriter-effect';
import CareerTypewriter from "./CareerTypewriter";

const MainTypewriter = ( { content}) => {
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
                    delay: 20,
                    autoStart: true,
                    loop: false,
                    deleteSpeed: 30,

                }}
                onInit={(typewriter) =>{
                    typewriter.start()
                    typewriter.typeString(`${content}`)
                } }
            />
        </div>
    );
};

export default MainTypewriter;