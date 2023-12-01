import { type } from "@testing-library/user-event/dist/type";
import React, { useState, useEffect } from "react";
import Typewriter from 'typewriter-effect';

const MainTypewriter = ( { content }) => {
    const typewriterStyle = {
        fontFamily: 'Arial, sans-serif',
        fontSize: '2em',
        fontWeight: '600',
        zIndex: 2,
        color: 'white',
    };

    return (
        <div style={typewriterStyle}>
            <Typewriter 
                onInit={(typewriter) =>{
                    typewriter.typeString(`${content}`)
                    .start();
                } }
                options={{
                    delay: 25,
                    breakLines: true,
                }}
            />
        </div>
    );
};

export default MainTypewriter;