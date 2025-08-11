import React, {useState} from "react";
function Counter(){
    const [count,setCount] = useState(0);

    const increment = ()=>{
        setCount(count + 1);
    }

    const decrement = ()=>{
        setCount(count - 1);
    }

    const reset = ()=>{
        setCount(0);
    }
    return(
        <div className='counter-container'>
            <p className='counter-disply'>{count}</p>
            <button className='counterBtn' onClick={increment}>Increment</button>
            <button className='counterBtn'onClick={decrement}>Decrement</button>
            <button className='counterBtn'onClick={reset}>Reset</button>
        </div>
    );
}

export default Counter;