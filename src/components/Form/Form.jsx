import { useState } from "react";
import styles from "./Form.module.css";

const Form = ({ todos, setTodos }) => {
  const [todo, setTodo] = useState({ name: "", done: false });

  const handleSubmit = (event) => {
    event.preventDefault();
    if (todo.name.length < 1) {
      alert("Поле не должно быть пустым");
    } else {
      setTodos([...todos, todo]);
      setTodo({ name: "", done: false });
    }
  };

  return (
    <form className={styles.todoForm} onSubmit={handleSubmit}>
      <div className={styles.inputContainer}>
        <input
          className={styles.formInput}
          onChange={(event) =>
            setTodo({ name: event.target.value, done: false })
          }
          value={todo.name}
          placeholder="Введите название задачи..."
        />
        <button className={styles.formButton} type="submit">
          Добавить
        </button>
      </div>
    </form>
  );
};

export default Form;
