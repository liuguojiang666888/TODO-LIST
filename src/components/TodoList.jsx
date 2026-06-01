import TodoItem from "./TodoItem";

export default function TodoList({
  todos,
  filter,
  onToggle,
  onDelete
}) {
  // 过滤逻辑
  const filteredTodos = todos.filter(todo => {
    if (filter === "all") return true;
    if (filter === "done") return todo.done;
    if (filter === "undone") return !todo.done;
    return true;
  });

  if (filteredTodos.length === 0) {
    return <div style={{ marginTop: "10px" }}>暂无任务</div>;
  }

  return (
    <div style={{ marginTop: "10px" }}>
      {filteredTodos.map(todo => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}