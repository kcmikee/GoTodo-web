"use client";
import { useTodos } from "@/lib/hooks";
import { useTodoStore } from "@/lib/store";
import { Loader2, Sparkles } from "lucide-react";
import TodoItem from "./TodoItem";

function TodoList() {
  const filter = useTodoStore((state) => state.filter);
  const { data: todos, isLoading, error } = useTodos(filter);

  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center py-20 gap-4">
        <Loader2 className="w-8 h-8 text-violet-500 animate-spin" />
        <p className="text-zinc-500">Loading tasks...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center py-20 gap-4 text-center">
        <div className="w-16 h-16 rounded-full bg-rose-500/10 flex items-center justify-center">
          <span className="text-2xl">⚠️</span>
        </div>
        <div>
          <p className="text-zinc-300 font-medium">Unable to load tasks</p>
          <p className="text-zinc-500 text-sm mt-1">
            Make sure the API server is running on port 8000
          </p>
        </div>
      </div>
    );
  }

  if (!todos || todos.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20 gap-4 text-center">
        <div className="w-20 h-20 rounded-full bg-linear-to-br from-violet-500/20 to-fuchsia-500/20 flex items-center justify-center">
          <Sparkles className="w-10 h-10 text-violet-400" />
        </div>
        <div>
          <p className="text-zinc-300 font-medium text-lg">No tasks yet</p>
          <p className="text-zinc-500 text-sm mt-1">
            {filter === "all"
              ? "Create your first task to get started!"
              : filter === "pending"
              ? "No pending tasks. Great job!"
              : "No completed tasks yet."}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-3">
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
}

export default TodoList;
