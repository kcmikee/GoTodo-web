import { Sparkles } from "lucide-react";
import Stats from "@/components/Stats";
import CreateTodoForm from "@/components/CreateTodoForm";
import FilterTabs from "@/components/FilterTabs";
import TodoList from "@/components/TodoList";

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,var(--tw-gradient-stops))] from-violet-900/20 via-zinc-950 to-zinc-950" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-linear-to-b from-violet-500/10 to-transparent blur-3xl" />

      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <main className="relative max-w-2xl mx-auto px-6 py-12 sm:py-20">
        <header className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-violet-500/10 border border-violet-500/20 rounded-full text-violet-400 text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            <span>Task Manager</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-zinc-100 tracking-tight">
            Go
            <span className="text-transparent bg-clip-text bg-linear-to-r from-violet-400 to-fuchsia-400">
              Todo
            </span>
          </h1>
          <p className="text-zinc-500 mt-3 text-lg">
            Organize your tasks with elegance
          </p>
        </header>

        <section className="mb-8">
          <Stats />
        </section>

        <section className="mb-8">
          <CreateTodoForm />
        </section>

        <section className="mb-6">
          <FilterTabs />
        </section>

        <section>
          <TodoList />
        </section>

        <footer className="mt-16 text-center">
          <p className="text-zinc-600 text-sm">Built with Go & Next.js</p>
        </footer>
      </main>
    </div>
  );
}
