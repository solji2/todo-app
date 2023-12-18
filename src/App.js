import "./App.css";
import TodoInsert from "./components/TodoInsert";
import TodoTemplate from "./components/TodoTemplate";
import TodoList from "./components/TodoList";
import { useCallback, useReducer, useRef, useState } from "react";

function createBulkTodos() {
  const array = []; // 배열 선언
  for (let i = 1; i <= 5; i++) {
    array.push({
      id: i,
      text: `할 일${i}`,
      checked: false,
    });
  }
  return array;
}

//useReducer 사용하기
function todoReducer(todos, action) {
  switch (action.type) {
    case "INSERT": //추가
      return todos.concat(action.todo);
    case "REMOVE": //제거
      return todos.filter((todo) => todo.id !== action.id);
    case "TOGGLe": //토글
      return todos.map((todo) =>
        todo.id === action.id ? { ...todo, checked: !todo.checked } : todo
      );
    default:
      break;
  }
}

const App = () => {
  //const [todos, setTodos] = useState(createBulkTodos);

  const [todos, dispatch] = useReducer(todoReducer, undefined, createBulkTodos);

  //교윳값으로 사용될 id
  //ref를 사용하여 변수 담기
  //useState가 아닌 useRef를 사용한 이유 -> id값은 렌더링되는 정보가 아니기때문
  const nextId = useRef(6);

  const onInsert = useCallback((text) => {
    const todo = {
      id: nextId.current,
      text,
      checked: false,
    };

    dispatch({ type: "INSERT", todo });
    nextId.current += 1; //1씩 더하기
  }, []);

  const onRemove = useCallback((id) => {
    dispatch({ type: "REMOVE", id });
  }, []);

  const onToggle = useCallback((id) => {
    dispatch({ type: "TOGGLe", id });
  }, []);

  return (
    <div>
      <TodoTemplate>
        <TodoInsert onInsert={onInsert} />
        <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
      </TodoTemplate>
    </div>
  );
};

export default App;
