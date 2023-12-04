import React from "react";
import TodoListItem from "./TodoListItem";
import "./TodoList.scss";

const TodoList = ({ todos }) => {
  return (
    <div className="TodoList">
      {todos.map(
        (
          todo // props로 받아온 todos  배열을 배열 내장 함수 map을 통해 렌더링
        ) => (
          <TodoListItem todo={todo} key={todo.id} />
        )
      )}
    </div>
  );
};

export default TodoList;
