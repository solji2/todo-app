import React, { useCallback } from "react";

import TodoListItem from "./TodoListItem";
import "./TodoList.scss";
import { List } from "../../node_modules/react-virtualized/dist/commonjs/index";

const TodoList = ({ todos, onRemove, onToggle }) => {
  const rowRenderer = useCallback(
    ({ index, key, style }) => {
      const todo = todos[index];
      //console.log("todo:", todo);
      return (
        <TodoListItem
          todo={todo}
          key={key}
          onRemove={onRemove}
          onToggle={onToggle}
          style={style}
        />
      );
    },
    [todos, onRemove, onToggle]
  );

  return (
    <List
      classNeme="TodoList"
      width={512} //전체크기
      height={513} //전체높이
      rowCount={todos.length} //항목개수
      rowHeight={57} //항목높이
      rowRenderer={rowRenderer} //항목을 렌더링할때 쓰느 함수
      list={todos} //배열
      style={{ outline: "none" }} //List에 기본 적용되는 outline 스타일 제거
    ></List>
  );
};

export default TodoList;
