import React, { useState, useEffect } from "react";



function MyComponent() {

    const [width, setWidth] = useState(window.innerWidth);
    const [hight, setHight] = useState(window.innerHeight);

    useEffect(()=> {
        window.addEventListener("resize",resizeWindow);
        console.log('Event listener Added');
    },[]);

    function resizeWindow(){
        setWidth(window.innerWidth);
        setHight(window.innerHeight);
    }
    
    return (<>
        <h1>Measure Window Hight and Width</h1>
        <p>Window Height: {hight}px</p>
        <p>Window Width: {width}px</p>
    </>);
}

export default MyComponent;