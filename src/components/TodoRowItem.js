import React from "react";
import { BsTrash } from "react-icons/bs"; // 使用 React-icons 删除图标

function TodoRowItem(props) {
  const handleDeleteClick = () => {
    props.deleteTodo(props.rowNumber);
  };

  return (
    <tr>
      <th scope="row">{props.rowNumber}</th>
      <td>{props.rowDescription}</td>
      <td>{props.rowAssigned}</td>
      <td onClick={handleDeleteClick}><BsTrash /></td> 
    </tr>
  );
}

export default TodoRowItem;
