import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';

function CreateArea(props) {
    const [note, setNote] = useState({
        title: "",
        content: ""
    });

    function handleChange(e) {
        const { name, value } = e.target;

        setNote(prevNote => {
            return {
                ...prevNote,
                [name]: value
            }
        });
    }

    function submitNote(e) {
        props.onAdd(note);
        setNote({
            title: "",
            content: ""
        })
        e.preventDefault();
    }


    return <div className='create-note-area'>
        <form className="create-note">
            <input className='input' onChange={handleChange} placeholder="Title" name="title" value={note.title} />
            <textarea className='input' onChange={handleChange} placeholder="Take a note..." name="content" value={note.content} />
            <button className="add-button" onClick={submitNote} ><AddIcon /></button>
        </form>
    </div>
}

export default CreateArea;