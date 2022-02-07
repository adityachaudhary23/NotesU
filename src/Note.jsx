import React from "react";
import DeleteIcon from '@mui/icons-material/Delete';

function Note(props) {

    function handleClick() {
        props.onDelete(props.id);
    }

    // var date=new Date();

    return (<div className="note">
        <div className="note-content">
            <p><b>{props.title}</b></p>
            <p>{props.content}</p>
        </div>
        <div>
           <button className='delete-button' onClick={handleClick}><DeleteIcon /></button>
        </div>
    </div>);

}

export default Note;