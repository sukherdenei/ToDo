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

  const [all, setAll] = useState("active");
  const [active, setActive] = useState("offline");
  const [completed, setCompleted] = useState("offline");

  const alll = () => {
    setAll(styles.active);
    setActive(styles.offline);
    setCompleted(styles.offline);
  };
  const activity = () => {
    setAll(styles.offline);
    setActive(styles.active);
    setCompleted(styles.offline);
  };
  const completedd = () => {
    setAll(styles.offline);
    setActive(styles.offline);
    setCompleted(styles.active);
  };
  const addTodoHandler = () => {
    setTodos([...todos, newTodo]);
  };
  // const deleteHandler = () => {
  //   alert("are you sure to delte!");
  // };
  const deleteTask = (d) => {
    const deleter = todos.filter((todo, idx) => idx != d);
    setTodos(deleter);
    alert("are you sure to delete!");
  };
  return (
    <div>
      <div className={styles[`todo-container`]}>
        <h2>To do list</h2>
        <div className={`${styles.flex} ${styles["addTask"]}`}>
          <div>
            <input
              type="text"
              placeholder="Add A New Task"
              onChange={(e) => setNewTodo(e.target.value)}
            />
          </div>
          <div>
            <button onClick={addTodoHandler}>Add</button>
          </div>
        </div>

        <div className={styles["activeThree"]}>
          <div className={styles.flex}>
            <button onClick={alll} className={all}>
              All
            </button>
            <button onClick={activity} className={active}>
              Active
            </button>
            <button onClick={completedd} className={completed}>
              Completed
            </button>
          </div>
        </div>
        <div>
          {todos.map((todo, index) => {
            return (
              <div className={styles.box}>
                <input type="checkbox" name="" id="" />
                <p key={index}>{todo}</p>
                <button
                  onClick={() => {
                    deleteTask(index);
                  }}
                >
                  Delete
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
