import React from 'react'
import { useState } from 'react'
import Todo from './Todo';

const TodoApp = () => {
    const [title, setTitle] = useState('hola');
    const [todos, setTodos] = useState([]);

    /*function handleClick(e){
        e.preventDefault();
        setTitle("Marcos");
    }*/

    function handleChange(event){
        const value = event.target.value;
        setTitle(value);
    }

    function handleSubmit(e){
        e.preventDefault();

        const newTarea = {
            id: crypto.randomUUID(),
            title: title,
            completed: false
        }

        const temp = [... todos];
        temp.unshift(newTarea);
        setTodos(temp);
        setTitle("");

        //setTodos([...todos, newTarea]);
    }

    function handleUpdate(id, value){
        const temp = [...todos];
        const item = temp.find(item => item.id === id)
        item.title = value;
        setTodos(temp);
    }

    function handleDelete(id){
        const temp = todos.filter(item => item.id !== id);
        setTodos(temp);
    }

    

  return (
    <div className='todoContainer'>
        <form className='todoCreateForm' onSubmit={handleSubmit}>
            <input onChange={handleChange} className='todoInput' type="text"  value={title}/>
            <input onClick={handleSubmit} className='buttonCreate' type="submit"  value="Crear tarea" />
            {title}
        </form>

        <div className='todosContainer'>
            {
                todos.map(item => (
                    <Todo key={item.id} item={item} onUpdate={handleUpdate} onDelete={handleDelete}/>
                ))
            }
        </div>
    </div>
  )
}

export default TodoApp