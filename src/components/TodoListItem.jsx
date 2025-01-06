function TodoListItem({
  id,
  listText,
  isCompleted,
  handleTaskCompletion,
  deleteListItem,
}) {
  const styles = isCompleted
    ? { textDecoration: "line-through", color: "hsla(0, 0%, 100%, 0.3)" }
    : {};

  return (
    <li className="list-item">
      <div
        className="list-text-container"
        onClick={() => {
          handleTaskCompletion(id);
        }}
      >
        <span
          className="list-text"
          style={styles}
        >
          {listText}
        </span>
        {isCompleted && (
          <span className="task-completed-text">Task Completed!</span>
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
