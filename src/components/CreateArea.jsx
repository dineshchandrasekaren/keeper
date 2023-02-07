import React, { useState } from "react";
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';
import CloseIcon from '@material-ui/icons/Close';
function CreateArea(props) {
const [View,setView]=useState(false)
  const [getInput,setInput]=useState({
    title:'',
    content:''
  });
const getItem=(e)=>{
  const {value,name}=e.target;
  setInput(preV=> ({...preV,[name]:value}));
  
}
const handleClick=(e)=>{
  const {name}=e.target;
  name==='content' || name==='title'? setView(true):setView(false);
};


  return (
    <div>
       
      <form className="create-note" name="createnote" onClick={handleClick} onSubmit={(e)=>{props.addItem(getInput,e); setInput({title:'',content:''}); }}>
  <Zoom in={View}><span onClick={handleClick}><CloseIcon/></span></Zoom>
      <Zoom in={View}><input style={{display:View?'block':'none'}} name="title" placeholder="Title" onClick={handleClick}  value={getInput.title} onChange={getItem} /></Zoom>
        <textarea name="content" placeholder="Take a note..." value={getInput.content} onClick={handleClick} rows={View?"3":"1"} onChange={getItem}/>
  
          <Zoom in={View}>
            <Fab type="submit" >
              <AddIcon/>
            </Fab>
          </Zoom>
      
      </form>
    </div>
  );
}             

export default CreateArea;
