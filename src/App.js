import { useState } from "react";
import Todo from "./Todo";
import DailyDropDown from "./components/DailyDropDown";
import MenuDropDown from "./components/MenuDropDown";
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
  const [MenuView, setMenuView] = useState(false);

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

  return (
    <div>
      <div className="navi">
        <h1>dalpaeng todo</h1>
        <div>
          <p className="today">{today}</p>
          <p className="day">{day}</p>
        </div>

        <ul
          onClick={() => {
            setDailyView(!DailyView);
          }}
        >
          Daily {DailyView ? "＾" : "⌄"}
          {DailyView && <DailyDropDown />}
        </ul>

        <button>light</button>
        <ul
          onClick={() => {
            setMenuView(!MenuView);
          }}
        >
          Menu {MenuView ? "^" : "⌄"}
          {MenuView && <MenuDropDown />}
        </ul>
      </div>
      <h1>타임테이블</h1>
      <UserWriteTodo
        placeholder="할일 1"
        setUserTodo={setUserTodo}
        userTodo={userTodo}
      />
      <UserWriteTodo
        placeholder="할일 2"
        setUserTodo={setUserTodo}
        userTodo={userTodo}
      />
      <UserWriteTodo
        placeholder="할일 3"
        setUserTodo={setUserTodo}
        userTodo={userTodo}
      />

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
