import "../styles/CardEditor.css";

import React, { useState } from "react";
import TextareaAutosize from "react-textarea-autosize";
import EditButtons from "./EditButtons";

const CardEditor = (props) => {
  const [cardInputs, setCardInputs] = useState({
    title: props.card.cardTitle || "",
    description: props.card.cardText || "",
  });

  const handleInputChange = (event, fieldName) =>
    setCardInputs({ ...cardInputs, [fieldName]: event.target.value });

  return (
    <div className="Edit-Card">
      <div className="Card">
        <div className="Card-Title">
          <TextareaAutosize
            autoFocus
            className="Edit-Card-Textarea"
            placeholder="Enter Title..."
            value={cardInputs.cardTitle}
            onChange={(e) => handleInputChange(e, "cardTitle")}
          />
        </div>
        <hr />
        <div className="Card-Description">
          <TextareaAutosize
            className="Edit-Card-Textarea"
            placeholder="Enter description..."
            value={cardInputs.cardText}
            onChange={(e) => handleInputChange(e, "cardText")}
          />
        </div>
      </div>
      <EditButtons
        handleSave={() => props.onSave(cardInputs)}
        saveLabel="Add card"
        handleDelete={props.onDelete}
        handleCancel={props.onCancel}
      />
    </div>
  );
};

export default CardEditor;
