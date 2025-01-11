import { useRef } from "react";
import { Flip, toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const TodoInput = ({ addToList }) => {
  const titleInputRef = useRef(null);
  const descriptionInputRef = useRef(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      titleInputRef.current.value === "" ||
      descriptionInputRef.current.value === ""
    ) {
      toast.warn("Please enter task Title and Description!", {
        position: "top-center",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "light",
        transition: Flip,
      });
    } else {
      addToList(titleInputRef.current.value, descriptionInputRef.current.value);
      titleInputRef.current.value = "";
      descriptionInputRef.current.value = "";
    }
  };

  return (
    <>
      <h1>Todo List</h1>
      <form
        className="input-container"
        onSubmit={handleSubmit}
      >
        <input
          id="title-input-box"
          type="text"
          name="title"
          aria-label="Enter task title"
          placeholder="Enter task title"
          ref={titleInputRef}
          autoFocus
        />
        <input
          id="description-input-box"
          type="text"
          name="description"
          aria-label="Enter task description"
          placeholder="Enter task description"
          ref={descriptionInputRef}
        />
        <button
          className="add-btn"
          type="submit"
          aria-label="Add task"
        >
          Add Task
        </button>
        <ToastContainer />
      </form>
    </>
  );
};

export default TodoInput;
