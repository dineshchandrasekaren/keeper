import React,{useState} from 'react';
import Headers from './Header';
import Footer from './Footer';
import Note from './Note';

import CreateArea from './CreateArea';

function App() {

    const [Notes, setNotes] = useState([]);
    const addItem=(getInput,event)=>{
        setNotes(preV=>[...preV,getInput]);
        event.preventDefault();
    }
    const Delete=(id)=>setNotes(Notes.filter((arrItem,ind)=> id !== ind));


    return <div>
        <Headers/>
        <CreateArea addItem={addItem}/>
         {Notes.map(({title,content},i)=> <Note  id={i} title={title} content={content} onDelete={Delete}  />)}
       
        <Footer/>
    </div>      
}
export default App;