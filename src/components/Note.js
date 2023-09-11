import React from 'react'

function Note(props) {
  const {title, desc} = props;

  function handleclick(){
    props.onDelet(props.id);
  }
  return (
    <div className='note-box'>
      <h3>{title}</h3>
      <p>{desc}</p>
      <button onClick={handleclick} >Delete</button>
    </div>
  )
}

export default Note