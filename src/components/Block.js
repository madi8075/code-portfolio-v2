import React, { useState, useEffect } from "react";


const Block = ({ color, content }) => {
    return (
        <div className={`bg-${color} text-white overflow-x-auto h-screen`}>
            { content }
        </div>
    );
};

export default Block;