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
  const [newTodo, setNewTodo] = useState([]);

  const [activeFilter, setActiveFilter] = useState("all");

  // const newTask = {
  //   id: Date.now(),
  //   text: inputValue,
  //   isCompleted: false,
  // };
  // updateTaskList([newTodo, ...setNewTodo]);
  // setTodos("");

  const addTodoHandler = () => {
    newTodo.length == 0
      ? alert("enter a new task")
      : setTodos([...todos, newTodo]);
    setNewTodo("");
    // {
    //   title:"xa",
    //   isCompleted:false
    // }

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
  const clearCompletedTask = () => {
    const confirmClear = window.confirm(
      "Are you sure you want to clear all tasks?"
    );
    if (confirmClear == true) {
      setTodos([]);
    }
  };
  const toggleIsCompleted = (incomingTodo) => {
    let changedTodos = todos.map((t) => {
      if (t.todo === incomingTodo.todo) {
        t.isCompleted = !t.isCompleted;
      }
      return t;
    });
    setTodos(changedTodos);
  };

  return (
    <div>
      <div className={styles[`todo-container`]}>
        <h2>To do list</h2>
        <div className={`${styles.flex} ${styles["addTask"]}`}>
          <div>
            <input
              value={newTodo}
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
        <div>{todos.length ? "" : "No task yet. Add one above"}</div>
        <div className={styles.taskSummary}>
          <p>
            {todos.filter((todo) => todo.isCompleted).length} of {todos.length}{" "}
            task completed
          </p>
          <p onClick={clearCompletedTask} className={styles.deleteTask}>
            clear completed
          </p>
        </div>
        <div className={styles.phfive}>
          <p>Powered by</p>
          <h5>Pinecone academy</h5>
        </div>
      </div>
    </div>
  );
}
