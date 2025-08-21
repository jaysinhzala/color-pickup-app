import React, { useState, useEffect } from "react";
import MyComponentC from './MyComponentC.jsx';

function MyComponentB() {
    return (
        <div className="box">
            <h1>Component B</h1>
            <MyComponentC/>
        </div>
        );
}

export default MyComponentB;