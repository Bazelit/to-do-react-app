import styles from "./Footer.module.css";

const Footer = (props) => {
  return (
    <div className={styles.footer}>
      <span className={styles.completed}>✅ Выполнено: {props.completedTodos}</span>
      <span>❌ Осталось: {props.notComplitedTodos}</span>
    </div>
  );
};

export default Footer;
