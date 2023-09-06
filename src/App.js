import React, { useState } from 'react';
import './App.css';

function TodoItem({ todo, onDelete }) {
  return (
    <div className="todo-item">
      {todo}
      <button onClick={() => onDelete(todo)}>Delete</button>
    </div>
  );
}

function App() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  const addTodo = () => {
    if (newTodo.trim() === '') return;
    setTodos([...todos, newTodo.trim()]);
    setNewTodo('');
  };

  const deleteTodo = (todoToDelete) => {
    const filteredTodos = todos.filter(todo => todo !== todoToDelete);
    setTodos(filteredTodos);
  };
  
  return (
    <div className="App">
      <h1>Simple Todo App</h1>
      <div className="todo-input">
        <textarea
          rows="2" cols="50"
          value={newTodo}
          onChange={e => setNewTodo(e.target.value)}
          placeholder="Add a new todo...">
          </textarea>
        <button onClick={addTodo}>Add</button>
      </div>
      <div className="todo-list">
        {todos.map((todo, index) => (
          <TodoItem key={index} todo={todo} onDelete={deleteTodo} />
        ))}
      </div>
    </div>
  );    
}

export default App;
