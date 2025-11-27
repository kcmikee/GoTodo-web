"use client";

import { useTodoStore } from "@/lib/store";
import { TodoFilter } from "@/lib/types";
import { CheckCheck, Clock, ListTodo } from "lucide-react";

const filterOptions: {
  value: TodoFilter;
  label: string;
  icon: React.ReactNode;
}[] = [
  { value: "all", label: "All", icon: <ListTodo className="w-4 h-4" /> },
  { value: "pending", label: "Pending", icon: <Clock className="w-4 h-4" /> },
  {
    value: "completed",
    label: "Completed",
    icon: <CheckCheck className="w-4 h-4" />,
  },
];

function FilterTabs() {
  const { filter, setFilter } = useTodoStore();

  return (
    <div className="flex gap-1 p-1 bg-zinc-900 rounded-xl border border-zinc-800">
      {filterOptions.map((option) => (
        <button
          key={option.value}
          onClick={() => setFilter(option.value)}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
            filter === option.value
              ? "bg-zinc-800 text-zinc-100"
              : "text-zinc-500 hover:text-zinc-300"
          }`}
        >
          {option.icon}
          <span>{option.label}</span>
        </button>
      ))}
    </div>
  );
}

export default FilterTabs;
