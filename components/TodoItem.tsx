"use client";

import { useCompleteTodo, useDeleteTodo } from "@/lib/hooks";
import { Todo } from "@/lib/types";
import { CheckCircle2, Circle, Trash2, Loader2 } from "lucide-react";

function TodoItem({ todo }: { todo: Todo }) {
  const completeTodo = useCompleteTodo();
  const deleteTodo = useDeleteTodo();
  const isDeleting = deleteTodo.isPending;
  const isCompleting = completeTodo.isPending;

  return (
    <div
      className={`group relative flex items-center gap-4 p-4 rounded-xl border transition-all duration-300 ${
        todo.completed
          ? "bg-emerald-950/20 border-emerald-800/30"
          : "bg-zinc-900/50 border-zinc-800 hover:border-zinc-700 hover:bg-zinc-900"
      }`}
      style={{
        animationDelay: `${todo.id * 50}ms`,
      }}
    >
      <button
        onClick={() => !todo.completed && completeTodo.mutate(todo.id)}
        disabled={todo.completed || isCompleting}
        className={`shrink-0 transition-all duration-200 ${
          todo.completed
            ? "text-emerald-500"
            : "text-zinc-500 hover:text-emerald-400"
        } ${isCompleting ? "animate-pulse" : ""}`}
      >
        {todo.completed ? (
          <CheckCircle2 className="w-6 h-6" />
        ) : isCompleting ? (
          <Loader2 className="w-6 h-6 animate-spin" />
        ) : (
          <Circle className="w-6 h-6" />
        )}
      </button>

      <span
        className={`flex-1 text-base transition-all duration-200 ${
          todo.completed ? "text-zinc-500 line-through" : "text-zinc-100"
        }`}
      >
        {todo.title}
      </span>

      <span className="hidden sm:block text-xs text-zinc-600 font-mono">
        {new Date(todo.created_at).toLocaleDateString()}
      </span>

      <button
        onClick={() => deleteTodo.mutate(todo.id)}
        disabled={isDeleting}
        className={`shrink-0 p-2 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-200 ${
          isDeleting
            ? "text-zinc-500"
            : "text-zinc-500 hover:text-rose-400 hover:bg-rose-500/10"
        }`}
      >
        {isDeleting ? (
          <Loader2 className="w-4 h-4 animate-spin" />
        ) : (
          <Trash2 className="w-4 h-4" />
        )}
      </button>
    </div>
  );
}

export default TodoItem;
