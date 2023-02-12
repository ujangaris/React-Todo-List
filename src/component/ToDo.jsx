import {
  faCircleCheck,
  faPen,
  faTrash,
} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React from "react"

const ToDo = ({ toDo, setUpdateData, deleteTask, markDone }) => {
  return (
    <>
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
                  {/* pasang fcuntion markDown */}
                  <span
                    title="Completed / Not Completed"
                    onClick={(e) => markDone(task.id)}
                  >
                    <FontAwesomeIcon icon={faCircleCheck} />
                  </span>
                  {/* kodisi jika task sudah di checklis tombol edit ilang */}
                  {task.status ? null : (
                    <span
                      title="Edit"
                      onClick={() =>
                        setUpdateData({
                          id: task.id,
                          title: task.title,
                          status: task.status ? true : false,
                        })
                      }
                    >
                      <FontAwesomeIcon icon={faPen} />
                    </span>
                  )}
                  {/* memasang function delete */}
                  <span title="Delete" onClick={() => deleteTask(task.id)}>
                    <FontAwesomeIcon icon={faTrash} />
                  </span>
                </div>
              </div>
            </React.Fragment>
          )
        })}
    </>
  )
}

export default ToDo
