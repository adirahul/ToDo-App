import { useEffect, useState } from 'react';
import './App.css';
import Draggable from 'react-draggable';
import Comp from './components/Comp';
import UnComp from './components/UnComp';

function App() {
  const [task, setTask] = useState({});
  const [tasks, setTasks] = useState([
    { id: 1,
      Title: "Learn DSA", 
      done: false,
      editMode: false,
    },
    { id: 2,
      Title: "Practise full stack code", 
      done: false,
      editMode: false,
    },
    { id: 3,
      Title: "Improve communication skills", 
      done: true,
      editMode: false,
    }, ]);

    
  const handleForm = (e) => {
    e.preventDefault();
    setTasks([...tasks, task]);
    setTask({});
  }
  const handleAdd = (e) => {
    const obj = {
      ...task,
      id: tasks.length + 1,
      Title: e.target.value,
    }
    setTask(obj);

  }
  const handleDelete = (id) => {
    setTasks(tasks.filter((item) => item.id !== id));
  }
  const handleEdit = (id) => {
    const tempTasks = tasks.map((item) => {
      if(item.id === id){
        item.editMode = !item.editMode;
        return item;
      }
      else return item;
    });
    setTasks(tempTasks);
  }
  // useEffect(() => {console.log(tasks)}, []);
  return (
    <>
      <div className="App">
        <h2>To Do List</h2>
        <form onSubmit={(e) => handleForm(e)} className="check1 c1">
          <input type='text' value={task.Title} onChange={(e) => handleAdd(e)} placeholder='Add task' width={100}/>
          <button type='submit' className='btn-success'>Add item</button>
        </form>
        
      <Draggable>
        <div >
          {
            tasks.map((item) => (
              <div key={item.id} className="check1">
                <input type='checkbox' checked={item.done} onChange={(e) => {
                  const tempTasks = tasks.map((it) => {
                    if(it.id === item.id){
                      it.done = e.target.checked;
                      return it;
                    }
                    else return it;
                  })
                  setTasks(tempTasks);
                  
                }}/>
                {
                  item.editMode ?
                  <input type='text' value={item.Title} onChange={(e) => {
                    const tempTasks = tasks.map((t) => {
                      if(t.id === item.id){
                        t.Title = e.target.value;
                        return t;
                      }
                      else return t;
                    })
                    setTasks(tempTasks);
                  }} /> :
                  item.done ?
                  <s><p>{item.Title}</p></s>:
                  <p>{item.Title}</p>
                }
                
                <button className='btn-grey' onClick={() => handleEdit(item.id)} >{item.editMode ? 'Save' : 'Edit'} </button>
                <button className='btn-danger' onClick={() => handleDelete(item.id)}>Delete</button>
              </div>
            ))
          }
        </div>
        </Draggable>  

      </div>
      
    <Comp tasks={tasks}/>
    <UnComp tasks={tasks}/>
    </>
  );
}

export default App;
