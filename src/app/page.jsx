// "use client";
// import styles from "./page.module.css";
// import Header from "@/components/Header";
// import Task from "@/components/Task";
// import Empty from "@/components/Empty";
// import Option from "@/components/Option";
// import Footer from "@/components/Footer";
// import { useState } from "react";

// export default function Home() {
//   const [todos, setTodos] = useState([]);
//   const [newTodo, setNewTodo] = useState("");

//   const addTodoHandler = () => {
//     setTodos([...todos, newTodo]);
//   };

//   const deleteHandler = () => {
//     alert("are you sure to delete? ");
//   };

//   return (
//     <div className={styles.container}>
//       <Header deleteHandler={deleteHandler} todos={todos} />
//       <Task />
//       <Option />
//       <Empty />
//       <Footer />
//     </div>
//   );
// }
"use client";
import { useState } from "react";
import styles from "./page.module.css";

export default function Home() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  // const [del, setDel] = useState("");

  const [all, setAll] = useState("active");
  const [active, setActive] = useState("offline");
  const [completed, setCompleted] = useState("offline");

  const handleactive = () => {
    setAll(styles.active);
    setActive(styles.offline);
    setCompleted(styles.offline);
  };
  const handleon = () => {
    setAll(styles.offline);
    setActive(styles.active);
    setCompleted(styles.offline);
  };
  const handleonline = () => {
    setAll(styles.offline);
    setActive(styles.offline);
    setCompleted(styles.active);
  };

  const addTodoHandler = () => {
    setTodos([...todos, newTodo]);
  };
  const deleteHandler = () => {
    alert("are you sure to delete ?");
  };

  const deleteX = () => {
    todos.splice(() => {});
  };

  return (
    <div>
      <div className={styles[`todo-container`]}>
        <h2>To-Do list</h2>
        <div className={`${styles.flex} ${styles["addTask"]}`}>
          <input
            type="text"
            placeholder="Add a new task"
            onChange={(e) => setNewTodo(e.target.value)}
          />
          <button onClick={addTodoHandler}>Add</button>
        </div>
        <div className="activeThree">
          <div className={styles.flex}>
            <button onClick={handleactive} className={all}>
              All
            </button>
            <button onClick={handleon} className={active}>
              Active
            </button>
            <button onClick={handleonline} className={completed}>
              Completed
            </button>
          </div>
        </div>
        <div>
          {todos.map((todo, index) => {
            return (
              <div className={styles.box}>
                <input type="checkbox" name="" id="" />
                <p>{todo}</p>
                <button onClick={deleteX}>Delete</button>
              </div>
            );
          })}
        </div>
        {/* <div className="no-task">
          <p>No task yet. Add one above!</p>
        </div> */}
        <div className="footer">
          <p>Powered by </p>
          <h5>Pinecone academy</h5>
        </div>
      </div>
    </div>
  );
}
