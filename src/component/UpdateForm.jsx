const UpdateForm = ({ updateData, updateTask, cancelUpdate, changeTask }) => {
  return (
    <>
      {/* Update Task */}
      <div className="row">
        <div className="col">
          {/* memasang function changeTask */}
          <input
            value={updateData && updateData.title}
            onChange={(e) => changeTask(e)}
            className="form-control form-control-lg "
          />
        </div>
        <div className="col-auto">
          {/* memasang function updateTask */}
          <button onClick={updateTask} className="btn btn-success btn-lg mr-20">
            Update
          </button>
          {/* pasang function cancel update */}
          <button onClick={cancelUpdate} className="btn btn-warning btn-lg">
            {" "}
            Cancel
          </button>
        </div>
      </div>
      <br />
    </>
  )
}

export default UpdateForm
