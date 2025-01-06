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
        color: "hsla(0, 0%, 100%, 0.3)",
      }
    : {};

  return (
    <li
      className="list-item"
      tabIndex={0}
    >
      <div
        className="list-text-container"
        onDoubleClick={() => {
          handleTaskCompletion(id);
        }}
      >
        <div
          className="list-title"
          style={styles}
        >
          {title}
          <div className="list-description">{description}</div>
        </div>
        {isCompleted ? (
          <span
            className="task-completed-text"
            title="Double tap to mark as incomplete"
          >
            Task Completed!
          </span>
        ) : (
          <span
            className="task-not-completed-text"
            title="Double tap to mark as completed"
          >
            Task Pending!
          </span>
        )}
      </div>

      <span
        className="delete-icon-wrapper"
        onClick={() => {
          deleteListItem(id);
        }}
      >
        <i className="fa-solid fa-trash delete-icon"></i>
      </span>
    </li>
  );
}

export default TodoListItem;
