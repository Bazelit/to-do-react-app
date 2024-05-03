import { useState } from "react";
import Form from "./Form/Form";
import TodoList from "./TodoList/TodoList";
import Footer from "./Footer/Footer";

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const completedTodos = todos.filter((item) => item.done).length;
  const notComplitedTodos = todos.filter((item) => !item.done).length;

  return (
    <>
      <Form todos={todos} setTodos={setTodos} />
      {todos.length > 0 ? <TodoList todos={todos} setTodos={setTodos} /> : ""}
      <Footer
        completedTodos={completedTodos}
        notComplitedTodos={notComplitedTodos}
      />
    </>
  );
};

export default Todo;
