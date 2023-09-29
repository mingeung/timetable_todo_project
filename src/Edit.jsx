import React, { useState } from "react";

const Edit = ({ todo, setTodo, item }) => {
  const [text, setText] = useState("");

  const edit = (id) => {
    setText(todo.find((item) => item.id === id).content);
    setTodo(
      todo.map((item) =>
        item.id === id ? { ...item, content: text, edit: !item.edit } : item
      )
    );
  };
  return (
    <div style={{ display: "flex" }}>
      {item.edit ? (
        <input
          value={text}
          type="text"
          onChange={(event) => setText(event.target.value)}
        />
      ) : (
        <div>{item.content}</div>
      )}
      <button onClick={() => edit(item.id)}>
        {item.edit ? "확인" : "수정"}
      </button>
    </div>
  );
};

export default Edit;
