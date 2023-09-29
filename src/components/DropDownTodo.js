import { useState } from "react";
// 드롭다운 todo 받기

function DropDownTodo() {
  const DropDownTodo = [writeTodo];
  const [writeTodo, setWriteTodo] = useState("");
  const onChange = (e) => setWriteTodo(e.target.value);
  const onSubmit = (e) => {
    e.preventDefault();
    if (writeTodo === "") {
      return;
    }
    setWriteTodo((currentList) => currentList);
  };

  return (
    <div>
      {/* 드롭다운 too 받기 */}
      <form onSubmit={onSubmit}>
        <input
          value={writeTodo}
          onChange={onChange}
          type="text"
          placeholder="할일"
        />
      </form>
    </div>
  );
}

export default DropDownTodo;
