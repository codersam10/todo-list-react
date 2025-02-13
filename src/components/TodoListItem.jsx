import React from "react";
import { Flip, toast } from "react-toastify";

function TodoListItem({
  id,
  title,
  description,
  isCompleted,
  handleTaskCompletion,
  deleteListItem,
  editIdTitle,
  editIdDescription,
  editText,
  handleTextClick,
  handleInputChange,
  handleInputBlur,
}) {
  const [isShowDescription, setIsShowDescription] = React.useState(false);

  const handleShowDescription = () => {
    setIsShowDescription(!isShowDescription);
  };

  return (
    <li
      className="list-item"
      style={isCompleted ? { opacity: "0.6" } : { opacity: "1" }}
    >
      <button
        className="show-hide-description"
        onClick={handleShowDescription}
        title="Show/Hide Description"
      >
        {isShowDescription ? (
          <i className="fa-solid fa-caret-down"></i>
        ) : (
          <i className="fa-solid fa-caret-right"></i>
        )}
      </button>
      <div className="list-text">
        <div style={{ display: "flex", gap: "0.5rem" }}>
          {editIdTitle === id ? (
            <input
              className="list-title"
              type="text"
              value={editText}
              onChange={handleInputChange}
              onBlur={handleInputBlur}
              style={
                isCompleted
                  ? { textDecoration: "line-through" }
                  : { textDecoration: "none" }
              }
              autoFocus
            />
          ) : (
            <div
              className="list-title"
              onClick={(event) => handleTextClick(event, id, title)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleTextClick(e, id, title);
                }
              }}
              style={
                isCompleted
                  ? { textDecoration: "line-through" }
                  : { textDecoration: "none" }
              }
              tabIndex={0}
            >
              {title}
            </div>
          )}
          <button
            className="option-icon"
            aria-label="Delete"
            title="Delete"
            onClick={() => {
              deleteListItem(id);
            }}
          >
            <i className="fa-solid fa-trash delete-icon"></i>
          </button>
          <button
            className="option-icon"
            aria-label={
              isCompleted ? "Mark as incomplete" : "Mark as completed"
            }
            title={isCompleted ? "Mark as incomplete" : "Mark as completed"}
            onClick={() => {
              handleTaskCompletion(id);
            }}
            style={
              isCompleted
                ? { color: "hsl(125, 100.00%, 50.00%)" }
                : { color: "" }
            }
          >
            <i className="fa fa-check"></i>
          </button>
          <button
            className="option-icon"
            aria-label="Copy task to clipboard"
            title="Copy to clipboard"
            onClick={() => {
              window.navigator.clipboard.writeText(`${title}:\n${description}`);
              toast.success("Copied to clipboard", {
                position: "top-center",
                autoClose: 1500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                theme: "light",
                transition: Flip,
              });
            }}
          >
            <i className="fa fa-clone"></i>
          </button>
        </div>
        {editIdDescription === id ? (
          <textarea
            className="list-description"
            type="text"
            value={editText}
            onChange={handleInputChange}
            onBlur={handleInputBlur}
            style={
              isCompleted
                ? { textDecoration: "line-through" }
                : { textDecoration: "none" }
            }
            autoFocus
          />
        ) : (
          isShowDescription && (
            <div
              className="list-description"
              onClick={(event) => handleTextClick(event, id, description)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleTextClick(e, id, description);
                }
              }}
              style={
                isCompleted
                  ? { textDecoration: "line-through" }
                  : { textDecoration: "none" }
              }
              tabIndex={0}
            >
              {description}
            </div>
          )
        )}
      </div>
    </li>
  );
}

export default TodoListItem;
