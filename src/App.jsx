import React, { useEffect, useState } from "react";
import "./App.css";
import TodoInput from "./components/TodoInput";
import TodoListItem from "./components/TodoListItem";
import { v4 } from "uuid";

const App = () => {
  const [todoList, setTodoList] = useState(
    JSON.parse(localStorage.getItem("todoList")) || []
  );

  const [editIdTitle, setEditIdTitle] = React.useState(null);
  const [editIdDescription, setEditIdDescription] = React.useState(null);
  const [editText, setEditText] = React.useState("");

  const handleTextClick = (event, id, text) => {
    if (event.target.className === "list-title") {
      setEditIdTitle(id);
    } else {
      setEditIdDescription(id);
    }

    setEditText(text);
  };

  const handleInputChange = (event) => {
    setEditText(event.target.value);
  };

  const handleInputBlur = (e) => {
    if (e.target.className === "list-title") {
      setTodoList(
        todoList.map((todo) =>
          todo.id === editIdTitle ? { ...todo, title: editText } : todo
        )
      );
      setEditIdTitle(null);
      setEditText("");
      return;
    }

    setTodoList(
      todoList.map((todo) =>
        todo.id === editIdDescription
          ? { ...todo, description: editText }
          : todo
      )
    );
    setEditIdDescription(null);
    setEditText("");
  };

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
      <ul className="list-container">
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
              editIdTitle={editIdTitle}
              editIdDescription={editIdDescription}
              editText={editText}
              handleTextClick={handleTextClick}
              handleInputChange={handleInputChange}
              handleInputBlur={handleInputBlur}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default App;
