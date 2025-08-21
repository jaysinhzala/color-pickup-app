import React, { useState, useEffect } from "react";
import MyComponentD from './MyComponentD.jsx';

function MyComponentC() {
    return (
        <div className="box">
            <h1>Component C</h1>
            <MyComponentD />
        </div>
        );
}

export default MyComponentC;