export default function TodoItem({ todo, onToggle, onDelete }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "10px",
        borderBottom: "1px solid #eee",
        fontSize: "18px"
      }}
    >
      <div
        onClick={() => onToggle(todo.id)}
        style={{
          textDecoration: todo.done ? "line-through" : "none",
          cursor: "pointer",
          color: todo.done ? "#888" : "#000"
        }}
      >
        {todo.text}
      </div>

      <button
        onClick={() => onDelete(todo.id)}
        style={{
          background: "#ff4444",
          color: "#fff",
          border: "none",
          borderRadius: "4px",
          padding: "4px 8px",
          cursor: "pointer"
        }}
      >
        删除
      </button>
    </div>
  );
}