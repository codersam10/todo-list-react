import React, { useState } from "react";

const TodoInput = ({ addToList }) => {
  const [inputText, setInputText] = useState("");
  const handleInput = (event) => {
    setInputText(event.target.value);
  };
  const handleEnterPress = (e) => {
    if (e.key === "Enter") {
      addToList(inputText);
      setInputText("");
    }
  };

  return (
    <div>
      <h1>Todo List</h1>
      <div className="input-container">
        <input
          id="input-box"
          onInput={handleInput}
          onKeyDown={handleEnterPress}
          value={inputText}
          type="text"
          placeholder="Enter task"
        />
        <button
          className="add-btn"
          onClick={(e) => {
            addToList(inputText);
            setInputText("");
          }}
          type="button"
          aria-label="Add task"
        >
          <i className="fa-solid fa-plus"></i>
        </button>
      </div>
    </div>
  );
};

export default TodoInput;
