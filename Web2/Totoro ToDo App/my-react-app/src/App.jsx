import { useState } from 'react'
import './App.css'

function App() {
  // !!! tasks are objects 
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    setTasks([...tasks, { text: "", checked: false }]);
  };

  // const clearAll = () => {
  //   setTasks([]);
  // };

  const clearAll = () => {
  const confirmed = window.confirm("Are you sure you want to clear all tasks?");
  if (confirmed) {
    setTasks([]);
  }
};


  const updateTask = (index, value) => {
    const newTasks = [...tasks];
    newTasks[index].text = value;
    setTasks(newTasks);
  };

  const removeTask = (indexToRemove) => {
    setTasks(tasks.filter((_, index) => index !== indexToRemove));
  };

  const toggleChecked = (index) => {
    const newTasks = [...tasks];
    newTasks[index].checked = !newTasks[index].checked;
    setTasks(newTasks);
  };

  return (
    <>
 
      <h1>ToDo List</h1>
 
      <div className="optionsBtn" style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
        <button onClick={addTask}>Add Task</button>
        <button onClick={clearAll}>Clear All</button>
      </div>

      <div className="card">
        {tasks.map((task, index) => (
          <div
            key={index}
            className={`task-card ${task.checked ? "checked" : ""}`}
          >
            <input
              type="text"
              value={task.text}
              onChange={(e) => updateTask(index, e.target.value)}
              placeholder={`Task ${index + 1}`}
            />
            <button
              className="check-btn"
              onClick={() => toggleChecked(index)}
              aria-label={`Check/uncheck task ${index + 1}`}
            >
              &#x2714; {/* ✔️ */}
            </button>
            <button
              className="remove-btn"
              onClick={() => removeTask(index)}
              aria-label={`Remove task ${index + 1}`}
            >
              &#x2716; {/* ✖️ */}
            </button>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
