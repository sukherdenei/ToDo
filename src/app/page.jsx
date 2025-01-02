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

import { use, useState } from "react";
import styles from "./page.module.css";

export default function Home() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  const [activeFilter, setActiveFilter] = useState("all");

  const addTodoHandler = () => {
    newTodo.length == 0
      ? alert("enter a new task")
      : setTodos([...todos, newTodo]);
    // setNewTodo("");
    // if (newTodo.length == [0]) {
    //   alert("enter a new task");
    // } else {
    //   setTodos([...todos, newTodo]);
    // }
  };

  const deleteTask = (d) => {
    const deleted = todos.filter((first, last) => last != d);

    const isconfirmed = confirm("are you sure to delete!");
    if (isconfirmed == true) {
      setTodos(deleted);
    } else {
    }
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
            <button
              className={activeFilter == "all" && styles.activeStyle}
              onClick={() => setActiveFilter("all")}
            >
              All
            </button>
            <button
              className={activeFilter == "active" && styles.activeStyle}
              onClick={() => setActiveFilter("active")}
            >
              Active
            </button>
            <button
              className={activeFilter == "completed" && styles.activeStyle}
              onClick={() => setActiveFilter("completed")}
            >
              Completed
            </button>
          </div>
        </div>
        <div>
          {todos.map((first, last) => {
            return (
              <div className="taskB">
                <div key={last} className={styles.box}>
                  <div className={styles.flex}>
                    <input type="checkbox" name="" id="" />
                    <p key={last}>{first}</p>
                  </div>

                  <button
                    onClick={() => {
                      deleteTask(last);
                    }}
                  >
                    Delete!
                  </button>
                </div>
              </div>
            );
          })}
        </div>
        <div>
          {todos.length
            ? "0 of 1 tasks completed"
            : "No task yet. Add one above"}
        </div>
        <div className={styles.phfive}>
          <p>Powered by</p>
          <h5>Pinecone academy</h5>
        </div>
      </div>
    </div>
  );
}
