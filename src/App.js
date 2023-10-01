import { useState } from "react";
import "./App.css";
import Todo from "./Todo";
import DailyDropDown from "./components/DailyDropDown";
import moment from "moment";
import TimeDropDown from "./components/TimeDropDown";
import UserWriteTodo from "./components/UserWriteTodo";

function App() {
  const [userTodo, setUserTodo] = useState([]);

  //오늘 날짜 넣기
  const today = moment().format("YYYY-MM-DD");
  const day = moment().format("dddd");

  //드롭다운 기능 넣기
  const [DailyView, setDailyView] = useState(false);

  const TimeList = [
    "08",
    "09",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
    "18",
    "19",
    "20",
    "21",
    "22",
    "23",
    "24",
  ];
  const img = new Image();
  img.src = `image/dropdown-down`;

  return (
    <div>
      <div className="navi">
        <div className="left-navi">
          <h1 id="title">dalpaeng todo</h1>
          <div id="date"></div>
          <span className="today">{today}</span>
          <span className="day"> {day}</span>
        </div>
        <div id="daily-dropdown">
          <ul
            onClick={() => {
              setDailyView(!DailyView);
            }}
          >
            Daily {DailyView ? "^" : "⌄"}
            {DailyView && <DailyDropDown />}
          </ul>
        </div>

        <button id="light">light</button>

        <button id="profile">profile</button>
      </div>
      <h1>Category</h1>
      <div className="categroy">
        <UserWriteTodo
          placeholder="카테고리 1"
          setUserTodo={setUserTodo}
          userTodo={userTodo}
        />
        <UserWriteTodo
          placeholder="카테고리 2"
          setUserTodo={setUserTodo}
          userTodo={userTodo}
        />
        <UserWriteTodo
          placeholder="카테고리 3"
          setUserTodo={setUserTodo}
          userTodo={userTodo}
        />
        <UserWriteTodo
          placeholder="카테고리 4"
          setUserTodo={setUserTodo}
          userTodo={userTodo}
        />
      </div>
      <h1>Timetable</h1>
      <TimeDropDown List={TimeList} />
      <TimeDropDown List={TimeList} />
      <TimeDropDown List={userTodo} />
      <div className="main">
        <h1>todo</h1>
        <Todo />
      </div>
    </div>
  );
}

export default App;
