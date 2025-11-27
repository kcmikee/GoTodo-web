import axios from "axios";
import type { Todo, ApiResponse, CreateTodoInput } from "./types";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000",
  headers: {
    "Content-Type": "application/json",
  },
});

// Todo API Service
export const todoApi = {
  getAll: async (): Promise<Todo[]> => {
    const { data } = await api.get<ApiResponse<Todo[]>>("/api/todos");
    return data.data || [];
  },

  getPending: async (): Promise<Todo[]> => {
    const { data } = await api.get<ApiResponse<Todo[]>>("/api/todos/pending");
    return data.data || [];
  },

  getCompleted: async (): Promise<Todo[]> => {
    const { data } = await api.get<ApiResponse<Todo[]>>("/api/todos/completed");
    return data.data || [];
  },

  create: async (input: CreateTodoInput): Promise<ApiResponse> => {
    const { data } = await api.post<ApiResponse>("/api/todos", input);
    return data;
  },

  complete: async (id: number): Promise<ApiResponse> => {
    const { data } = await api.patch<ApiResponse>(`/api/todos/${id}/complete`);
    return data;
  },

  delete: async (id: number): Promise<ApiResponse> => {
    const { data } = await api.delete<ApiResponse>(`/api/todos/${id}`);
    return data;
  },
};

export default api;
