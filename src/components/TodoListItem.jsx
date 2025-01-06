import React, { useState } from "react";

function TodoListItem({ item, index, deleteListItem }) {
  const [isDone, setIsDone] = useState(false);
  const styles = isDone
    ? { textDecoration: "line-through", color: "hsla(0, 0%, 100%, 0.3)" }
    : {};

  return (
    <div>
      <li
        className="list-item"
        onClick={() => {
          setIsDone((prev) => !prev);
        }}
      >
        <span
          className="list-text"
          style={styles}
        >
          {item}
        </span>

        {isDone && (
          <span
          className="task-completed-text"
            style={{
              textWrap: "nowrap",
              fontSize: "0.6rem",
              fontWeight: "bold",
              color: "hsl(113, 97.80%, 35.90%)",
            }}
          >
            Task Completed!
          </span>
        )}

        <span className="delete-icon">
          <i
            className="fa-solid fa-trash"
            onClick={() => {
              deleteListItem(index);
            }}
          ></i>
        </span>
      </li>
    </div>
  );
}

export default TodoListItem;
