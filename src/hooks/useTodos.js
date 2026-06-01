import { useState, useEffect } from "react";

export function useTodos() {
  // 从本地存储读取初始数据
  const [todos, setTodos] = useState(() => {
    const saved = localStorage.getItem("todos");
    return saved ? JSON.parse(saved) : [];
  });

  // 变化时自动存本地
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  // 添加
  const addTodo = (text) => {
    if (!text.trim()) return;
    setTodos([
      ...todos,
      { id: Date.now(), text: text.trim(), done: false }
    ]);
  };

  // 切换完成/未完成
  const toggleTodo = (id) => {
    setTodos(
      todos.map(t =>
        t.id === id ? { ...t, done: !t.done } : t
      )
    );
  };

  // 删除
  const deleteTodo = (id) => {
    setTodos(todos.filter(t => t.id !== id));
  };

  return {
    todos,
    addTodo,
    toggleTodo,
    deleteTodo
  };
}