const AddtaskForm = ({ newTask, setNewTask, addTask }) => {
  return (
    <>
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
    </>
  )
}

export default AddtaskForm
