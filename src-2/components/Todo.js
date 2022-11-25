import React from 'react'
import { useState } from 'react'

const Todo = ({item, onUpdate, onDelete}) => {
    const [isEdit, setIsEdit] = useState(false);

    function FormEdit(){

      const [newValue, setValue] = useState(item.title);
      
      function handleSubmit(e){
        e.preventDefault();
      }

      function handleChange(e){
        const value = e.target.value;
        console.log(value);
        setValue(value);
      }

      function handleClickUpdateTodo(){
        onUpdate(item.id, newValue);
        setIsEdit(false);
      }

      return (
        <form className='todoUpdateForm' onSubmit={handleSubmit}>
          <input type="text"
            className='todoInput'
            onChange={handleChange}
            value={newValue}
          />
          <button className='button' onClick={handleClickUpdateTodo}>Update</button>
      </form>
      ) 
    }

    function TodoElement(){
      return (
        <div className='todoInfo'>
          {item.title}
          <button onClick={()=>setIsEdit(true)}>Editar</button>
          <button onClick={(e => onDelete(item.id))}>Eliminar</button>
        </div>
      )
      
    }


  return (
    <div className='todo'>
        {isEdit ? <FormEdit/ > : <TodoElement/> }  
    </div>
  
  )
}

export default Todo