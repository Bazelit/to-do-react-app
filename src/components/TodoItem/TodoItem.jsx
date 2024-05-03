import { useState } from "react";
import styles from "./TodoItem.module.css";

const TodoItem = ({ item, todos, setTodos }) => {
  // const [todoReady, setTodoReady] = useState(false);

  const handleReady = () => {
    // setTodoReady(!todoReady);
    setTodos(
      todos.map((todo) =>
        todo.name === item.name ? { ...todo, done: !todo.done } : todo
      )
    );
  };

  const readyCalss = item.done ? styles.complited : "";
  const readySymbol = item.done ? "✔" : "▢";

  return (
    <div className={styles.item}>
      <div className={styles.itemName}>
        <div
          onClick={() => handleReady(item.name)}
          style={{ cursor: "pointer" }}
        >
          <span>{readySymbol}</span>
          <span style={{ marginLeft: "5px" }} className={readyCalss}>
            {item.name}
          </span>
        </div>
        <button
          onClick={() => setTodos(todos.filter((todo) => todo !== item))}
          className={styles.deleteButton}
        >
          x
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
