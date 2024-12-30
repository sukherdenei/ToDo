// import styles from "../app/page.module.css";

// const Header = (props) => {
//   return (
//     <div className="header">
//       <h1>To-Do list</h1>
//       <div className={styles.flex}>
//         <input
//           type="add a new task"
//           onChange={(e) => setNewtodo(e.target.value)}
//         />
//         <button onClick={props.deleteHandler}>Delete</button>
//       </div>
//       {props.todos.map((todo, index) => {
//         return <p key={index}>{todo}</p>;
//       })}
//     </div>
//   );
// };
// // export default Header;
// "use client";
// import Image from "next/image";
// import "./page.css";
// import { useState } from "react";
// export default function Home() {
//   const [tasks, settasks] = useState([]);
//   const [newTodo, setNewTodo] = useState("");
//   const Datas = ["geree tseverlen", "hool hiin"];

//   const addTodoHandler = () => {
//    settasks([...tasks, newTodo]);
//  };
//   function deleteTask(index) {
//    const zaitai = tasks.filter((task, idx) => idx != index);
//    settasks(zaitai);
//  }
//   return (
//    <div className="body">
//      <div className="box">
//        <p>Todo-list</p>
//        <div className="input">
//          <input type="text" onChange={(e) => setNewTodo(e.target.value)} />
//          <button onClick={addTodoHandler}>add</button>
//        </div>
//        <div className="filter">
//          <button>All</button>
//          <button>Active</button>
//          <button>Completed</button>
//        </div>
//        <div className="space">
//          {tasks.map((task, index) => {
//            return (
//              <div className="task">
//                <input type="checkbox" />
//                <p key={index}>{task}</p>
//                <button
//                  onClick={() => {
//                    deleteTask(index);
//                  }}
//                >
//                  delete
//                </button>
//              </div>
//            );
//          })}
//          <div>
//            <p>Powered by</p>
//            <a href="">
//              <p>Pinecone academy</p>
//            </a>
//          </div>
//        </div>
//      </div>
//    </div>
//  );
// }
