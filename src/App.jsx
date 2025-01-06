import { useEffect, useState } from "react";
import "./App.css";
import TodoInput from "./components/TodoInput";
import TodoListItem from "./components/TodoListItem";
import { Flip, toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { v4 } from "uuid";

const App = () => {
  const [todoList, setTodoList] = useState(
    JSON.parse(localStorage.getItem("todoList")) || []
  );
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
          transition: Flip,
        })
      : setTodoList((oldTasks) => [
          ...oldTasks,
          { id: v4(), text: listItem, isCompleted: false },
        ]);
  };

  const handleTaskCompletion = (id) => {
    const updatedTodo = todoList.map((todoObj) => {
      return todoObj.id === id
        ? { ...todoObj, isCompleted: !todoObj.isCompleted }
        : todoObj;
    });
    setTodoList(updatedTodo);
  };

  const deleteListItem = (id) => {
    const newTodoList = todoList.filter((listObj) => listObj.id !== id);
    setTodoList([...newTodoList]);
  };

  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(todoList));
  }, [todoList]);

  return (
    <div className="container">
      <TodoInput addToList={addToList} />
      <div className="list-container">
        {todoList.map((listItemObj) => {
          return (
            <TodoListItem
              key={listItemObj?.id}
              id={listItemObj?.id}
              listText={listItemObj?.text}
              isCompleted={listItemObj?.isCompleted}
              handleTaskCompletion={handleTaskCompletion}
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
