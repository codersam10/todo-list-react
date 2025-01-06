import { useEffect, useState } from "react";
import "./App.css";
import TodoInput from "./components/TodoInput";
import TodoListItem from "./components/TodoListItem";
import { v4 } from "uuid";

const App = () => {
  const [todoList, setTodoList] = useState(
    JSON.parse(localStorage.getItem("todoList")) || []
  );
  const addToList = (listItemTitle, listItemDescrption) => {
    setTodoList((oldTasks) => [
      ...oldTasks,
      {
        id: v4(),
        title: listItemTitle,
        description: listItemDescrption,
        isCompleted: false,
      },
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
              title={listItemObj?.title}
              description={listItemObj?.description}
              isCompleted={listItemObj?.isCompleted}
              handleTaskCompletion={handleTaskCompletion}
              deleteListItem={deleteListItem}
            />
          );
        })}
      </div>
    </div>
  );
};

export default App;
