import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { todoApi } from "./api";
import type { CreateTodoInput, TodoFilter } from "./types";

export const todoKeys = {
  all: ["todos"] as const,
  lists: () => [...todoKeys.all, "list"] as const,
  list: (filter: TodoFilter) => [...todoKeys.lists(), filter] as const,
};

export function useTodos(filter: TodoFilter = "all") {
  return useQuery({
    queryKey: todoKeys.list(filter),
    queryFn: async () => {
      switch (filter) {
        case "pending":
          return todoApi.getPending();
        case "completed":
          return todoApi.getCompleted();
        default:
          return todoApi.getAll();
      }
    },
  });
}

export function useCreateTodo() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (input: CreateTodoInput) => todoApi.create(input),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: todoKeys.all });
    },
  });
}

export function useCompleteTodo() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: number) => todoApi.complete(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: todoKeys.all });
    },
  });
}

export function useDeleteTodo() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: number) => todoApi.delete(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: todoKeys.all });
    },
  });
}
