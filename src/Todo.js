import { useState, useEffect } from "react";
import Create from "./components/Create";
import Category from "./components/Category";

function List({ todos, handleRemove, handleChecked }) {
  return (
    <ul>
      {todos.map((todo, index) => {
        return (
          <li key={index}>
            <div>
              <span className={`${todo.checked ? "checked" : ""}`}>
                {todo.text}
              </span>
              <span
                onClick={() => {
                  handleChecked(todo.id);
                }}
              >
                ✅
              </span>
              <span onClick={() => handleRemove(todo.id)}>❌</span>
            </div>
          </li>
        );
      })}
    </ul>
  );
}

function Todo() {
  //todo list 넣기
  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem("todoList")) || []
  );
  //완료된 목록 개수 세기
  // const [checked, setChecked] = useState(0);

  //할일 목록이 변경될 때마다 Local Storage에 저장
  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(todos));
  }, [todos]);
  //브라우저 local storage에서 데이터를 가져와 초기 할일 목록을 설정하는 함수
  useEffect(() => {
    const storedTodoList = JSON.parse(localStorage.getItem("todoList"));
    if (storedTodoList) {
      setTodos(storedTodoList);
    }
  }, []);

  //todo 추가 -> 배열에 담기
  const handleAddTodo = (text) => {
    if (text === "") {
      return;
    } else {
      const todo = {
        id: todos.length,
        text,
        checked: false,
        modify: false,
      };
      //checked가 true인 값을 가져오기 위함
    }
  };

  //삭제 기능
  const handleRemove = (id) => {
    setTodos((todos) => todos.filter((todo) => todo.id !== id));
  };

  //완료 기능
  //삼항 연산자에 여러 값 쓰고 싶을 때는 소괄호로 묶어주면 된다.
  //체크표시 된 거 list로 만들기
  const handleChecked = (id) => {
    setTodos(
      todos.map((todoItem) =>
        todoItem.id === id
          ? { ...todoItem, checked: !todoItem.checked }
          : todoItem
      )
    );
  };

  //todo 생성 + 리스트로 나누기
  return (
    <div>
      <Category />
      <List
        todos={todos}
        handleRemove={handleRemove}
        handleChecked={handleChecked}
      />

      <Create handleAddTodo={handleAddTodo} />
      <div>{todos.length}</div>
      <div>{(todos.checked === true).length}</div>
    </div>
  );
}

export default Todo;

// 객체 : key, value
// key가 checked인 것 중에 value가 true인 것 개수 세기
