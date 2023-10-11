import styles from "./NewPostForm.module.css";

export const NewPostForm = () => {
  return (
    <form className={styles.form}>
      <div className={styles.row}>
        <label>title22222:</label>
        <input />
      </div>
      <div className={styles.row}>
        <label>status3333:</label>
        <input />
      </div>
      <div className={styles.row}>
        <label>description:</label>
        <textarea />
      </div>
      <button>Create</button>
    </form>
  );
};
