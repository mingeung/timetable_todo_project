import { useState, useEffect } from "react";
import Create from "./components/Create";
import Category from "./components/Category";
import "./Todo.css";

function List({ todos, handleRemove, handleChecked }) {
  return (
    <ul className="total-todo-list">
      {todos.map((todo, index) => {
        return (
          <li key={index}>
            <div className="todo-list">
              <span
                onClick={() => {
                  handleChecked(todo.id);
                }}
              >
                ✔
              </span>
              <span className={`${todo.checked ? "checked" : ""}`}>
                {todo.text}
              </span>

              <span onClick={() => handleRemove(todo.id)}>Ⅹ</span>
            </div>
          </li>
        );
      })}
    </ul>
  );
}

function Todo({ number }) {
  //todo list 넣기
  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem(`"todoList"${number}`)) || []
  );

  //할일 목록이 변경될 때마다 Local Storage에 저장
  useEffect(() => {
    localStorage.setItem(`"todoList"${number}`, JSON.stringify(todos));
  }, [todos]);
  //브라우저 local storage에서 데이터를 가져와 초기 할일 목록을 설정하는 함수
  useEffect(() => {
    const storedTodoList = JSON.parse(
      localStorage.getItem(`"todoList"${number}`)
    );
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
        // id: todos.length,
        id: Math.random(),
        text,
        checked: false,
        modify: false,
      };
      //checked가 true인 값을 가져오기 위함
      setTodos((currentArray) => [...currentArray, todo]);
    }
  };

  //삭제 기능
  const handleRemove = (id) => {
    setTodos((todos) => todos.filter((todo) => todo.id !== id));
  };

  //완료 기능
  //삼항 연산자에 여러 값 쓰고 싶을 때는 소괄호로 묶어주면 된다.
  const handleChecked = (id) => {
    setTodos(
      todos.map((todoItem) =>
        todoItem.id === id
          ? { ...todoItem, checked: !todoItem.checked }
          : todoItem
      )
    );
  };
  //전체 tood 개수
  const todoCount = todos.length;
  //완료 개수 세기 chatGPT가 알려줌 ㅎ
  const checkedCount = todos.filter((todo) => todo.checked === true).length;

  //todo 생성 + 리스트로 나누기
  return (
    <div className="todo1">
      <Category number={number} />
      <List
        todos={todos}
        handleRemove={handleRemove}
        handleChecked={handleChecked}
      />

      <Create handleAddTodo={handleAddTodo} />
      <div className="percent">
        {Math.floor((checkedCount / todoCount) * 100)} %
      </div>
    </div>
  );
}

export default Todo;

// 객체 : key, value
// key가 checked인 것 중에 value가 true인 것 개수 세기
