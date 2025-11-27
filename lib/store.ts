import { create } from "zustand";
import type { TodoFilter } from "./types";

interface TodoStore {
  filter: TodoFilter;
  setFilter: (filter: TodoFilter) => void;

  newTodoTitle: string;
  setNewTodoTitle: (title: string) => void;
  clearNewTodoTitle: () => void;

  isCreating: boolean;
  setIsCreating: (isCreating: boolean) => void;
}

export const useTodoStore = create<TodoStore>((set) => ({
  filter: "all",
  setFilter: (filter) => set({ filter }),

  newTodoTitle: "",
  setNewTodoTitle: (title) => set({ newTodoTitle: title }),
  clearNewTodoTitle: () => set({ newTodoTitle: "" }),

  isCreating: false,
  setIsCreating: (isCreating) => set({ isCreating }),
}));
