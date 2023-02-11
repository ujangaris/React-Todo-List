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

  const addTask = () => {}

  // Delete tasks
  const deleteTask = (id) => {}

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
              </div>
            </React.Fragment>
          )
        })}
    </div>
  )
}

export default App
