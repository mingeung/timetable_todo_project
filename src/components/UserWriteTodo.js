import { useState } from "react";

//<UserWriteTodo placeholder="할 일1" />
//전달해야 하는 정보: writetodo 값
//App.js에서 const [userTodo, setUserTodo] = useState([]); 배열 만들기

function UserWriteTodo({ placeholder, setUserTodo }) {
  const [writeTodo, setWriteTodo] = useState("");
  const onChange = (e) => setWriteTodo(e.target.value);
  const onSubmit = (e) => {
    e.preventDefault();
    if (writeTodo === "") {
      return;
    }
    setWriteTodo((currentList) => currentList);
    setUserTodo((currentTodo) => [...currentTodo, writeTodo]);
  };

  //드롭다운에 띄울 내용
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          value={writeTodo}
          onChange={onChange}
          type="text"
          placeholder={placeholder}
        />
      </form>
    </div>
  );
}

export default UserWriteTodo;
