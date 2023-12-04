import React, { useCallback, useState } from "react";
import { MdAdd } from "react-icons/md";
import "./TodoInsert.scss";

const TodoInsert = () => {
  const [value, setValue] = useState("");

  const onChange = useCallback((e) => {
    //컴포넌트가 리렌더링될 때마다 함수를 새로 만드는 것이 아니라 한 번 함수를 만들고 재사용할 수 있도록 useCallback 사용
    console.log(e.target.value);
    setValue(e.target.value);
  }, []);
  return (
    <form className="TodoInsert">
      <input
        placeholder="할 일을 입력하세요."
        value={value}
        onChange={onChange}
      />
      <button type="submit">
        <MdAdd />
      </button>
    </form>
  );
};

export default TodoInsert;
