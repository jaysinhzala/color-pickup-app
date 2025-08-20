import React, { useState, useEffect } from "react";

function MyComponent() {
    const [count,setCount] = useState(0);
    const [color, setColor] = useState("green");

    useEffect(
        () => {document.title = `Count: ${count}${color}`;},[count,color]
    );

    function addCount(){
        setCount(()=>count + 1);
    }
    function subtractCount(){
        setCount(()=>count - 1);
    }

    function changeColor(){
        setColor(color => color === "green" ? "red" : "green");
    }

    return (<>
        <h1>Counter</h1>
        <h2 style={{color:color}}>{count}</h2>
        <button onClick={addCount}>Add</button>
        <button onClick={subtractCount}>Subtract</button>
        <button onClick={changeColor}>Change Color</button>
    </>);
}

export default MyComponent;