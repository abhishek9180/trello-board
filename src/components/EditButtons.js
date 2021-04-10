import "../styles/EditButtons.css";

import React from "react";

const EditButtons = (props) => (
  <div className="Edit-Buttons">
    <div
      tabIndex="0"
      className="Edit-Button"
      style={{ backgroundColor: "#5aac44" }}
      onClick={props.handleSave}
    >
      {props.saveLabel}
    </div>
    {props.handleDelete && (
      <div
        tabIndex="0"
        className="Edit-Button"
        style={{ backgroundColor: "#EA2525", marginLeft: 0 }}
        onClick={props.handleDelete}
      >
        Delete
      </div>
    )}
    <div
      tabIndex="0"
      className="Edit-Button-Cancel"
      onClick={props.handleCancel}
    >
      <ion-icon name="close" />
    </div>
  </div>
);

export default EditButtons;
