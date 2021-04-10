import "../styles/ListEditor.css";

import React, { useEffect, useRef } from "react";
import TextareaAutosize from "react-textarea-autosize";

const ListEditor = (props) => {
  const ref = useRef();

  useEffect(() => {
    document.addEventListener("click", handleClick, false);
    return () => document.removeEventListener("click", handleClick, false);
  }, []);

  const onEnter = (e) => {
    if (e.keyCode === 13) {
      e.preventDefault();
      props.saveList();
    }
  };

  const handleClick = (e) => {
    const node = ref.current;

    if (node.contains(e.target)) {
      return;
    }

    props.onClickOutside();
  };

  return (
    <div className="List-Title-Edit" ref={ref}>
      <TextareaAutosize
        autoFocus
        className="List-Title-Textarea"
        placeholder="Enter list title..."
        value={props.title}
        onChange={props.handleChangeTitle}
        onKeyDown={onEnter}
        style={{ width: 240 }}
      />
    </div>
  );
};

export default ListEditor;
