import { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card.jsx";
import { Input } from "@/components/ui/input.jsx";
import { Button } from "@/components/ui/button.jsx";
import { Checkbox } from "@/components/ui/checkbox.jsx";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  const addTodo = () => {
    if (newTodo.trim() !== "") {
      setTodos([...todos, { text: newTodo, completed: false }]);
      setNewTodo("");
    }
  };

  const toggleTodo = (index) => {
    const updatedTodos = [...todos];
    updatedTodos[index].completed = !updatedTodos[index].completed;
    setTodos(updatedTodos);
  };

  const deleteTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  return (
    <Card className="w-96 mx-auto mt-8">
      <CardHeader>
        <CardTitle>Todo App</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex gap-2 mb-4">
          <Input type="text" value={newTodo} onChange={(e) => setNewTodo(e.target.value)} placeholder="Enter a new todo" />
          <Button onClick={addTodo}>Add</Button>
        </div>
        <ul>
          {todos.map((todo, index) => (
            <li key={index} className="flex items-center mb-2">
              <Checkbox checked={todo.completed} onCheckedChange={() => toggleTodo(index)} />
              <span className={`ml-2 ${todo.completed ? "line-through text-muted-foreground" : ""}`}>{todo.text}</span>
              <Button variant="ghost" size="sm" className="ml-auto" onClick={() => deleteTodo(index)}>
                Delete
              </Button>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <p>{todos.length} todo(s)</p>
      </CardFooter>
    </Card>
  );
}

export default App;
