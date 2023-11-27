import "./App.css";
import TodoInsert from "./components/TodoInsert";
import TodoTemplate from "./components/TodoTemplate";

function App() {
  return (
    <div>
      <TodoTemplate>
        <TodoInsert />
      </TodoTemplate>
    </div>
  );
}

export default App;
