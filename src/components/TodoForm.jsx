import { useState } from "react";

export default function TodoForm({ onAdd }) {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(text);
    setText("");
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="输入任务..."
        style={{
          width: "70%",
          padding: "8px",
          fontSize: "16px"
        }}
      />
      <button
        type="submit"
        style={{
          padding: "8px 16px",
          marginLeft: "8px",
          fontSize: "16px"
        }}
      >
        添加
      </button>
    </form>
  );
}