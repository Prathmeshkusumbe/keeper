import React, { useState }from 'react';
import './styles.css'
import Header from './components/Header';
import Note from './components/Note';
import Footer from './components/Footer';
import notes from './notes.js'
import CreateArea from './components/CreateArea';
function App() {

  const [notes, setNote] = useState([]);
  function addNote(newnote){
    setNote(prevNote=>{
      return [...prevNote,newnote]
    })
  }

  function deletNote(id){
    setNote(prevNote=>{
      return prevNote.filter((noteitem, index)=>{
        return index !== id;
      })
    })
  }
  return (
    <>
      <Header/>
      <CreateArea addNote={addNote}/>
      <div className='container'>
      {notes.map((item,pos) =>  {
        return (<Note key={pos} id={pos} title={item.title} desc={item.content} onDelet={deletNote}/>)
      })}
      </div>
      <Footer />
    </>
  );
}

export default App;
