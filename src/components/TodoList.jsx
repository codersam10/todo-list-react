import React from "react";

function TodoList({ item, index, deleteListItem }) {
  return (
    <div>
      <li className="list-item">
        {item}
        <span >
          <i onClick={()=>{
            deleteListItem(index)
        }} className="fa-solid fa-trash"></i>
        </span>
      </li>
    </div>
  );
}

export default TodoList;
