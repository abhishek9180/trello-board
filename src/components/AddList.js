import "../styles/AddList.css";

import React, { useState } from "react";
import { connect } from "react-redux";
import ListEditor from "./ListEditor";
import shortid from "shortid";
import EditButtons from "./EditButtons";

const AddList = (props) => {
  const [title, setTitle] = useState("");

  const handleChangeTitle = (e) => setTitle(e.target.value);

  const createList = async () => {
    // if title is blank don't add
    if (!title || !title.trim()) return;
    const { dispatch } = props;
    props.toggleAddingList();

    dispatch({
      type: "ADD_LIST",
      payload: { listId: shortid.generate(), listTitle: title },
    });
  };
  return (
    <div className="Add-List-Editor">
      <ListEditor
        title={title}
        handleChangeTitle={handleChangeTitle}
        onClickOutside={props.toggleAddingList}
        saveList={createList}
      />

      <EditButtons
        handleSave={createList}
        saveLabel={"Add list"}
        handleCancel={props.toggleAddingList}
      />
    </div>
  );
};

export default connect()(AddList);
