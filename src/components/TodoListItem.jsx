import { Flip, toast } from "react-toastify";

function TodoListItem({
  id,
  title,
  description,
  isCompleted,
  handleTaskCompletion,
  deleteListItem,
}) {
  const styles = isCompleted
    ? {
        textDecoration: "line-through",
      }
    : {};

  return (
    <li
      className="list-item"
      tabIndex={0}
      style={isCompleted ? { opacity: "0.6" } : { opacity: "1" }}
    >
      <div
        className="list-text-container"
        style={styles}
        onDoubleClick={() => {
          handleTaskCompletion(id);
        }}
      >
        <div className="list-title">{title}</div>
        <div className="list-description">{description}</div>
      </div>

      <button
        className="options-icon-wrapper"
        aria-label="Delete"
        title="Delete"
        onClick={() => {
          deleteListItem(id);
        }}
      >
        <i className="fa-solid fa-trash delete-icon"></i>
      </button>

      <button
        className="options-icon-wrapper"
        aria-label={isCompleted ? "Mark as incomplete" : "Mark as completed"}
        title={isCompleted ? "Mark as incomplete" : "Mark as completed"}
        onClick={() => {
          handleTaskCompletion(id);
        }}
        style={
          isCompleted ? { color: "hsl(125, 100.00%, 50.00%)" } : { color: "" }
        }
      >
        <i className="fa fa-check"></i>
      </button>

      <button
        className="options-icon-wrapper"
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
    </li>
  );
}

export default TodoListItem;
