import React, { useState } from "react"

import "bootstrap/dist/css/bootstrap.min.css"

import "./App.css"
import UpdateForm from "./component/UpdateForm"
import AddtaskForm from "./component/AddTaskForm.jsx"
import ToDo from "./component/ToDo.jsx"

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
  const markDone = (id) => {
    // map the tasks
    let newTask = toDo.map((task) => {
      // check if the id is same
      if (task.id === id) {
        // change the status
        return { ...task, status: !task.status }
      }
      // return the task
      return task
    })
    // update the state
    setToDo(newTask)
  }

  // Cancel update
  const cancelUpdate = () => {
    setUpdateData("")
  }

  // Change taks for update
  const changeTask = (e) => {
    let newEntry = {
      id: updateData.id,
      title: e.target.value,
      status: updateData.status ? true : false,
    }
    setUpdateData(newEntry)
  }

  // Update tasks
  const updateTask = () => {
    let filterRecords = [...toDo].filter((task) => task.id !== updateData.id)
    let updateObject = [...filterRecords, updateData]
    setToDo(updateObject)
    setUpdateData("")
  }

  return (
    <div className="container App">
      <br />
      <br />
      <h2>To Do List App ( ReactJS)</h2>
      <br />
      <br />
      {/* kondisi jika tombol update di klik akan menampilkan form update */}
      {updateData && updateData ? (
        <UpdateForm
          updateData={updateData}
          updateTask={updateTask}
          cancelUpdate={cancelUpdate}
          changeTask={changeTask}
        />
      ) : (
        /* panggil component AddtaskForm */
        <AddtaskForm
          newTask={newTask}
          setNewTask={setNewTask}
          addTask={addTask}
        />
      )}
      {/* Display ToDos */}
      {/* logic jika todo tidak ada datanya */}
      {toDo && toDo.length ? "" : "No Tasks..."}
      {/* menampilkan data dari todo dengan map */}

      <ToDo
        toDo={toDo}
        setUpdateData={setUpdateData}
        deleteTask={deleteTask}
        markDone={markDone}
      />
    </div>
  )
}

export default App
