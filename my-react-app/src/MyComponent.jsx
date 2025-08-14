import React, { useState } from "react";

function MyComponent() {
    const [foods, setFoods] = useState(["Orange", "Apple", "Banana"]);

    function handleAddFood(){
        const newFood = document.getElementById('newFood').value;
        document.getElementById('newFood').value = "";
        setFoods(f => [...f,newFood]);
    }
    
    function handleRemoveFood(index){
        setFoods(f => f.filter((_,i) => i !== index));
    }

    return (<div>
        <h1>List of Food</h1>
        <ul>
            {foods.map((food, index) => <li key={index} onClick= {() =>{handleRemoveFood(index)}} >{food}</li>)}
        </ul>
        <input type='text' id='newFood' placeholder="Enter your food"/>
        <button onClick={handleAddFood}>Add</button>
    </div>);
}

export default MyComponent;