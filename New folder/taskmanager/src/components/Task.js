import React from "react";
import { FaPencilAlt, FaTimes } from 'react-icons/fa';
const Task =() =>{
    return <div>
    <div className="task">
        <div>
            <p className="taskName">
                <span className="textBold">Task Name:</span> Task 1
            </p>
            <p className="taskDate"><span className="textBold">Assignee</span> Prakash </p>
        </div>
        <div>
            <p><FaTimes className="delIcon" /></p>
            <p><FaPencilAlt className="editIcon" /></p>
        </div>
    </div>
</div>



}
export default Task