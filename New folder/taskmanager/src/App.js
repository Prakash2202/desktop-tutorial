// import logo from './logo.svg';
import React,{useState} from 'react';
import Header from './components/Header';
import './App.css';

import TaskList from './components/TaskList';
import AddTask from './components/AddTask';
function App(props){
  const[toggle,settoggle]=useState(true);

  const save=(task,assignee)=>{const save=[{task,assignee}]
  localStorage.setItem("Tasks",JSON.stringify(save))
}
  return <div>
    <div className='container'>
    <Header toggleval={toggle} settoggleval={settoggle}/>
     {toggle? <AddTask saveall={save}/>:
    <TaskList/>}

  
  </div>
  </div>
   
  
}

export default App
