import React, { useState } from "react";
import "./App.css";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import { Flip, toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const [todoList, setTodoList] = useState([]);
  const addToList = (listItem) => {
    listItem === ""
      ? toast.warn("Please enter a task!", {
          position: "top-center",
          autoClose: 1500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: "light",
          transition: Flip
        })
      : setTodoList([...todoList, listItem]);
  };
  const deleteListItem = (index) => {
    const newTodoList = [...todoList];
    newTodoList.splice(index, 1);
    setTodoList([...newTodoList]);
  };
  return (
    <div className="container">
      <TodoInput addToList={addToList} />
      <div className="list-container">
        {todoList.map((listItem, index) => {
          return (
            <TodoList
              key={index}
              index={index}
              item={listItem}
              deleteListItem={deleteListItem}
            />
          );
        })}
        <ToastContainer />
      </div>
    </div>
  );
};

export default App;
