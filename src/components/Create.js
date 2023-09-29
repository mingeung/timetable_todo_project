import React, { useState } from "react";

const Create = ({ handleAddTodo }) => {
  // 각각의 todo를 담을 배열 만들기 (나중에 value에 들어갈 것임)
  const [value, setValue] = useState("");

  //onChange이벤트 만들기
  const onChange = (e) => {
    setValue(e.target.value);
  };

  //실질적으로 추가해주는 함수
  const todoListAdd = (e) => {
    e.preventDefault();
    handleAddTodo(value);
    setValue("");
  };
  return (
    <>
      <form onSubmit={todoListAdd}>
        <input value={value} onChange={onChange}></input>
        <button>추가</button>
      </form>
    </>
  );
};

export default Create;
