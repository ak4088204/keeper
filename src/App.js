
import { useState } from 'react';
import './App.css';

function App() {

  const[data,setdata]=useState({title:"",text:""})
  const[arr,setarr]=useState([])

  function change(e){
    setdata({...data,[e.target.name]:e.target.value});
  }
  
  let {title,text}=data;
  function click(e){
    e.preventDefault();
    setarr([...arr,{title,text}])
    
  }

  function deletes(i){
    arr.splice(i,1);
    setarr([...arr]);
}

  return (
    <div className="App">
      <ul><li><b>Keeper</b></li></ul>
      <form>
        <input type="text" placeholder="Title" name="title" value={data.title} onChange={change}></input><br></br>
        <input type="text" className="area" placeholder="Take a note" name="text" value={data.text} onChange={change}></input><br></br>
      </form>
      <div className="button" onClick={click}><button>Add</button></div>
      <div>
        {
            arr.map((element, key)=>{
              return(
                
                <div id={key} className='card'>
                  <b>{element.title}</b><br></br>
                  {element.text}<br></br>
                  <button id='del' onClick={()=>deletes(key)}><b>DELETE</b></button>
                </div>
              );
            })
        }
      </div>
     
    </div>
  );
}

export default App;
