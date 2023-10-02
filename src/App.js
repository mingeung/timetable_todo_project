import { useState } from "react";
import "./App.css";
import Todo from "./Todo";
import DailyDropDown from "./components/DailyDropDown";
import moment from "moment";
import TimeDropDown from "./components/TimeDropDown";
import UserWriteTodo from "./components/UserWriteTodo";
import { Globalstyle } from "./theme/Global";
import { darkTheme, lightTheme } from "./theme/theme";
import { ThemeProvider } from "styled-components";

function App() {
  const [userTodo, setUserTodo] = useState([]);
  //다크모드
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(() => {
      return theme === "dark" ? "light" : "dark";
    });
  };

  //오늘 날짜 넣기
  const today = moment().format("YYYY-MM-DD");
  const day = moment().format("dddd");

  //드롭다운 기능 넣기
  const [DailyView, setDailyView] = useState(false);

  const TimeList = [
    "08:00",
    "09:00",
    "10:00",
    "11:00",
    "12:00",
    "13:00",
    "14:00",
    "15:00",
    "16:00",
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00",
    "23:00",
    "24:00",
  ];
  const img = new Image();
  img.src = `image/dropdown-down`;

  return (
    <div id="full">
      <div className="navi">
        <div className="left-navi">
          <h1 id="title">dalpaeng todo</h1>
          <div id="date">
            <span className="today">{today}</span>
            <span className="day"> {day}</span>
          </div>
        </div>
        <div id="right-navi">
          <div id="daily-dropdown">
            <ul
              onClick={() => {
                setDailyView(!DailyView);
              }}
              className="daily-dropdown-ul"
            >
              Daily {DailyView ? "^" : "⌄"}
              {DailyView && <DailyDropDown />}
            </ul>
          </div>
          {/* 다크모드 */}
          <ThemeProvider theme={theme === "dark" ? darkTheme : lightTheme}>
            <Globalstyle />
            <button
              id="light"
              type="button"
              onClick={toggleTheme}
              theme={theme}
            >
              {theme === "dark" ? "light" : "dark"}
            </button>
          </ThemeProvider>

          <button id="profile">profile</button>
        </div>
      </div>
      <div id="body">
        <div>
          <h2>Category</h2>
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
          <h2 id="timetable-big-title">Timetable</h2>
          <div className="timetable-title">
            <p>시작시간</p>
            <p>종료시간</p>
            <p>카테고리</p>
          </div>
          <div className="timetable">
            <TimeDropDown List={TimeList} />
            <TimeDropDown List={TimeList} />
            <TimeDropDown List={userTodo} />
          </div>
          <div className="timetable">
            <TimeDropDown List={TimeList} />
            <TimeDropDown List={TimeList} />
            <TimeDropDown List={userTodo} />
          </div>
          <div className="timetable">
            <TimeDropDown List={TimeList} />
            <TimeDropDown List={TimeList} />
            <TimeDropDown List={userTodo} />
          </div>
          <div className="timetable">
            <TimeDropDown List={TimeList} />
            <TimeDropDown List={TimeList} />
            <TimeDropDown List={userTodo} />
          </div>
          <div className="timetable">
            <TimeDropDown List={TimeList} />
            <TimeDropDown List={TimeList} />
            <TimeDropDown List={userTodo} />
          </div>
          <div className="timetable">
            <TimeDropDown List={TimeList} />
            <TimeDropDown List={TimeList} />
            <TimeDropDown List={userTodo} />
          </div>
          <div className="timetable">
            <TimeDropDown List={TimeList} />
            <TimeDropDown List={TimeList} />
            <TimeDropDown List={userTodo} />
          </div>
        </div>
        <div>
          <div id="todo-box">
            <h2>todo</h2>
            <div className="todo3">
              <Todo number={1} />
              <Todo number={2} />
              <Todo number={3} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
