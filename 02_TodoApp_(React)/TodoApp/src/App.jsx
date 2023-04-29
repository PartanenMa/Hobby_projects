import { useState } from "react";
import "./App.css";

function App() {
  const [Todos, setTodos] = useState([]);
  const [InputValue, setInputValue] = useState("");
  const [TodoNumber, setTodoNumber] = useState(0);

  function AddTodo() {
    if (InputValue && TodoNumber < 5) {
      setTodoNumber(TodoNumber + 1);
      setTodos([...Todos, InputValue]);
      setInputValue("");
    }else if (TodoNumber >= 5) {
      document.getElementById("InputTodo").value = "";
    }
  }

  function HandleInputChange(event) {
    setInputValue(event.target.value);
  }

  function HandleKeyDown(event) {
    if (event.key == "Enter") {
      AddTodo();
    }
  }

  function RemoveTodo(index) {
    const NewTodos = Todos.filter((_, i) => i !== index);
    setTodos(NewTodos);
    setTodoNumber(TodoNumber - 1);
  }

  return (
    <div className = "TodoAppContainer">
      <h3>TodoApp</h3>
      <input id = "InputTodo" value = {InputValue} onChange = {HandleInputChange} onKeyDown = {HandleKeyDown}/>
      <button onClick = {AddTodo}>Add todo</button>
      <ul>
        {Todos.map((todo, index) => (
          <div className = "Todo" onClick = {() => RemoveTodo(index)} key = {index}>
            <p className="p1">Todo {index + 1} (CLICK TO REMOVE):</p>
            <p className="p2">{todo}</p>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default App
