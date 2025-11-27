"use client";
import { useCreateTodo } from "@/lib/hooks";
import { Loader2, Plus } from "lucide-react";
import { useState } from "react";

function CreateTodoForm() {
  const [title, setTitle] = useState("");
  const createTodo = useCreateTodo();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;

    createTodo.mutate(
      { title: title.trim() },
      {
        onSuccess: () => setTitle(""),
      }
    );
  };

  return (
    <form onSubmit={handleSubmit} className="relative">
      <div className="flex gap-3">
        <div className="relative flex-1">
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="What needs to be done?"
            className="w-full px-5 py-4 bg-zinc-900 border border-zinc-800 rounded-xl text-zinc-100 placeholder:text-zinc-600 focus:outline-none focus:border-violet-500/50 focus:ring-2 focus:ring-violet-500/20 transition-all duration-200"
            disabled={createTodo.isPending}
          />
          <div className="absolute inset-0 rounded-xl bg-linear-to-r from-violet-500/10 to-fuchsia-500/10 opacity-0 focus-within:opacity-100 -z-10 blur-xl transition-opacity duration-300" />
        </div>
        <button
          type="submit"
          disabled={!title.trim() || createTodo.isPending}
          className="flex items-center justify-center gap-2 px-6 py-4 bg-linear-to-r from-violet-600 to-fuchsia-600 hover:from-violet-500 hover:to-fuchsia-500 disabled:from-zinc-700 disabled:to-zinc-700 disabled:text-zinc-500 text-white font-medium rounded-xl transition-all duration-200 disabled:cursor-not-allowed"
        >
          {createTodo.isPending ? (
            <Loader2 className="w-5 h-5 animate-spin" />
          ) : (
            <>
              <Plus className="w-5 h-5" />
              <span className="hidden sm:inline">Add</span>
            </>
          )}
        </button>
      </div>
    </form>
  );
}
export default CreateTodoForm;
