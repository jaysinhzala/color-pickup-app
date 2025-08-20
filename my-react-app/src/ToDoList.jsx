import { useState } from "react";

function ToDoList() {
    const [tasks, setTasks] = useState(["Walk Dog", "Get Grocceries"]);
    const [newTask, setNewTask] = useState("");

    function handleInputChange(event) {
        setNewTask(event.target.value);
    }

    function addTasks() {
        if(newTask.trim() !== ""){  
            setTasks(t => [...t,newTask]);
            setNewTask("");
        }
    }

    function deleteTask(index) {
        const updatedTasks = tasks.filter((_, i) => i != index);
        setTasks(updatedTasks);
    }

    function moveTaskUp(index) {
        if(index > 0){
            const updatedTasks = [...tasks];
            [updatedTasks[index],updatedTasks[index - 1]] = [updatedTasks[index - 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }

    function moveTaskDown(index) {
        if(index < tasks.length - 1){
            const updatedTasks = [...tasks];
            [updatedTasks[index],updatedTasks[index + 1]] = [updatedTasks[index + 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }

    return (<div className="to-do-list">
        <div className="to-do-list-inner">
            <h1>To-Do-List</h1>
            <div className="to-do-list-back">
                <input type="text"
                    placeholder="Enter text here"
                    value={newTask}
                    onChange={handleInputChange}>
                </input>

                <button onClick={addTasks}>Add</button>

                <ol>
                    {tasks.map((task, index) =>
                        <li key={index}>
                            <span className="text">{task}</span>
                            <button className="delte-btn" onClick={() => deleteTask(index)}>Delete</button>

                            <button className="move-up-btn" onClick={() => moveTaskUp(index)}>👆</button>

                            <button className="move-down-btn" onClick={() => moveTaskDown(index)}>👇</button>
                        </li>)}
                </ol>
            </div>
        </div>

    </div>)
}

export default ToDoList;