import React, { useState } from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faCircleCheck,
  faPen,
  faTrash,
} from "@fortawesome/free-solid-svg-icons"
import "./App.css"

function App() {
  // Tasks (ToDO List) State

  const [toDo, setToDo] = useState([
    { id: 1, title: "Task 1", status: true },
    { id: 2, title: "Task 2", status: false },
  ])

  // Temp state
  const [newTask, setNewTask] = useState("")
  const [updateData, setUpdateData] = useState("")

  // All function in Todo

  // add tasks

  const addTask = () => {
    if (newTask) {
      // get the last id
      let num = toDo.length + 1
      // create new entry
      let newEntry = { id: num, title: newTask, status: false }
      // add new entry to todo
      setToDo([...toDo, newEntry])
      // clear input
      setNewTask("")
    }
  }

  // Delete tasks
  const deleteTask = (id) => {
    // filter the task
    let newTasks = toDo.filter((task) => task.id !== id)
    // update the state
    setToDo(newTasks)
  }

  // Mark tasks as done or completed
  const markDone = (id) => {}

  // Cancel update
  const cancelUpdate = () => {}

  // Change taks for update
  const changeTask = (e) => {}

  // Update tasks
  const updateTask = () => {}

  return (
    <div className="container App">
      <br />
      <br />
      <h2>To Do List App ( ReactJS)</h2>
      <br />
      <br />

      {/* Add Task */}
      <div className="row">
        <div className="col">
          <input
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            className="form-control form-control-lg"
          />
        </div>
        <div className="col-auto">
          <button onClick={addTask} className="btn btn-success btn-lg">
            Add Task
          </button>
        </div>
      </div>
      <br />
      {/* Display ToDos */}
      {/* logic jika todo tidak ada datanya */}
      {toDo && toDo.length ? "" : "No Tasks..."}
      {/* menampilkan data dari todo dengan map */}
      {toDo &&
        toDo.map((task, index) => {
          return (
            <React.Fragment key={task.id}>
              <div className="col taskBg">
                {/* kondisi jika status bernilai done , maka tulisan todo akan dicoret */}
                <div className={task.status ? "done" : ""}>
                  {/* nomro urut todo */}
                  <span className="taskNumber">{index + 1}</span>
                  {/* data todo */}
                  <span className="taskText">{task.title}</span>
                </div>
                {/* pasang icon fontawesome */}
                {/* pasang keterangan setiap icon */}
                <div className="iconsWrap">
                  <span title="Completed / Not Completed">
                    <FontAwesomeIcon icon={faCircleCheck} />
                  </span>
                  <span title="Edit">
                    <FontAwesomeIcon icon={faPen} />
                  </span>
                  {/* memasang function delete */}
                  <span title="Delete" onClick={() => deleteTask(task.id)}>
                    <FontAwesomeIcon icon={faTrash} />
                  </span>
                </div>
              </div>
            </React.Fragment>
          )
        })}
    </div>
  )
}

export default App
