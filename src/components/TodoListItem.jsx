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

      <span
        className="options-icon-wrapper"
        title="Delete"
        onClick={() => {
          deleteListItem(id);
        }}
      >
        <i className="fa-solid fa-trash delete-icon"></i>
      </span>

      <span
        className="options-icon-wrapper"
        title={isCompleted ? "Mark as incomplete" : "Mark as completed"}
        onClick={() => {
          handleTaskCompletion(id);
        }}
        style={
          isCompleted ? { color: "hsl(125, 100.00%, 50.00%)" } : { color: "" }
        }
      >
        <i className="fa fa-check"></i>
      </span>

      <span
        className="options-icon-wrapper"
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
      </span>
    </li>
  );
}

export default TodoListItem;
