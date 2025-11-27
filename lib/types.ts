// Todo API Types

export interface Todo {
  id: number;
  title: string;
  completed: boolean;
  created_at: string;
  updated_at: string;
}

export interface ApiResponse<T = unknown> {
  success: boolean;
  message?: string;
  data?: T;
}

export interface CreateTodoInput {
  title: string;
}

export type TodoFilter = "all" | "pending" | "completed";
