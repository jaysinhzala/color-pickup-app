import { useState } from "react";

function ToDoList() {
    const [tasks, setTasks] = useState(["Walk Dog","Get Grocceries"]);
    const [newTask, setNewTask] = useState("");

    function handleInputChange(event) {
        setNewTask(event.target.value);
    }

    function addTasks() {
        setTasks = newTask;
    }

    function deleteTask(index) {

    }

    function moveTaskUp(index) {

    }

    function moveTaskDown(index) {

    }

    return (<div className="to-do-list">
        <h1>To-Do-List</h1>
        
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

    </div>);
}

export default ToDoList;