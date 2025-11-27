"use client";
import { useTodos } from "@/lib/hooks";

function Stats() {
  const { data: allTodos } = useTodos("all");

  if (!allTodos) return null;

  const total = allTodos.length;
  const completed = allTodos.filter((t) => t.completed).length;
  const pending = total - completed;
  const progress = total > 0 ? (completed / total) * 100 : 0;

  return (
    <div className="grid grid-cols-3 gap-4">
      <div className="flex flex-col items-center p-4 bg-zinc-900/50 rounded-xl border border-zinc-800">
        <span className="text-2xl font-bold text-zinc-100">{total}</span>
        <span className="text-xs text-zinc-500 uppercase tracking-wide">
          Total
        </span>
      </div>
      <div className="flex flex-col items-center p-4 bg-amber-950/20 rounded-xl border border-amber-800/30">
        <span className="text-2xl font-bold text-amber-400">{pending}</span>
        <span className="text-xs text-amber-600 uppercase tracking-wide">
          Pending
        </span>
      </div>
      <div className="flex flex-col items-center p-4 bg-emerald-950/20 rounded-xl border border-emerald-800/30">
        <span className="text-2xl font-bold text-emerald-400">{completed}</span>
        <span className="text-xs text-emerald-600 uppercase tracking-wide">
          Done
        </span>
      </div>
      {total > 0 && (
        <div className="col-span-3">
          <div className="h-2 bg-zinc-800 rounded-full overflow-hidden">
            <div
              className="h-full bg-linear-to-r from-violet-500 to-emerald-500 transition-all duration-500 ease-out rounded-full"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="text-center text-xs text-zinc-500 mt-2">
            {progress.toFixed(0)}% complete
          </p>
        </div>
      )}
    </div>
  );
}

export default Stats;
