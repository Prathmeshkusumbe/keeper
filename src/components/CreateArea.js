import React, { useState } from 'react'

function CreateArea(props) {
  const [note, setNote] = useState({
    title:'',
    content:''
  });

function handleChange(e) {
  const {name, value}  = e.target;
  setNote(prevNote=>{
    return{
      ...prevNote,
      [name]:value
    }
  })
}

function submitNote(e){
  props.addNote(note);
  e.preventDefault();
  setNote({title:'',
  content:''})
}
  return (
    <div className='create-area'>
      <form>
        <input name='title' value={note.title} placeholder='title' onChange={handleChange}></input>
        <textarea name='content' value={note.content} placeholder='start' row='3' onChange={handleChange}></textarea>
        <button onClick={submitNote} >Add </button>
      </form>
    </div>
  )

}

export default CreateArea