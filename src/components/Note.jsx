import React from "react";
//using material-ui trash can icon for delete
import DeleteIcon from "@material-ui/icons/Delete";

function Note(props) {
  function handleClick() {
    //calls onDelete in App
    props.onDelete(props.id);
  }

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={handleClick}>
        <DeleteIcon />
      </button>
    </div>
  );
}

export default Note;
