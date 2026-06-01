import { useState } from "react";
import { useTodos } from "./hooks/useTodos";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App() {
  const { todos, addTodo, toggleTodo, deleteTodo } = useTodos();
  const [filter, setFilter] = useState("all"); // 过滤状态

  return (
    <div style={{ maxWidth: "500px", margin: "40px auto" }}>
      <h1 style={{ textAlign: "center" }}>TodoList</h1>

      {/* 添加表单 */}
      <TodoForm onAdd={addTodo} />

      {/* 过滤按钮 */}
      <div style={{
        display: "flex",
        gap: "8px",
        marginBottom: "16px"
      }}>
        <button
          onClick={() => setFilter("all")}
          style={{
            padding: "6px 12px",
            flex: 1,
            backgroundColor: filter === "all" ? "#2196f3" : "#fff",
            color: filter === "all" ? "#fff" : "#000"
          }}
        >
          全部
        </button>
        <button
          onClick={() => setFilter("undone")}
          style={{
            padding: "6px 12px",
            flex: 1,
            backgroundColor: filter === "undone" ? "#2196f3" : "#fff",
            color: filter === "undone" ? "#fff" : "#000"
          }}
        >
          未完成
        </button>
        <button
          onClick={() => setFilter("done")}
          style={{
            padding: "6px 12px",
            flex: 1,
            backgroundColor: filter === "done" ? "#2196f3" : "#fff",
            color: filter === "done" ? "#fff" : "#000"
          }}
        >
          已完成
        </button>
      </div>

      {/* 列表 */}
      <TodoList
        todos={todos}
        filter={filter}
        onToggle={toggleTodo}
        onDelete={deleteTodo}
      />
    </div>
  );
}

export default App;