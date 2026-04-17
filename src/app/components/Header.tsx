import { UserCircle } from "lucide-react";

export function Header() {
  return (
    <header className="bg-white border-b border-slate-200 h-16 flex items-center justify-between px-6 sticky top-0 z-20 shrink-0">
      <div className="flex items-center gap-4 text-slate-700">
        <h2 className="text-lg font-semibold">Portfolio Dashboard</h2>
      </div>

      <div className="flex items-center gap-2 cursor-pointer group">
        <div className="text-right hidden sm:block">
          <div className="text-sm font-medium text-slate-700 group-hover:text-indigo-600 transition-colors">Hong Kyung-pyo</div>
          <div className="text-xs text-slate-500">System Architect PM</div>
        </div>
        <UserCircle className="w-8 h-8 text-slate-400 group-hover:text-indigo-600 transition-colors" />
      </div>
    </header>
  );
}